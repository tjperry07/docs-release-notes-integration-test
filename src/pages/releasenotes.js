import React, { useEffect } from 'react';
import Layout from '@theme/Layout';

export default function Hello() {
  useEffect(() => {
    noticeable.render('widget', 'QEaR7QAA7BkjnKUf05xu');
    
    }, []); // The empty array means this effect runs once after the initial render

  return (
    <Layout title="Hello" description="Hello React Page">
      <div id="noticeable-newspage-embed"></div>
    </Layout>
    );
}