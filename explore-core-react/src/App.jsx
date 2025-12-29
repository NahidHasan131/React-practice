
import './App.css'
import ToDo from './ToDo'
import Actor from './Actor';
import Singer from './Singer';

function App() {
  const time = 50;
  const Actors = ['Sakib Khan', 'Hero Alom', 'Bappa Raj', 'Salman Shah'];
  const singers = [
    {id: 1, name : "Arijit", Age : 45 },
    {id: 2, name : "Atif", Age : 40 },
    {id: 3, name : "Imran", Age : 35 },
  ]
  return (
    <>

      {
        singers.map(singer => <Singer key={singer.id}  singer= {singer}></Singer>)
      }


      {/* {
        Actors.map(actor=> <Actor actor={actor}></Actor> )
      } */}

      {/* <ToDo 
        task="Practice React" 
        isDone={true} 
        time = {time}>
      </ToDo>
      <ToDo task="Revise Js" isDone={false}></ToDo>
      <ToDo task="Create a Project" isDone ={true} time = {100}></ToDo> */}

      {/* <ToDo name="Nahid"></ToDo> */}

      {/* practice in this file     */}
      {/* <Information></Information>
      <Person></Person>
      <Qualification></Qualification>
      <Skill name="Javascript" library="React"></Skill>
      <Skill name="Python" library ="Django"></Skill>
      <Player name="Tamim" run= '5000'></Player>
      <Player name="Mushfik" run= '6000'></Player>
      <Player name="Hero Alom"></Player> */}
    </>
  )
}


function Information() {
  return(
    <h2 className='infoTitle'>My Information</h2>
  )
}

function Person(){
  const age = 26
  const name = "Nahid Hasan"
  var cStyle = {
    color: 'tomato',
    fontSize: '45px'
  }
  return(
    <div>
      <h3 style={cStyle}>My Name Is {name}</h3>
      <h4>My age is {age}</h4>
    </div>
  )
}

function Qualification(){
  return(
    <h3 style={{fontSize:"30px", color:'tomato'}}>Graduated from Varendra university</h3>
  )
}


// props come form property
function Skill(props){
 // console.log(props)
  return(
    <div style={{border: '2px solid green', color: 'tomato', marginBottom:'20px', borderRadius:"10px"}}>
      <h3>My skill: {props.name}</h3>
      <p>Expert in library: {props.library}</p>
    </div>
  )
}


// Props destructering
//const {name, run} = {name: 'Tamim', Run: '5000'}
function Player({name, run = 0}){
  return(
    <div style={{border: '2px solid #DDD', color: 'tomato', marginBottom:'20px', borderRadius:"10px"}}>
      <h3>Name: {name}</h3>
      <h3>Run: {run}</h3>
    </div>
  )
}



export default App
