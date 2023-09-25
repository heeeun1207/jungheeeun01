import React, { Component } from 'react';
import xboxImage from '../assets/images/xbox.png';
import './LoginPopup.css'; 

class LoginPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true, // 팝업 초기 상태는 열린 상태
    };
  }

  handleClosePopup = () => {
    this.setState({ isOpen: false }); // 팝업을 닫기 위한 메서드
  }

  render() {
    const { isOpen } = this.state;

    // 팝업이 열려 있을 때만 렌더링
    if (!isOpen) {
      return null;
    }

    return (
      <div className="login-popup">
        <img
          src={xboxImage}
          alt="Close"
          className="close-button"
          onClick={this.handleClosePopup}
        />
    
        <div className="input-container">
          <h3 className="login-title">Login</h3>
          <input type="text" placeholder="Username" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <div className="sign-in-up">
            <span>Sign in</span>
            <span className="separator">|</span>
            <span>Sign up</span>
          </div>
        </div>
        {/* 
          로그인 양식과 관련된 로직
        */}
      </div>
    );
  }
}

export default LoginPopup;
