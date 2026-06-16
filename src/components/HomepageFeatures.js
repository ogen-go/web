import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'No reflection',
    description: (
      <ul>
        <li>JSON encoding is code-generated and optimized, using <a href="https://github.com/go-faster/jx">go-faster/jx</a> for speed and to overcome <code>encoding/json</code> limitations</li>
        <li>Validation is code-generated directly from the specification</li>
        <li>No <code>interface{}</code> or <code>any</code> on the hot path</li>
      </ul>
    ),
  },
  {
    title: 'No boilerplate',
    description: (
      <ul>
        <li>Structures are generated from the OpenAPI v3 specification</li>
        <li>Path arguments, headers and query parameters are parsed into typed structures</li>
        <li>String formats like <code>uuid</code>, <code>date</code>, <code>date-time</code> and <code>uri</code> map to Go types directly</li>
      </ul>
    ),
  },
  {
    title: 'Type-safe client & server',
    description: (
      <ul>
        <li>Statically typed client and server generated from a single spec</li>
        <li>Implement one <code>Handler</code> interface and you are done</li>
        <li>Code-generated static radix router for fast request dispatch</li>
      </ul>
    ),
  },
  {
    title: 'Optional & nullable',
    description: (
      <ul>
        <li>Optional and nullable fields <b>without pointers</b> when possible</li>
        <li>Generated <code>OptT</code>, <code>NilT</code> and <code>OptNilT</code> wrappers with helpers</li>
        <li>Array <code>nil</code> semantics follow the specification</li>
      </ul>
    ),
  },
  {
    title: 'Sum types',
    description: (
      <ul>
        <li>Sum types are generated for <code>oneOf</code></li>
        <li>Discriminator field is used when defined in the schema</li>
        <li>Otherwise the variant is inferred by type, unique fields or enum values</li>
      </ul>
    ),
  },
  {
    title: 'Batteries included',
    description: (
      <ul>
        <li>OpenTelemetry tracing and metrics out of the box</li>
        <li>Server-Sent Events (SSE) client generation</li>
        <li>Middlewares, convenient errors and per-request options</li>
      </ul>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="padding-horiz--md padding-vert--md">
        <h3>{title}</h3>
        <div>{description}</div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
