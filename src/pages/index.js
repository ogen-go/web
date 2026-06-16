import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get started
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            href="https://github.com/ogen-go/ogen">
            GitHub
          </Link>
        </div>
        <div className={styles.install}>
          <CodeBlock language="bash">
            go get -tool github.com/ogen-go/ogen/cmd/ogen@latest
          </CodeBlock>
        </div>
      </div>
    </header>
  );
}

const spec = `paths:
  /pet/{petId}:
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
          description: Pet
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Pet'`;

const generated = `// Pet describes #/components/schemas/Pet.
type Pet struct {
    ID   int64     \`json:"id"\`
    Name string    \`json:"name"\`
    Tag  OptUUID   \`json:"tag"\`
}

// Handler handles operations described
// by OpenAPI v3 specification.
type Handler interface {
    // GET /pet/{petId}
    GetPetById(ctx context.Context,
        params GetPetByIdParams) (*Pet, error)
}`;

function Showcase() {
  return (
    <section className={styles.showcase}>
      <div className="container">
        <h2 className={styles.showcaseTitle}>From spec to Go, instantly</h2>
        <p className={styles.showcaseSubtitle}>
          Describe your API once in OpenAPI v3 and let ogen generate a
          statically typed client and server.
        </p>
        <div className="row">
          <div className="col col--6">
            <CodeBlock language="yaml" title="petstore.yml">
              {spec}
            </CodeBlock>
          </div>
          <div className="col col--6">
            <CodeBlock language="go" title="generated Go">
              {generated}
            </CodeBlock>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="OpenAPI v3 code generator for Go">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <Showcase />
      </main>
    </Layout>
  );
}
