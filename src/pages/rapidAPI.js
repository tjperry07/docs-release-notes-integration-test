import React from 'react';
import Layout from '@theme/Layout';
import 'rapidoc'

function App() {
    return (
        <Layout>
            <rapi-doc
                spec-url="openapi/jobs.json"
                render-style="read"
                style={{ height: "100vh", width: "100%" }}
            >
            </rapi-doc>

        </Layout>
    );
}

export default App;