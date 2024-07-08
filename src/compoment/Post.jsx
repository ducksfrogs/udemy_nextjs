const names = ['naxiu', 'mini'];

function Post() {
    const chooseName = Math.random() > 0.5 ? names[0] : names[1];

    return (
    <div>
        <p>{chooseName}</p>
        <p>react js is awsome</p>
    </div>
    );
}

export default Post;