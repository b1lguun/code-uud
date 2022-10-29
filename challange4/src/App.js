import "./App.css";
import image from "./downloads/image1.jpg";

function App() {
  return (
    <div className="grand">
      <div className="parent">
        <div className="first">
          <div className="navbar">
            <div className="team">
              team
              <u className="box"></u>
            </div>
            <div className="header-menu">
              <p>Products</p>
              <p>Services</p>
              <p>Contact</p>
              <p>Log In</p>
              <div className="ul">
                <p className="button">Get Access</p>
              </div>
            </div>
          </div>
          <div className="body1">
            <div className="title">Instant collabrations for remote teams</div>
            <div className="sub-title">
              All in one for your remote team chats, collabration and track
              projects
            </div>
            <div className="input">
              <input className="input1" placeholder="Email" />
              <button className="button1">Get early access</button>
            </div>
          </div>
        </div>
        <div className="second">
          <div className="sub-second">
            <div className="head-tile">Your Hub for teamwork</div>
            <div className="following-title">
              Give everyone you work with—inside and outside your company—a more
              productive way to stay in sync. Respond faster with emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </div>
            <div className="learn">
              <div className="learn-word">Learn</div>
              <div className="arrow"></div>
            </div>
          </div>
          <div className="second-image">
            <img className="second-img" src={image} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
