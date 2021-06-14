import React, { useState, useRef } from 'react';
import './App.css';
import './styles/app.scss';
import Nav from './components/Nav';
import Library from './components/Library';
import Story from './components/Story.js';
import playAudio from './util';

import data from './data';

function App() {
	// ref
	const audioRef = useRef(null);

	// state
	const [stories, setStories] = useState(data());
	const [currentStory, setCurrentStory] = useState(stories[0]);
	const [isPlaying, setIsPlaying] = useState(false);
	const [storyInfo, setStoryInfo] = useState({
		currentTime: 0,
		duration: 0,
		animationPercentage: 0,
		volume: 0,
	});
	const [storiesStatus, setStoriesStatus] = useState(false);

	const timeUpdateHandler = (e) => {
		const current = e.target.currentTime;
		const duration = e.target.duration;

		const roundedCurrent = Math.round(current);
		const roundedDuration = Math.round(duration);
		const percentage = Math.round(
			(roundedCurrent / roundedDuration) * 100
		);
		setStoryInfo({
			...storyInfo,
			currentTime: current,
			duration: duration,
			animationPercentage: percentage,
			volume: e.target.value,
		});
	};

	const storyEndHandler = async () => {
		let currentIndex = stories.findIndex(
			(story) => story.id === currentStory.id
		);
		await setCurrentStory(stories[(currentIndex + 1) % stories.length]);
		playAudio(isPlaying, audioRef);
		return;
	};

	return (
		<div className={`App ${storiesStatus ? 'stories-active' : ''}`}>
			<Nav
				storiesStatus={storiesStatus}
				setStoriesStatus={setStoriesStatus}
			/>
			<Story isPlaying={isPlaying} currentStory={currentStory} />
			<Library
				stories={stories}
				storiesStatus={storiesStatus}
				audioRef={audioRef}
				isPlaying={isPlaying}
				setStories={setStories}
				setCurrentStory={setCurrentStory}
			/>

			<audio
				onLoadedMetadata={timeUpdateHandler}
				onTimeUpdate={timeUpdateHandler}
				ref={audioRef}
				src={currentStory.audio}
				onEnd={storyEndHandler}
			></audio>
		</div>
	);
}

export default App;
