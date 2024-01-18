// components/LoginForm.js

import React from 'react';
import './LoginForm.css';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('로그인 버튼이 클릭되었습니다.');
  };

  return (
    <div className="login-form-container">
      <h2 className="login-form-title">로그인</h2>
      <form>
        <div className="login-form-item">
          <input
            type="text"
            placeholder="아이디"
          />
        </div>
        <div className="login-form-item">
          <input
            type="password"
            placeholder="비밀번호"
          />
        </div>
        <div>
          <button type="button" onClick={handleLogin} className="login-form-button">
            로그인
          </button>
        </div>
      </form>
      <p className="login-form-link">
        계정이 없으신가요? <Link to="/signup">회원가입</Link>
      </p>
    </div>
  );
};

export default LoginForm;
