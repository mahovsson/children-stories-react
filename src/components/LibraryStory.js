import React from 'react';
import playAudio from '../util';

function LibraryStory({
	name,
	artist,
	cover,
	id,
	stories,
	active,
	setCurrentStory,
	audioRef,
	isPlaying,
	setStories,
}) {
	const songSelectHandler = () => {
		const selectedStory = stories.filter((state) => state.id === id);
		setCurrentStory({ ...selectedStory[0] });
		// set active in library
		const newStories = stories.map((story) => {
			if (story.id === id) {
				return {
					...story,
					active: true,
				};
			} else {
				return {
					...story,
					active: false,
				};
			}
		});
		setStories(newStories);

		// play audio
		playAudio(isPlaying, audioRef);
	};

	return (
		<div
			onClick={songSelectHandler}
			className={`library-story ${active ? 'selected' : ''}`}
		>
			<img src={cover} alt='' />
			<div className='story-description'>
				<h3>{name}</h3>
				<h4>{artist}</h4>
			</div>
		</div>
	);
}

export default LibraryStory;
