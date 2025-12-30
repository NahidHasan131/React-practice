import { use } from "react"

export default function User({fetchUsers}){
    const users = use(fetchUsers);
    console.log(users);
    return(
        <div>
            <h2>Users: {users.length}</h2>
        </div>
    )
}