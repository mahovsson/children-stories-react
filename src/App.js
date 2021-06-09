import React, { useState, useRef } from 'react';
import './App.css';
import './styles/app.scss';
import Nav from './components/Nav';

import data from './data';


function App() {
  // ref
  const audioRef = useRef(null);

  // state
  const [stories, setStories] = useState(data());
  const [currentStory, setCurrentStory] = useState(data[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [storyInfo, setStoryInfo] = useState({
    currentTime:0,
    duration: 0,
    animationPercentage: 0,
    volume:0,
  });
  const [storiesStatus, setStoriesStatus] = useState(false);

  return (
    <div className={`App ${storiesStatus ? 'stories-active' : ''}`}>
    <Nav storiesStatus={storiesStatus}
    setStoriesStatus={setStoriesStatus}
    />

    </div>
  );
}

export default App;
