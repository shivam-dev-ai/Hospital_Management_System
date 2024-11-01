import React from 'react'
import Hero from "../components/Hero.jsx"
import Biography from '../components/Biography.jsx'
import Department from "../components/Department.jsx"
import MessageForm from '../components/MessageForm.jsx'


const Home = () => {
    return (
        <>
            <Hero title={"Welcome To Macbain Hospital | Healing with Heart, Leading with Science"} imageurl={"/hero.png"} />
            <Biography imageurl={"/about.png"} />
            <Department />
            <MessageForm />
        </>
    )
}

export default Home
