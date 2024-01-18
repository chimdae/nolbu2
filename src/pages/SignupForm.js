// components/SignupForm.js

import React from 'react';
import './SignupForm.css';
import { Link, useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    // 회원가입 로직을 여기에 추가할 수 있습니다.
    console.log('회원가입 버튼이 클릭되었습니다.');
    // 회원가입 성공 후 로그인 페이지로 이동
    navigate('/');
  };

  return (
    <div className="signup-form-container">
      <h2 className="signup-form-title">회원가입</h2>
      <form>
        <div className="signup-form-item" style={{ borderTopLeftRadius: '6px', borderTopRightRadius: '6px' }}>
          <input
            type="text"
            placeholder="이름"
          />
        </div>
        <div className="signup-form-item">
          <input
            type="text"
            placeholder="아이디"
          />
        </div>
        <div className="signup-form-item">
          <input
            type="password"
            placeholder="비밀번호"
          />
        </div>
        <div className="signup-form-item">
          <input
            type="password"
            placeholder="비밀번호 확인"
          />
        </div>
        <div className="signup-form-item">
          <input
            type="phonenumber"
            placeholder="전화번호"
          />
        </div>
        <div className="signup-form-item">
          <input
            type="text"
            placeholder="이메일"
          />
        </div>
        <div className="signup-form-item">
          <select>
            <option value="male">남성</option>
            <option value="female">여성</option>
          </select>
        </div>
        <div className="signup-form-item">
          <input type="date" />
        </div>
        <div>
          <button type="button" onClick={handleSignup} className="signup-form-button">
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
