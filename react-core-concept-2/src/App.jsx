import './App.css'
import Batsman from './Batsman'
import Counter from './Counter'

function App() {
  
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


      <Batsman></Batsman>

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
