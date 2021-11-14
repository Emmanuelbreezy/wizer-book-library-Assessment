import React from 'react';
import Head from 'next/head';
import Layout from '../../hoc/Layout/Layout';
import AddCategory from '../../containers/Categories/AddCategory';

export default function Category() {
    return (
        <>
        <Head>
          <title>Add Category - BookLib App</title>
          <meta name="description" content="Generated by create next app" />
        </Head>
        <Layout>
          <div className="all--category">
            <h3 className="display-4">Add Category</h3>
            <div className="container">
               <AddCategory />
            </div>
          </div>
        </Layout>
      
    </>
    )
}
