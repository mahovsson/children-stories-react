import React from 'react'

function Library({storiesStatus}) {
  return (
    <div className={`library ${storiesStatus ? 'active-stories' : ""}`}>
      <h2>Stories</h2>
    </div>
  )
}

export default Library
