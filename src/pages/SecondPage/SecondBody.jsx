import React from 'react'
import { Link } from 'react-router-dom'
import Jpg from "./2.jpg"
import css from "./SecondBody.module.css"


const SecondBody = () => {
    return (
        <div>
            <header>
                <h1>Here is logo</h1>
                <h2>Home </h2>
                <h2>About us</h2>
                <h2>Contact</h2>
                <h2>News</h2>
                <h2>Services</h2>
            </header>
            <Link to={'/'}> <div class={css.box}><img className={css.img} src={Jpg} alt="" /></div></Link>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt distinctio, mollitia cum molestiae, numquam
                modi ea animi sunt itaque vero dolor accusantium nobis in quis nisi fugiat quidem exercitationem similique.
                Excepturi quae voluptatem quos aspernatur accusantium sit expedita, quibusdam deserunt a iusto placeat
                distinctio facere quidem recusandae praesentium. Laudantium architecto eum quae voluptate? Repellat ipsa
                voluptates aut quis ab natus?
                Rem nobis reiciendis provident adipisci laborum facilis ducimus aspernatur repellat saepe corporis delectus
                eligendi est porro tempore eaque quo, dignissimos maxime, velit, maiores amet cupiditate similique? Consectetur
                explicabo laboriosam consequatur.
            </p>
        </div>
    )
}

export default SecondBody;