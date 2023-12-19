import React, { useState } from 'react';

const Comments = ({ comment }) => {
    const [showChildren, setShowChildren] = useState(false);

    const toggleShowChildren = () => {
        setShowChildren(!showChildren);
    };

    return (
        <div>
            {comment.text && (
                <div className="p-2 backdrop-blur overflow-hidden bg-blue-50 m-2 space-x-2 rounded-2xl">
                    <h1>{comment.text}</h1>
                    <h1>- {comment.author}</h1>
                </div>
            )}
            {comment.children && comment.children.length > 0 && (
                <div>
                    <button onClick={toggleShowChildren}>
                        {showChildren ? 'Hide Replies' : 'Show Replies'}
                    </button>
                    {showChildren && (
                        <div>
                            {comment.children.map((childComment) => (
                                <div key={childComment.id}>
                                    <CommentsNested comment={childComment} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

const CommentsNested = ({ comment }) => {
    const [showChildren, setShowChildren] = useState(false);

    const toggleShowChildren = () => {
        setShowChildren(!showChildren);
    };

    return (
        <div>
            {comment.text && (
                <div className="p-2 backdrop-blur bg-yellow-50 m-2 overflow-hidden space-x-2 rounded-2xl">
                    <h1>{comment.text}</h1>
                    <h1>- {comment.author}</h1>
                </div>
            )}
            {comment.children && comment.children.length > 0 && (
                <div>
                    <button onClick={toggleShowChildren}>
                        {showChildren ? 'Hide Replies' : 'Show Replies'}
                    </button>
                    {showChildren && (
                        <div>
                            {comment.children.map((childComment) => (
                                <div key={childComment.id}>
                                    <CommentsNested comment={childComment} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Comments;
