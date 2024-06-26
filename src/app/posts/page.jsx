import React from 'react';
import { getPosts } from './api';
import Link from 'next/link';

const PostsPage = async () => {

    const postsData = await getPosts()

    return (
        <div className='my-10 grid grid-cols-4 gap-3'>
            {
                postsData?.slice(0, 20)?.map(post => (
                    <div key={post.id} className='border-2 border-cyan-400 p-3'>
                        <h2>Title :- {post.title}</h2>
                        <p>Body :- {post.body}</p>
                        <button className='border-2 border-cyan-400 p-2'>
                            <Link href={`/posts/${post.id}`}>Details</Link>
                        </button>
                    </div>
                ))
            }
        </div>
    );
};

export default PostsPage;