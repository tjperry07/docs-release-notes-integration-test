import React from 'react';
import Layout from '@theme/Layout';
import { API } from '@stoplight/elements';
import '@stoplight/elements/styles.min.css';

function App() {
    return (
        <Layout>
            <div className="App">
                <API
                    apiDescriptionUrl="openapi/jobs.json"
                />
            </div>

        </Layout>
    );
}

  export default App;