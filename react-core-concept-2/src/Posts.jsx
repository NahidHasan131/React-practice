import { use } from "react";
import Post from "./Post";

export default function Posts({fetchPost}){
    const post = use(fetchPost);
    console.log(post);
    return(
        <div style={{border:'2px solid gold', width: '700px', margin:'10px'}}>
            <h2>All Posts Component: {post.length}</h2>
            {
                post.map(p=>  <Post key={p.id} post={p}></Post>)
            }
        </div>
    )
}