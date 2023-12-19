import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../components/Comments.jsx';

function Details() {
    const { objectID } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://hn.algolia.com/api/v1/items/${objectID}`);
                if (response.ok) {
                    const data = await response.json();
                    setPost(data);
                } else {
                    console.error(`Failed to fetch data. Status: ${response.status}`);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [objectID]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="p-2 flex flex-col backdrop-blur bg-green-50 m-2 rounded-2xl">
                <h2>{post.title}</h2>
                <p> {post.points}</p>
                <p className="ml-auto">- {post.author}</p>
            </div>
            <div>
                {post?.children.map((comment) => (
                    <Comments key={comment.id} comment={comment} />
                ))}
            </div>
        </div>
    );
}

export default Details;
