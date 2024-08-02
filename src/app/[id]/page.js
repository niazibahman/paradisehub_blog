import PostDetail from "@/component/detail/detail";
import axios from "axios";

async function getPostDetail(id) {
    const result = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
    const data = JSON.parse(JSON.stringify(result.data));
    return { data }
}
export default async function PostDetailPage({ params }) {
    const post = await getPostDetail(params.id);
    return (
        <section>
            <PostDetail post={post} />
        </section>
    );
}