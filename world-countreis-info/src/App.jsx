import { Suspense } from 'react'
import './App.css'
import Countries from './Components/Countries/Countries'

const promiseCountries  = fetch('https://restcountries.com/v3.1/all?fields=name,flags,capital,population,independent')
  .then(res => res.json())

function App() {
  

  return (
    <>
    
      <Suspense fallback ={<h2>Countries Loading....</h2>}>
        <Countries promiseCountries = {promiseCountries}></Countries>
      </Suspense>



    </>
  )
}

export default App
