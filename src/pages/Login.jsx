import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../CSS/Login.css';
import Header from '../components/Header';


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignupClick = () => {
        navigate('/signup'); // 회원가입 페이지로 이동
    };

    const changeEmail = (e) => {
        setEmail(e.target.value);
    };

    const changePassword = (e) => {
        setPassword(e.target.value);
    };

        // login fetch 함수
        const handleLogin = async (event) => {
            event.preventDefault();
        
            try {
                const response = await fetch('http://chatex.p-e.kr/api/auth/login', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password,
                    }),
                });
        
                const result = await response.json();
        
                if (response.status === 200) {
                    console.log(result);
                    localStorage.setItem("token", result.token);
                    localStorage.setItem("email", result.user.email);
                    localStorage.setItem("nickname", result.user.nickname);
                    localStorage.setItem("UID", result.user.uniqueId);
                    console.log("로그인 성공");
                    navigate('/'); 
                } else {
                    console.log("로그인 실패");
                    alert("로그인 실패: " + result.message);
                }
            } catch (error) {
                console.error("Fetch error: ", error);
            }
        };


    return (
        <>
            <Header />

            <div className="login-inner">

                <input type="text" id="username" value={email} className="login-email" placeholder="아이디" onChange={changeEmail} />
                <input type="password" id="password" value={password} className="login-password" placeholder="비밀번호" onChange={changePassword} />

                <button className="login-btn" onClick={handleLogin} >로그인</button>
                <div className="login-options">
                </div>
                <p className="signup-link">
                    아직 회원이 아니신가요? <span onClick={handleSignupClick}>회원가입</span>
                </p>
            </div>

         
        </>
    );
}

export default Login;
