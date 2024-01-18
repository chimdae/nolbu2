import React, { useState } from 'react';
import './Recommend.css';

const categories = [
  { id: 1, name: '남성', items: ['미국', '호주', '프랑스'] },
  { id: 2, name: '여성', items: ['괌', '이탈리아', '영국'] },
  { id: 3, name: '연령별', items: ['일본', '베트남', '싱가포르'] },
];

const Recommend = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="recommend-container">
      <div className="categories">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`category ${selectedCategory.id === category.id ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category.name}
          </div>
        ))}
      </div>
      <div className="items">
        <ul>
          {selectedCategory.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recommend;
