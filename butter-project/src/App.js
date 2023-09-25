import React, { Component } from 'react';
import './App.css';
import image1 from './assets/images/image1.png';
import image2 from './assets/images/image2.png';
import image3 from './assets/images/image3.png';
import image4 from './assets/images/image4.png';
import LoginPopup from './components/LoginPopup';
import HamburgerIcon from './assets/images/Hamburger.png';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImageIndex: 0,
      images: [image1, image2, image3, image4],
      isLoggedIn: false,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.changeImage, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  changeImage = () => {
    this.setState((prevState) => ({
      currentImageIndex: (prevState.currentImageIndex + 1) % this.state.images.length,
    }));
  };

  toggleLogin = () => {
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn,
    }));
  };

  render() {
    const { currentImageIndex, images, isLoggedIn } = this.state;
    const currentImage = images[currentImageIndex];

    return (
      <div className="App" style={{ position: 'relative' }}>
        <img
          src={currentImage}
          alt={`car ${currentImageIndex + 1}`}
          className="background-image" 
        />

        <button
          onClick={this.toggleLogin}
          className="login-button" 
        >
          <img
            src={HamburgerIcon}
            alt="Hamburger"
            className="hamburger-icon" 
          />
        </button>

        <h1 className="app-title">BUTTER</h1>

        <h2
          className="reservation"
          onClick={this.toggleLogin}
        >
          RESERVATION
        </h2>

        {isLoggedIn && <LoginPopup />}
      </div>
    );
  }
}

export default App;
