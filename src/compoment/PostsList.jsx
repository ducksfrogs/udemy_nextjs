import Post from "./Post";
import NewPost from './NewPost';

import classes from  './PostsList.module.css';


function PostsList () {
    return (
        <>
            <NewPost />
            <ul className={classes.posts}>
                <Post auther="max" body="mmmm"/>
                <Post auther="momomo" body="dddd"/>
            </ul>
        </>
    );
}

export default PostsList;