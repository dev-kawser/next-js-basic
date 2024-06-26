
const getPost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data
}

const PostDetailsPage = async ({ params }) => {

    const post = await getPost(params.id)

    return (
        <div className='h-screen'>
            <div className='border-2 border-cyan-400 p-3'>
                <h1>Id :- {post.id}</h1>
                <h2>Title :- {post.title}</h2>
                <p>Body :- {post.body}</p>
            </div>
        </div>
    );
};

export default PostDetailsPage;