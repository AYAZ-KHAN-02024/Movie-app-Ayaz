import { useEffect, useState } from 'react'
import './SignUp.css'

const SignUp = () => {
  const [ClickLogin, setClickLogin] = useState(true)

  const Toggle = () => {
    setClickLogin(!ClickLogin)
  }
  useEffect(() => {
    const sign = document.getElementsByClassName('main-signup')[0]
    const login = document.getElementsByClassName('main-login')[0]

    if (ClickLogin == true) {
      sign.classList.remove('login-signup-display');
      login.classList.add('login-signup-display');
    }
    else {
      sign.classList.add('login-signup-display');
      login.classList.remove('login-signup-display');
    }
  }, [ClickLogin])

  return (
    <div className='signup'>


      <div className="main-signup">

        <form className="signup-box " onSubmit={(e)=>{e.preventDefault()}}>
          <h3 >sign-up here </h3>
          <input type="text" placeholder='Name' required autoComplete='on'/>
          <input type="email" placeholder='emial-id' required autoComplete='on'/>
          <input type="password" placeholder='password' required autoComplete='on'/>
          <button >Sign-up</button>
          <h5>create an account <a onClick={Toggle}>click here</a></h5>
        </form>

      </div>


      <div className="main-login">

        <form className="login-box" onSubmit={(e)=>{e.preventDefault()}}>
          <h3 >login here </h3>
          <input type="text" placeholder='Name' required autoComplete='on' />
          <input type="email" placeholder='emial-id' required autoComplete='on' />
          <input type="text" placeholder='create-password' required autoComplete='on' />
          <input type="password" placeholder='confirm-password' required autoComplete='on' />
          <button >login</button>
          <h5>alredy have an account <a onClick={Toggle}>click here</a></h5>
        </form>

      </div>

    </div>
  )
}

export default SignUp
