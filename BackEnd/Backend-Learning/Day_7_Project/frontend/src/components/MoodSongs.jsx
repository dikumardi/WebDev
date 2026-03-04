import { useState } from "react";
import "./MoodSongs.css";

const MoodSongs = ({Songs}) => {
 
const [isPlaying, setIsPlaying] = useState(null)


 const handlePlayPause = (index) => {
        if (isPlaying === index) {
            setIsPlaying(null);
        } else {
            setIsPlaying(index);
        }
    };

  return (
    <div className="recommended-section">
      <h2 className="section-title">Recommended Tracks</h2>
      <div className="song-list">
      {
        Songs.map((song,index) => (
            <div className="song-item" key={index}>
            <div className="song-info">
              <h3 className="song-title">{song.title}</h3>
              <p className="song-artist">{song.artist}</p>
            </div>

            <div
              className="song-action">
               {
                            isPlaying === index &&
                            <audio
                                src={song.audio} style={{
                                    display: 'none'
                                }}
                                autoPlay={isPlaying === index}
                            ></audio>
                        }
                        <button onClick={() => handlePlayPause(index)}>
                            {
                            isPlaying === index ?
                            <i className="ri-pause-line"></i> 
                            : <i className="ri-play-circle-fill"></i>
                              }
                        </button>
            </div>
          </div>
        ))
      }
       
      </div>
    </div>
  );
};

export default MoodSongs;