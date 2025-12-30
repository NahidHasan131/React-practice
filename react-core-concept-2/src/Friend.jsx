export default function Friend({friend}){
    console.log(friend);
    const {name, email} = friend;
    return(
        <div style={{border: "1px solid gold", margin: "10px", padding: "10px"}}>
            <h3>Name: {name}</h3>
            <h4>Email: {email}</h4>
        </div>
    )
}