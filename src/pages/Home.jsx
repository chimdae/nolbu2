import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slide from './Slide';
import Recommend from "./Recommend";
import './Home.css';

export default function Home() {
  const navigate = useNavigate();
  const [word, setWord] = useState('');

  const onClickWord = () => {
    navigate(`/test?sword=${word}`);
  }

  return (
    <div className="home-container" style={{ fontSize: "32px" }}>
      <div className="slide-wrapper">
        <div className="slide-wrapper1">
          <Slide imageUrl="url_for_first_image" title="여행상품" />
        </div>
        <div className="slide-wrapper2">
          <Recommend />
        </div>
        <div className="slide-wrapper3">
        </div>
      </div>
    </div>
  );
}
