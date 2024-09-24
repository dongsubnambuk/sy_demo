import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import Header from "../COMPONENT_Signup/Header";
import Input from "../COMPONENT_Signup/Input";
import Button from "../COMPONENT_Signup/Button";
import Footer from "../COMPONENT/Footer";

import DaumPostcode from 'react-daum-postcode';

const Signup = () => {
  const navigate = useNavigate();

  const [userID, setID] = useState('');
  const [userPW, setPW] = useState('');
  const [checkPW, setcheckPW] = useState('');
  const [userName, setuserName] = useState('');
  const [phoneNum, setphoneNum] = useState('');
  const [zipCode, setzipCode] = useState('');
  const [roadAddress, setroadAddress] = useState('');
  const [detailAddress, setdetailAddress] = useState('');

  const [isPostOpen, setIsPostOpen] = useState(false);

  const handlePostCode = (data) => {
    setzipCode(data.zonecode);
    setroadAddress(data.roadAddress);
    setIsPostOpen(false);
  };

  const signup_alert = () => {
    if (!userID) {
      alert('아이디를 입력해주세요.');
    }
    else if (!userPW) {
      alert('비밀번호를 입력해주세요.');
    }
    else if (!checkPW) {
      alert('비밀번호를 확인해주세요.');
    }
    else if (!userName) {
      alert('이름을 입력해주세요.');
    }
    else if (!phoneNum) {
      alert('연락처를 입력해주세요.');
    }
    else if (!zipCode) {
      alert('우편번호를 입력해주세요.');
    }
    else if (!roadAddress) {
      alert('도로명 주소를 입력해주세요.');
    }
    else if (!detailAddress) {
      alert('상세 주소를 입력해주세요.');
    }
    else {
      alert('회원가입이 완료되었습니다!');
    }
  };

  return (
    <div className="container">
      <Header />
      <hr />
      <div className="input-group">
        <label htmlFor="text">아이디</label>
        <Input type="text" placeholder="아이디를 입력해주세요" value={userID} onChange={(e) => setID(e.target.value)} />
      </div>
      <div className="input-group">
        <label htmlFor="password">비밀번호</label>
        <Input type="password" placeholder="비밀번호를 입력해주세요" value={userPW} onChange={(e) => setPW(e.target.value)} />
      </div>
      <div className="input-group">
        <label htmlFor="password">비밀번호 확인</label>
        <Input type="password" placeholder="비밀번호를 다시 입력해주세요" value={checkPW} onChange={(e) => setcheckPW(e.target.value)} />
      </div>
      <div className="input-group">
        <label htmlFor="text">이름</label>
        <Input type="text" placeholder="이름을 입력해주세요" value={userName} onChange={(e) => setuserName(e.target.value)} />
      </div>
      <div className="input-group">
        <label htmlFor="number">연락처</label>
        <Input type="number" placeholder="예) 01050518713" value={phoneNum} onChange={(e) => setphoneNum(e.target.value)} />
      </div>
      <div className="input-group">
        <div className="address">
          <div className="find-zipCode">
            <label htmlFor="number">주소</label>
            <Input type="number" placeholder="우편번호" value={zipCode} onChange={(e) => setzipCode(e.target.value)} />
            <button onClick={() => setIsPostOpen(true)}>우편번호 찾기</button>

            {isPostOpen && <DaumPostcode onComplete={handlePostCode} />}


            <Input type="text" placeholder="도로명주소" value={roadAddress} onChange={(e) => setroadAddress(e.target.value)} />
            <Input type="text" placeholder="상세 주소" value={detailAddress} onChange={(e) => setdetailAddress(e.target.value)} />
          </div>
        </div>
        <Button onClick={signup_alert} />
        <Footer />
      </div>
    </div>
  );
};

export default Signup;