
export default function Post({post}){
    console.log("post",post);
    return (
        <div className="card">
            <p>post:</p><br />
            <p>{post.title}</p>
        </div>
    );
}