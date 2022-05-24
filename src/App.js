import './App.css';
import {motion} from "framer-motion";
import { useState } from 'react';


function App() {

  const [move,setMove] = useState(false);
  return (
    <div className='App'>
      <br/>
      <br/>
      <motion.div animate={{ y: move ? 20 : -20}} 
      transition={{ type:"spring", bounce:1, duration: 5}}
      onClick={() => {
        setMove(!move);
      }}>
        <button type='submit' className='button'>Sign Up</button>
        <button type='submit' className='button'>Sign In</button>
      </motion.div>
    </div>
  );
}

export default App;
