import List from "@/component/list/list";
import axios from "axios";
import Head from "next/head";

async function getData(queryParam) {
  let page = 1;
  let totalPage = 0;
  const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
  let data = JSON.parse(JSON.stringify(result.data));
  if (queryParam.page !== null && queryParam.page !== undefined) {
    page = Number(queryParam.page);
  }
  if (data.length === 0) {
    totalPage = 0;
    page = 0;
  } else if (data.length > 15) {
    totalPage = Math.ceil(data.length / 15);
    data = data.slice(((page * 15) - 15), (page * 15));
  }
    return { data, totalPage, page };
  }
  export default async function Home({ searchParams }) {
    const { data, totalPage, page } = await getData(searchParams);
    return (
      <section>
                    <Head>
                <title>Insightful Bytes - Exploring the Latest in Technology and Digital Trends</title>
                <meta name="description" content={''} />
                <meta property="og:title" content={'Insightful Bytes - Exploring the Latest in Technology and Digital Trends'} />
                <meta property="og:description" content={'Insightful Bytes is a comprehensive blog dedicated to exploring the constantly evolving world of technology and digital trends. With in-depth analysis, expert insights, and practical tips, we aim to empower readers to stay ahead of the curve and navigate the digital landscape with confidence. From the latest gadget reviews to industry innovations, digital marketing strategies, and more, Insightful Bytes is your go-to destination for the information you need to thrive in the digital age.'} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="paradisehubBlog" />
                <meta property="og:image" content="https://paradisehub.ir/favicon.png" />
                <meta property="og:url" content={"http://localhost:3000/"} />
                <meta property="og:local" content="en" />
                <link rel="canonical" href={"http://localhost:3000/"} />
            </Head>
        <List data={data} totalPage={totalPage} page={page}/>
      </section>
    );
  }
