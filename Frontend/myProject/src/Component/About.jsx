import React from 'react'
import "./About.css"
function About() {
  return (
    <div className='back'>
    <div><div className="row1">
    <div className="containers1 col-lg- col-md-6">
      <div className="pic1" />
      <div className="box9" />
      <div className="box8" />
      <div className="social9">
        <i className="fa fa-facebook1" aria-hidden="true" />
      </div>
      <div className="social8">
        <i className="fa fa-dribbble" aria-hidden="true" />
      </div>
      <div className="social7">
        <i className="fa fa-codepen1" aria-hidden="true" />
      </div>
    </div>
    <div className="content1 col-md-offset-6 col-lg-offset-6">
      <center>
        <h1 className="contentHead1">ABOUT ME</h1>
      </center>
      <h2>
        Hi Folks, <br />
        <br />
        This is Shaik Maqsood. I'm a Freakin frontend developer, jus came up with
        this concept of having a 45<sup>o</sup> trasformed DIV with a -45
        <sup>o</sup> background.
        <br />
        <br />
        Can't belive that it worked.
        <br />
        <br />
        Show your L<span>♥</span>VE if you like my pen.
        <br />
        <br />
        <p>(NOTICE: The lady in the PIC is not me, I'm a guy :P)</p>
        <p>
          <span style={{ textAlign: "right", color: "#000000", fontSize: 18 }}>
            * No matter what u say, that gal is sorta cute.
          </span>
        </p>
      </h2>
    </div>
  </div>
  </div>
  </div>
  )
}

export default About