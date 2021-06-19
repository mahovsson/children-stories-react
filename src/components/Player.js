import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight, faPause, faVolumeDown } from '@fortawesome/free-solid-svg-icons';
import playAudio from '../util';

const Player = ({ isPlaying, setIsPlaying, audioRef, storyInfo, setStoryInfo, currentSotry, stories, setCurrentStory, setStories }) => {
  const [activeVolume, setActiveVolume] = useState(false);

  const activeLibraryHandler = (nextPrev) => {
    const newStories = stories.map((story) => {
      if (story.id === nextPrev) {
        return {
          ...story,
          active: true,
        };
      } else {
        return {
          ...story,
          active:false,
        };
      }
    });
    setStories(newStories);
  };



  return (
    <div className='player'>
      <div classnam='time-control'>
        <p>{songInfo.currentTime}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`,
          }}
          className="track"
        >
      </div>
    </div>
   );
}

export default Player;