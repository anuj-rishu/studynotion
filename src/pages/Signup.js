import React from 'react'
import Template from '../components/Template'
import signupImg from '../assets/signup.png'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
    title="Join the millons learning to code with StudyNotiom for free."
    desc1="Build skills for today. tomorrow, amd beyond."
    desc2="Education to future-proof your career"
    image={signupImg}
    formtype="signup"
  setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup