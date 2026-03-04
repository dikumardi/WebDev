  import React, { useState } from 'react'
  import FaceExpressionDetector from './components/FaceExpressionDetector'
  import MoodSongs from './components/MoodSongs'

  const App = () => {
    const [Songs, setSongs] = useState([
    {
      title: "Golden Horizon",
      artist: "Luna Rivers",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    {
      title: "Midnight Drive",
      artist: "Ethan Cole",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },
    {
      title: "Neon Dreams",
      artist: "Aria Stone",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
    },

  ] );
    return (
      <div>
      <FaceExpressionDetector setSongs={setSongs}/>
      <MoodSongs Songs={Songs} />
      </div>
    )
  }

  export default App