import { useState } from "react";
import "./MoodSongs.css";

const MoodSongs = () => {
  const [songs, setSongs] = useState([
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
  {
    title: "Calm Before Dawn",
    artist: "Noah Blake",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
  },
  {
    title: "Echoes of You",
    artist: "Sofia Lane",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
  }
] );



  // const handlePlayPause = (index) => {
  //   if (playingIndex === index) {
  //     setPlayingIndex(null);
  //   } else {
  //     setPlayingIndex(index);
  //   }
  // };

  return (
    <div className="recommended-section">
      <h2 className="section-title">Recommended Tracks</h2>

      <div className="song-list">
        {songs.map((song, index) => (
          <div className="song-item" key={index}>
            <div className="song-info">
              <h3 className="song-title">{song.title}</h3>
              <p className="song-artist">{song.artist}</p>
            </div>

            <div
              className="song-action"
              // onClick={() => handlePlayPause(index)}
            >
              {song === index ? (
                <i className="ri-pause-line play-icon"></i>
                
              ) : (
                <i className="ri-play-line play-icon"></i>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodSongs;