
import React, { useState } from 'react'

const Page = () => {
    const [type,setType]=useState("password")
    const [cheakvalue,setCheak]=useState(false)

    const toggle=()=>{
         setCheak(!cheakvalue)
         if(type=="password"){
            setType("text")
         }else{
            setType("password")
         }
    }
  return (
    <div>
        <section>
  <div className="color"></div>
  <div className="color"></div>
  <div className="color"></div>
  <div className="box">
    <div className="square" ></div>
    <div className="square" ></div>
    <div className="square"></div>
    <div className="square" ></div>
    <div className="square" ></div>
    <div className="container">
      <div className="form">
        <h2>Login From</h2>
        <form action="#">
          <div className="input-group">
            <input type="text" placeholder="User name"/>
          </div>
          <div className="input-group">
            <input type={type} placeholder="Password"/>
          </div>
          <div className="input-group">
            <label htmlFor="show"   >{cheakvalue?"Hide":"Show"}</label>
             <input type="checkbox" id="show" checked={cheakvalue} onChange={()=>toggle()}  placeholder='show'/>
          </div>
          <div className="input-group">
            <input type="submit" value="Login"/>
          </div>
          <p className="forget">Forgot Password ? <a href="#">Click Here</a></p>
          <p className="forget">Don't have an account ? <a href="#">Sign up</a></p>
        </form>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Page