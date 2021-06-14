import React from 'react'
import LibraryStory from './LibraryStory';

function Library({storiesStatus, stories, setCurrentStory, audioRef, isPlaying, setStories }) {
  return (
    <div className={`library ${storiesStatus ? 'active' : ""}`}>
      <h2>Pohádky</h2>
      <div className='library-stories'>
          {stories.map((story) => (
            <LibraryStory
              stories={stories}
              cover={story.cover}
              name={story.name}
              artist={story.artist}
              active={story.active}
              key={story.id}
              id={story.id}
              setCurrentStory={setCurrentStory}
              audioRef={audioRef}
              isPlaying={isPlaying}
              setStories={setStories}
              />
              ))}
      </div>
    </div>
  )
}

export default Library
