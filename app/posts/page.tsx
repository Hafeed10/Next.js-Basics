"use client"

import React, { useEffect, useState } from 'react';

type Post = {
    id: number,
    title: string,
    content: string,
}

function Page() {
    const [returndData, setReturndData] = useState<Post[]>([]); // Define state correctly

    useEffect(() => {
        // Fetch data from API
        const fetchData = async () => {
            const response = await fetch('/api/posts');
            const data = await response.json();
            setReturndData(data); // Set state with fetched data
        };

        fetchData(); // Call the fetchData function
    }, []); // Empty dependency array to run only once on mount

    return (
        <div>
            {returndData.map((post: Post) => (
                <div key={post.id}>
                    <h2 className='font-bold'>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
}

export default Page;
