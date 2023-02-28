import React from 'react'
import { Link } from 'react-router-dom'

export default function Login(props) {
    //1. Hook Area

    //2. Function defination
    let handleSubmit = ()=>{
        //alert('Hello');
        window.location.href='/dashboard';
    }

    //3. Retun statemtn
    return (
        <>
            <div id="loading-overlay"></div>
            <div id="loading">
                <span>Loading...</span>
            </div>
        
            <section id="toolbar">
                <div className="container_12">
                <div className="left">
                    <ul className="breadcrumb">

                    <li><a href="#">Mango</a></li>
                    <li><a href="#">Login</a></li>

                    </ul>
                </div>

                <div className="right">
                    <ul>

                    <li><a href="dashboard.html"><span className="icon i14_bended-arrow-left"></span>Back to Dashboard</a></li>

                    <li className="red"><a href="#">Purchase</a></li>

                    </ul>
                </div>
                
                <div className="phone">   
                    <li><a href="#"><span className="icon icon-home"></span></a></li>
                    <li><a href="#"><span className="icon icon-heart"></span></a></li>
                </div>

                </div>
            </section>
        
            <header className="container_12">

                <div className="container">

            
                <a href="/tf-mango/"><img src="img/logo-light.png" alt="Mango" width="210" height="67" /></a>
                <a className="phone-title" href="login.html"><img src="img/logo-mobile.png" alt="Mango" height="22" width="70" /></a>

                
                <div className="right">
                    <span>Got no account?</span>
                    <a href="#">Register</a>
                </div>

                </div>

            </header>
        
            <section id="login" className="container_12 clearfix">

                <form method="post" className="box validate">

                    <div className="header">
                    <h2><span className="icon icon-lock"></span>Login</h2>
                    </div>

                    <div className="content">

                    
                    <div className="login-messages">
                        <div className="message welcome">Welcome back!</div>
                        <div className="message failure">Invalid credentials.</div>
                    </div>

                    
                    <div className="form-box">

                        <div className="row">
                        <label htmlFor="login_name">
                            <strong>Username</strong>
                            <small>Or email address</small>
                        </label>
                        <div>
                            <input tabIndex="1" type="text" className="required" name="login_name" id="login_name" />
                        </div>
                        </div>

                        <div className="row">
                        <label htmlFor="login_pw">
                            <strong>Password</strong>
                            <small><a href="#" id="">Forgot it?</a></small>
                        </label>
                        <div>
                            <input tabIndex="2" type="password" className="required" name="login_pw" id="login_pw" />
                        </div>
                        </div>

                    </div>

                    </div>

                    <div className="actions">
                        <div className="left">
                            <div className="rememberme">
                                <input tabIndex="4" type="checkbox" name="login_remember" id="login_remember" checked onChange={()=>{}}  />
                                <label htmlFor="login_remember">Remember me?</label>
                            </div>
                        </div>
                        <div className="right">
                            <input tabIndex="3" type="button" value="Sign In" name="login_btn" onClick={()=>{ handleSubmit() }} />
                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}
