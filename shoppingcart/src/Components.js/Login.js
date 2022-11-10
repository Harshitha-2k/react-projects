import React from 'react'

const Login=()=>{
  function change(e){
  const items = e.target.value
  console.log(items)
  }
 function SubmitEvent(e){
   e.PreventDefault()
 }
 
  return (
    <div className='form'>
        <form  onSubmit={SubmitEvent}>
        <h1>LOGIN</h1>
        <input type="text" placeholder='enter your email'  onChange={change}/>
        <br/>
        < input type="password" placeholder='enter your password'  onChange={change} />
        <br/>
        <button className='button' type='submit' >Login</button>
        </form>
    </div>
  )
}

export default Login