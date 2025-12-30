import { Suspense } from 'react'
import './App.css'
import Batsman from './Batsman'
import Counter from './Counter'
import User from './User'
import Friends from './Friends'
import Posts from './Posts'

//  const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())


// const fetchFriend = async() =>{
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   return res.json();
// }

// Post Api
const fetchPosts = async ()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

function App() {

  //fetch function call
  const fetchPost = fetchPosts();

  // const fetchFriends = fetchFriend();

  
  function clickHandle(){
    alert('I am click')
  }

  const handleClick3 = () =>{
    alert('I am Click3')
  }

  const handleClick4 = (num)=>{
    const newnum = num + 5;
    alert(newnum);
  }

  return (
    <>


      <Suspense fallback={<h3>Loading Posts...</h3>}>
        <Posts fetchPost ={fetchPost} ></Posts>
      </Suspense>


      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <User fetchUsers={fetchUsers}></User>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Loading Friends...</h3>}>
        <Friends fetchFriends={fetchFriends}></Friends>
      </Suspense> */}


      {/* <Batsman></Batsman> */}

      {/* <Counter></Counter> */}

      {/* <button onClick={clickHandle}>Click</button>
      <button onClick={function clickHandle2(){alert('I am click2')}}>Click2</button>
      <button onClick={handleClick3}>Click3</button>
      <button onClick={()=>alert('I am click4')}>Click4</button>
      <button onClick={()=>handleClick4(5)}>Click4</button> */}
    </>
  )
}

export default App
