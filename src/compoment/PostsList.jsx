import Post from "./Post";
import classes from  './PostsList.module.css';


function PostsList () {
    return (
        <ul className={classes.posts}>
            <Post auther="max" body="mmmm"/>
            <Post auther="momomo" body="dddd"/>
        </ul>
    );
}

export default PostsList;