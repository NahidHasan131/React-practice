export  default function Post({post}){
    const {title, body} = post;
    return(
        <div style={{border: '1px solid orange', padding:'10px', margin: '20px'}}>
            <h3>Title: {title}</h3>
            <p>{body}</p>
        </div>
    )
}