import React, { Fragment } from 'react';
import Layout from '../components/Layout';

export default function DefaultPage({ pageContext }) {
    return (
        <Layout title={pageContext.title}>
            <h1>{pageContext.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
        </Layout>
    );
}
