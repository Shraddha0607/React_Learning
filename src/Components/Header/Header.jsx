import React from 'react'
import reactImg from "../../assets/react-core-concepts.png"
import "./Header.css"

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  const random = Math.floor(Math.random() * (max + 1));
  return random;
}

function Header() {
  return (
    <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {reactDescriptions[genRandomInt(2)]} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  )
}

export default Header
