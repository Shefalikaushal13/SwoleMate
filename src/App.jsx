import { useState } from 'react'
import Hero from './components/Hero';
import Generator from './components/Generator';
import Workout from './components/Workout';
import { generateWorkout } from './utils/functions';
import Home from './pages/Home';
import Footer from './components/Footer';
import Navbar from './components/NavBar';

function App() {
  const[workout,setWorkout]=useState(null)
  const[poison,setPoison]=useState('individual')
  const[muscles,setMuscles]=useState([])
  const[goal,setGoal]=useState('strength_power')

  function updateWorkout(){
    if(muscles.length<1){
      return
    }
    let newWorkout= generateWorkout({poison,muscles,goal})
    setWorkout(newWorkout)

    window.location.href='#workout'
  }

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950
    text-white text-sm sm:text-base'> {/*gradient-to-r menas gradient to right*/}
      <Navbar/>
      <Home/>
      <Hero/>
      <Generator 
        poison={poison}
        setPoison={setPoison}
        muscles={muscles}
        setMuscles={setMuscles} 
        goal={goal}
        setGoal={setGoal}
        updateWorkout={updateWorkout}
      />
      {workout && ( <Workout workout={workout} />)}
      <Footer/>
    </main>
  )
}

export default App
