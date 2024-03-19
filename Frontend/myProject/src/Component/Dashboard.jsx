import React from "react";
import "./Dashboard.css";
import Header from "./HomePage/Header";
function Dashboard() {
  return (
    <div>
      <Header />
      <>
        <nav className="navbar1">
          <div className="head"></div>
        </nav>
        {/* -----------   MAİN   -----------  */}
        {/* İNFO CARD */}
        <div className="info-card">
          <div className="info-text-ctn">
            <div className="info-head">
              <h1>
                Book Your <br />
                Day
              </h1>
            </div>
            <div className="info-text">
              <p>
                Get a Valuable Day With Us <br />
                Freeze Your Moment <br />
                Mark The Date
              </p>
            </div>
            <div className="info-buton">
              <button>Learn More</button>
            </div>
          </div>
        </div>
        {/* CATEGORİES */}
        <div className="categories-container">
          <div className="categorie-name">
            <h1>Categories</h1>
          </div>
          <div className="categories">
            <div className="categorie-grid">
              <div className="categorie-col" id="col-one">
                <div className="categorie-image-wrapper">
                  <img
                    src="https://www.birthdayorganizers.com/images/gallery/5.png"
                    alt=""
                  />
                </div>
                <div className="categories-text-ctn">
                  <div className="ctg-head">
                    <h2>Decorations</h2>
                  </div>
                  <div className="ctg-text">
                    <p>
                      {" "}
                      Decorations are the most important part <br />
                      it is what the gazes look out for. Birthday <br />
                      invigorates parties are expected with decor <br />
                      positivity and fruitful rendering of things.
                    </p>
                  </div>
                </div>
              </div>
              <div className="categorie-col" id="col-two">
                <div className="categorie-image-wrapper">
                  <img
                    src="https://www.birthdayorganizers.com/images/games-activities/Art-and-Craft.jpg"
                    alt=""
                  />
                </div>
                <div className="categories-text-ctn">
                  <div className="ctg-head">
                    <h2>Games</h2>
                  </div>
                  <div className="ctg-text">
                    <p>
                      {" "}
                      Adding games and activities to any event will
                      <br />
                      make it a memorable one. Games and activities
                      <br />
                      are a great conversation starter.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="categorie-grid">
              <div className="categorie-col" id="col-tree">
                <div className="categorie-image-wrapper">
                  <img
                    src="https://www.birthdayorganizers.com/images/sound-rental.jpg"
                    alt=""
                  />
                </div>
                <div className="categories-text-ctn">
                  <div className="ctg-head">
                    <h2>DJ & Entertainment</h2>
                  </div>
                  <div className="ctg-text">
                    <p>
                      {" "}
                      When you return home after a party,one of <br />
                      main things they remember is the music.
                    </p>
                  </div>
                </div>
              </div>
              <div className="categorie-col" id="col-four">
                <div className="categorie-image-wrapper">
                  <img
                    src="https://www.birthdayorganizers.com/images/work/7.jpg"
                    alt=""
                  />
                </div>
                <div className="categories-text-ctn">
                  <div className="ctg-head">
                    <h2>Cake</h2>
                  </div>
                  <div className="ctg-text">
                    <p>
                      {" "}
                      We have a variety of thematic cakes for <br />
                      Birthday Party,which includes princess,
                      <br />
                      love theme,castle design, cartoon-based.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Dashboard;
