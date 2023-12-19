import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function Details() {
    const { objectID } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {

        fetch(`http://hn.algolia.com/api/v1/items/${objectID}`)
            .then((response) => response.json())
            .then((data) => setPost(data));
        console.log(post)
    }, [objectID]);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="p-2 flex flex-col backdrop-blur bg-green-50 m-2 rounded-2xl">
                <h2>{post.title}</h2>
                <p> {post.points}</p>
                <p className="ml-auto">- {post.author}</p>
            </div>

        </div>
    );
}

export default Details;
