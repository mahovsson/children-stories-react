import React from 'react'
import LibraryStory from './LibraryStory';

function Library({storiesStatus, stories}) {
  return (
    <div className={`library ${storiesStatus ? 'active-stories' : ""}`}>
      <h2>Stories</h2>
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
              />
              ))}
      </div>
    </div>
  )
}

export default Library
