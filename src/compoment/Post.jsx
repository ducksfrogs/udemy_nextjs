import classes from'./Post.module.css';

function Post(props) {
    props.auther,
    props.body

    return (
    <div className={classes.post}>
        <p className={classes.auther}>{props.auther}</p>
        <p className={classes.text}>{props.body}</p>
    </div>
    );
}

export default Post;