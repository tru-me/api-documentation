import fs from 'fs';
import path from 'path';
import Markdoc from '@markdoc/markdoc';
import React from 'react';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'docs', 'index.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');

  const ast = Markdoc.parse(fileContents);
  const content = Markdoc.transform(ast);

  return {
    props: {
      content: JSON.stringify(content),
    },
  };
}

export default function ApiDocsPage({ content }) {
  const parsedContent = JSON.parse(content);

  return <div>{Markdoc.renderers.react(parsedContent, React)}</div>;
}
