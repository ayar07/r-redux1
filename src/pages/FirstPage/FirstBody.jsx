import React from 'react'
import Jpg from "./1.jpg"
import scc from "./FirstBody.module.css"
import { Link } from 'react-router-dom'



const FirstBody = () => {
  return (
    <div >
      <header className={scc}>
        <h1>Here is logo</h1>
        <h2>Home </h2>
        <h2>About us</h2>
        <h2>Contact</h2>
        <h2>News</h2>
        <h2>Services</h2>
      </header>
      <div class={scc.container2}>

        <Link to={'/SecondBody'}> <div className={scc.boxf}><img className={scc.img}g src={Jpg} alt="" /></div></Link>
        <Link to={'/SecondBody'}> <div className={scc.boxf}><img className={scc.img}g src={Jpg} alt="" /></div></Link>
        <Link to={'/SecondBody'}> <div className={scc.boxf}><img className={scc.img}g src={Jpg} alt="" /></div></Link>
      </div>
    </div>
  )
}

export default FirstBody;