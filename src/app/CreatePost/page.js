import PostForm from "@/component/postForm/postForm";
import Head from "next/head";

export default function CreatePost() {
    return (
        <>
            <Head>
                <title>Insightful Bytes - Exploring the Latest in Technology and Digital Trends</title>
                <meta name="description" content={''} />
                <meta property="og:title" content={'Insightful Bytes - Exploring the Latest in Technology and Digital Trends'} />
                <meta property="og:description" content={'Insightful Bytes is a comprehensive blog dedicated to exploring the constantly evolving world of technology and digital trends. With in-depth analysis, expert insights, and practical tips, we aim to empower readers to stay ahead of the curve and navigate the digital landscape with confidence. From the latest gadget reviews to industry innovations, digital marketing strategies, and more, Insightful Bytes is your go-to destination for the information you need to thrive in the digital age.'} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="paradisehubBlog" />
                <meta property="og:image" content="https://paradisehub.ir/favicon.png" />
                <meta property="og:url" content={"http://localhost:3000/create-post"} />
                <meta property="og:local" content="en" />
                <link rel="canonical" href={"http://localhost:3000/create-post"} />
            </Head>
            <section>
                <PostForm/>
            </section>
        </>
    );
}