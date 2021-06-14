const Story = ({ currentStory, isPlaying }) => {
	return (
		<div className='story-container'>
			<img
				className={isPlaying ? 'rotateSong' : ''}
				src={currentStory.cover}
				alt=''
			/>
			<h2>{currentStory.name}</h2>
			<h3>{currentStory.artist}</h3>
		</div>
	);
};

export default Story;
