'use client'

import Head from "next/head";
import detailStyles from './detailStyle.js';

export default function PostDetail({ post }) {
    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.data.body} />
                <meta property="og:title" content={post.data.title} />
                <meta property="og:description" content={post.data.body} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="paradisehubBlog" />
                <meta property="og:image" content="https://paradisehub.ir/favicon.png" />
                <meta property="og:url" content={"http://localhost:3000/" + post.data.id} />
                <meta property="og:local" content="en" />
                <link rel="canonical" href={"http://localhost:3000/" + post.data.id} />
            </Head>
            <div className="container">
                <h1>{post.data.title}</h1>
                <p>{post.data.body}</p>
                <style jsx detail>
                    {detailStyles}
                </style>
            </div>
        </>
    );
}