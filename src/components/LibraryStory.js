import React from 'react'

function LibraryStory({name, artist, cover, id, stories, active}) {
  return (
    <div className={`'library-stories' ${active ? 'selected' : ''}`}>
      <img src={cover} alt=''/>
      <div className='story-description'>
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  )
}

export default LibraryStory
