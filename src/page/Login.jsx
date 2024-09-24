import React, {useState} from 'react';    
import { useNavigate } from 'react-router-dom';                      

import Header from '../COMPONENT_Login/Header';
import Logo from '../COMPONENT_Login/Logo';
import Input from '../COMPONENT_Login/Input';
import Button from '../COMPONENT_Login/Button';
import ToSignup from '../COMPONENT_Login/ToSignup';
import Footer from "../COMPONENT/Footer";
import logo from "../image/logo.png";

const Login = () => {
  const navigate = useNavigate(); // useNavigate 훅 추가
                                                  
  const[userID, setID] = useState(''); // userID 라는 상태와 빈 문자열로 초기화해둠, 아이디 상태를 업데이트하는 setID 함수 
  const[userPW, setPW] = useState('');

  const login_alert = () => {
    if(!userID) {
      alert('아이디를 입력해주세요.');
    }
    else if (!userPW) {
      alert('비밀번호를 입력해주세요');
    }
    else {
      alert('로그인 되었습니다.');
    }
  };
  
  return (
    <div className="container">
      <Header/>
      <hr/>
      <Logo/>
      <div className="logo-container">
      <img className="login-logo" src={logo}></img>    
    </div>
      <Input type="text" placeholder="아이디" value={userID} onChange={(e) => setID(e.target.value)} />
      <Input type="password" placeholder="비밀번호" value={userPW} onChange={(e) => setPW(e.target.value)} />
      <Button onClick={login_alert} />
      <ToSignup />
      <Footer />
    </div>
  );
};

export default Login;