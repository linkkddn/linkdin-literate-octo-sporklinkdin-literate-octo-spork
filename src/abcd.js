
import React, { useState, useEffect } from "react";
import App from "./App";
import Preloader from "./Preloader/preloader";
import { createPortal } from "react-dom";



const ABCD = ()=>{

    const kungfu_panda = createPortal(<div><App /></div>, document.querySelector('.hello'));
    
    const [a, b] = useState(false);

    useEffect(()=>{
        setTimeout(() => {
            b(true);
        }, 3500);
    }, []);

    return(<>

    { !a ? <Preloader />

        :

        kungfu_panda
    }

    </>)
};

export default ABCD;