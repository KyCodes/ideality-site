import React from 'react';
import Layout from '../components/Layout';

export default function MissingPage() {
    return (
        <Layout title='404'>
            <h1 style={{ textAlign: 'center' }}>Page not found...Sorry :(</h1>
        </Layout>
    );
}
