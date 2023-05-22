import {Link} from 'react-router-dom'

import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <div className="large-screen">
      <Header />
      <div className="home-container">
        <h1 className="head">Learn Touch Typing</h1>
        <div className="card">
          <div className="image-con">
            <img
              src="https://res.cloudinary.com/deubpbymb/image/upload/v1684637529/typingclub-browser-edit_h9pkjn.png"
              className="keyboard-image"
              alt="logo"
            />
          </div>
          <div className="text-con">
            <p className="why">WHAT IS TYPINGCLUB?</p>
            <p className="about">
              TypingClub is the most effective way to learn how to type.
            </p>
            <p className="description">
              It is web based and highly effective. TypingClub is (and will
              always be) free for both individuals and schools. There is an
              optional paid school edition.
            </p>
            <Link className="link" to="/touchtyping">
              <button className="get-started-button" type="button">
                Get Started Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="small-screen">
      <img
        src="https://res.cloudinary.com/deubpbymb/image/upload/v1684767970/vecteezy_workplace-workstation-office-lamp-computer-flat-color-icon_14609976_mh5zjl.jpg"
        className="small-screen-image"
        alt="logo"
      />
      <h1 className="alert">Log in with a Laptop or pc </h1>
      <p className="">Not Made for mobile screen </p>
    </div>
  </>
)

export default Home
