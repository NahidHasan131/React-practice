// export default function ToDo({name}){
//     return(
//         <div>
//             <h1>To Do List</h1>
//             <h3>name: {name} </h3>
//         </div>
//     )
// }


// export default function ToDo({task, isDone}){
//     if(isDone === true){
//            return <li>Done: {task}</li>
//     }else{
//         return <li>Do Now: {task}</li>
//     }
// }


// export default function ToDo({task, isDone, time = 0}){
//     if(isDone === true){
//            return <li>Done: {task}, Duration: {time}s</li>
//     }
//      return <li>To be done: {task}</li>
// }



// Conditional Rendering: Ternary
// export default function ToDo({task, isDone, time = 0}){
//        return isDone ? <li>Done: {task}, Duration: {time} </li> : <li>Not Done: {task}, Duration: {time} </li>
// }


// // Conditional Rendering: &&
// export default function ToDo({task, isDone, time = 0}){
//        return isDone && <li>Done: {task}, Time: {time} </li>
// }


// // Conditional Rendering: ||
// export default function ToDo({task, isDone, time = 0}){
//        return isDone || <li>Not Done: {task}, Time: {time} </li>
// }




//Conditional Rendering: use variable
export default function ToDo({task, isDone, time}){
    let displayTime = time ? time : 10;
    let listItem;
    if(isDone === true){
           listItem =  <li>Done: {task}, time: {time}</li>
    }else{
        listItem = <li>Do Now: {task}</li>
    }

    return listItem;
}







































