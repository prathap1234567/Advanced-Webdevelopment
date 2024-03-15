import React from 'react'
import "./Home.css"
function Home() {
  return (
    <div><div className="container">
    <header>
      <h2>
        <a href="#">
          <i className="ion-plane" /> Event Craft
        </a>
      </h2>
      <nav>
        <ul>
          <li>
            <a href="#" title="Hotels">
              HOME
            </a>
          </li>
          <li>
            <a href="#" title="Flights">
              ABOUT
            </a>
          </li>
          <li>
            <a className="btn" href="#" title="Register / Log In">
              Log In
            </a>
          </li>
        </ul>
      </nav>
    </header>
    <div className="cover">
      <h1>Let celebrate With Us</h1>
      <form className="flex-form">
        <label htmlFor="from">
          <i className="ion-location" />
        </label>
        <input type="search" placeholder="Para onde você quer ir?" />
        <input type="submit" defaultValue="Procurar" />
      </form>
      <div id="madeby">
        <span>
          Explore{" "}
          <a href="https://unsplash.com/@benblenner" target="_blank">
            Events
          </a>
        </span>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Home