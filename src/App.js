import { useEffect, useState } from 'react';
import './App.css';
import Linkdn from './linkdn/linkdn';
import Preloader from './Preloader/preloader';
import { createPortal } from 'react-dom';

function App() {

  const [a, setA] = useState(false);



  useEffect(()=>{
    setTimeout(() => {
      setA(true);
    }, 2000);
  }, []);






  return (
    <div className="App">

      {!a ? <Preloader />

     :  <Linkdn />}
    </div>
  );
}

export default App;
