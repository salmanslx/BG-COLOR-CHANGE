import { useState } from 'react';
import './App.css';

function App() {
  const [background,setBackground] = useState("light")
  return (
   <>
      <div style={{height:'100vh'}} className='text-center d-flex justify-content-center flex-column align-items-center bg-dark'>
        <h1 className='text-light'>Color Changer</h1>
        <div style={{width:'600px',height:'350px'}}  className={`d-flex justify-content-center align-items-center bg-${background} rounded`}>
          <div>
            <button onClick={()=>setBackground("danger")} className='bg-danger btn border ms-2'>RED</button>
            <button onClick={()=>setBackground("success")} className='bg-success btn border ms-2'>GREEN</button>
            <button onClick={()=>setBackground("primary")} className='bg-primary btn border ms-2'>BLUE</button>
            <button onClick={()=>setBackground("warning")} className='bg-warning btn border ms-2'>YELLOW</button>
            <button onClick={()=>setBackground("light")} className='bg-dark btn border text-light ms-2'>RESET</button>
          </div>
        </div>
      </div>
   </>
  );
}

export default App;
