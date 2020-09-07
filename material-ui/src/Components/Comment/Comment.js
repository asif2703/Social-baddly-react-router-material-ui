import React from 'react';
import {useParams} from 'react-router-dom';

const Comment = () => {
    const {postId} = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])
    return (
        <div>
            this is comment
        </div>
    );
};

export default Comment;