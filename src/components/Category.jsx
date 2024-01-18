// Category.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Category.css';

const Category = () => {
  const navigate = useNavigate();
  const categories = ["홈", "항공권", "호텔,리조트", "투어", "패키지"];

  const handleClick = (category) => {
    if (category === "홈") {
      navigate('/');
    } else {
      // 다른 카테고리에 대한 처리가 필요한 경우 여기에 추가하세요.
    }
  };

  return (
    <div className="category-container">
      {categories.map((category, index) => (
        <div key={index} className="category-item" onClick={() => handleClick(category)}>
          {category}
        </div>
      ))}
    </div>
  );
};

export default Category;