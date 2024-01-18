// Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { IoSearchOutline } from 'react-icons/io5';
import './Header.css';

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-wrap">
        <div className="header-left-wrap">
          <Link className="logo-link" to="/">
            <img className="logo-image" src="/hi.png" alt="로고" />
          </Link>
          <div className="search-container">
            <div className="search-icon">
              <IoSearchOutline />
              <input
                type="text"
                placeholder="검색어를 입력하세요."
                className="search-input"
              />
            </div>
          </div>
          <ul className="nav-list">
            <li>
              <Link className="header-login" to="/login">
                로그인
              </Link>
            </li>
            <li>
              <Link className="header-signup" to="/signup">
                회원가입
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
