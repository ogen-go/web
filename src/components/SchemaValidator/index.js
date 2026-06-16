import React, {useCallback, useEffect, useRef, useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const DEFAULT_SPEC = `openapi: 3.0.3
info:
  title: Petstore
  version: 1.0.0
paths:
  /pets/{petId}:
    get:
      operationId: getPetById
      parameters:
        - name: petId
          in: path
          required: true
          schema:
            type: integer
            format: int64
      responses:
        '200':
          description: A pet
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Pet'
components:
  schemas:
    Pet:
      type: object
      required: [id, name]
      properties:
        id:
          type: integer
          format: int64
        name:
          type: string
`;

// loadOgen loads the wasm_exec.js glue and instantiates ogen.wasm exactly once,
// returning a promise that resolves when window.ogenValidate is available.
let ogenPromise = null;

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[data-src="${src}"]`);
    if (existing) {
      if (existing.dataset.loaded) {
        resolve();
      } else {
        existing.addEventListener('load', () => resolve());
        existing.addEventListener('error', reject);
      }
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.dataset.src = src;
    script.addEventListener('load', () => {
      script.dataset.loaded = 'true';
      resolve();
    });
    script.addEventListener('error', reject);
    document.head.appendChild(script);
  });
}

function loadOgen(execUrl, wasmUrl) {
  if (ogenPromise) {
    return ogenPromise;
  }
  ogenPromise = (async () => {
    await loadScript(execUrl);
    // eslint-disable-next-line no-undef
    const go = new Go();
    const resp = await fetch(wasmUrl);
    if (!resp.ok) {
      throw new Error(`fetch ${wasmUrl}: ${resp.status}`);
    }
    let instance;
    if (WebAssembly.instantiateStreaming) {
      try {
        ({instance} = await WebAssembly.instantiateStreaming(
          resp.clone(),
          go.importObject,
        ));
      } catch {
        // Fall back when the server sends a non-wasm Content-Type.
        instance = undefined;
      }
    }
    if (!instance) {
      const bytes = await resp.arrayBuffer();
      ({instance} = await WebAssembly.instantiate(bytes, go.importObject));
    }
    // go.run never resolves (the module blocks on select{}), so we do not await
    // it. The exported function is registered synchronously before it blocks.
    go.run(instance);
    if (typeof window.ogenValidate !== 'function') {
      throw new Error('ogenValidate was not registered by the wasm module');
    }
    return window.ogenValidate;
  })().catch((err) => {
    // Allow a later retry if loading failed.
    ogenPromise = null;
    throw err;
  });
  return ogenPromise;
}

function Validator() {
  const execUrl = useBaseUrl('/wasm/wasm_exec.js');
  const wasmUrl = useBaseUrl('/wasm/ogen.wasm');

  const [spec, setSpec] = useState(DEFAULT_SPEC);
  const [status, setStatus] = useState('loading'); // loading | ready | error
  const [loadError, setLoadError] = useState('');
  const [result, setResult] = useState(null);
  const validateRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    loadOgen(execUrl, wasmUrl)
      .then((fn) => {
        if (cancelled) return;
        validateRef.current = fn;
        setStatus('ready');
      })
      .catch((err) => {
        if (cancelled) return;
        setLoadError(String(err && err.message ? err.message : err));
        setStatus('error');
      });
    return () => {
      cancelled = true;
    };
  }, [execUrl, wasmUrl]);

  const onValidate = useCallback(() => {
    if (!validateRef.current) return;
    setResult(validateRef.current(spec));
  }, [spec]);

  return (
    <div className={styles.validator}>
      <textarea
        className={styles.editor}
        value={spec}
        spellCheck={false}
        onChange={(e) => setSpec(e.target.value)}
        aria-label="OpenAPI document"
      />
      <div className={styles.toolbar}>
        <button
          className="button button--primary"
          onClick={onValidate}
          disabled={status !== 'ready'}>
          {status === 'loading' ? 'Loading validator…' : 'Validate'}
        </button>
        {status === 'error' && (
          <span className={styles.loadError}>
            Failed to load validator: {loadError}
          </span>
        )}
      </div>
      {result && (
        <div
          className={result.ok ? styles.ok : styles.fail}
          role="status">
          {result.ok ? (
            <>
              <strong>Valid ✓</strong>
              <div className={styles.summary}>{result.summary}</div>
            </>
          ) : (
            <>
              <strong>Invalid ✗</strong>
              <pre className={styles.errorOutput}>{result.error}</pre>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default function SchemaValidator() {
  return (
    <BrowserOnly fallback={<div>Loading validator…</div>}>
      {() => <Validator />}
    </BrowserOnly>
  );
}
