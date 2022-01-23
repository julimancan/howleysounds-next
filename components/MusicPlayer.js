import styled from "@emotion/styled";
import Title from "./Title";
import { BsPlayCircle, BsPauseCircle } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";

const StyledMusicPlayer = styled.section`
  margin: 0 auto 4rem;
  max-width: 1350px;
  .player {
    justify-content: center;
    background: ${({ musicPlayerBgColor }) =>
      musicPlayerBgColor || "limegreen"};
    padding: 2rem 2rem;
    margin: .5rem;
    @media (min-width: 800px) {
      margin: 2rem;
    }
    .heading {
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (min-width: 700px) {
        flex-direction: row;
        gap: 4rem;
        /* background: blue; */
      }
      .player-image {
        object-fit: cover;
        aspect-ratio: 1;
        width: 100%;
        /* max-width: 170px; */
        margin: .5rem 0;
        @media (min-width: 800px) {
          width: 50%;
          max-width: 170px;
          
        }
      }
      .player-info {
        display: grid;
        width: 100%;
        .top {
          /* background: blue; */
          display: flex;
          /* justify-content: space-evenly; */
          align-items: center;
          .current-track-info {
            /* background: red; */
            font-size: .8rem;
            @media (min-width: 800px) {
              font-size: 1rem;
            }
            
          }
          .button {
            font-size: 5rem;
            margin: 1rem;
            margin-right: 2rem;
            &:hover {
              color: #00b2b5;
              cursor: pointer;
            }
          }
        }
        .bottom {
          /* background: red; */
          audio {
            width: 100%
          }
        }
      }
    }
    .music-list {
      list-style: none;
      display: grid;
      gap: 0.5rem;
      margin-top: 1rem;
      li {
        margin-top: 1rem;
        /* background: red; */
        border-bottom: 1px solid black;
        padding-bottom: 1rem;
        &:hover {
          cursor: pointer;
          color: #00b2b5;
        }
        span {
          margin: 0 0.5rem;
          font-size: .7rem;
          @media (min-width: 800px) {
            font-size: 1rem;
          }
        }
      }
    }
  }
`;

const MusicPlayer = ({ musicPlayer, id }) => {
  const [currentTrack, setCurrentTrack] = useState();
  const [playerPlaying, setplayerPlaying] = useState(false);

  const audioRef = useRef();
  
  useEffect(() => {
    setCurrentTrack(musicPlayer.songs[0].song);
    const audio = document.querySelector("audio");
    // audio.addEventListener("onplay", isAudioPlaying, false)
  }, []);

  const handleSongChange = (song) => {
    setCurrentTrack(song);
    // const audio = document.querySelector("audio");
    audioRef.current.load();
    audioRef.current.play();
    // console.log(`audio`, audioRef.current.length);
    setplayerPlaying(true)
  };
  const handlePlayButton = () => {
    // const audio = document.querySelector("audio");
    if (!audioRef.current.paused) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setplayerPlaying(!playerPlaying);
    // console.log(`audioRef.current.duration`, audio.duration/60)
  };
  const handleAudio = (e) => {
    // console.log(`clicked`, e.currentTarget)
    if (!e.currentTarget.paused) {
      e.currentTarget.play();
      setplayerPlaying(true)
    } else {
      e.currentTarget.pause();
      setplayerPlaying(false)
    }
  }
  return (
    <StyledMusicPlayer id={id} musicPlayerBgColor={musicPlayer.musicPlayerBgColor}>
      <Title title={musicPlayer.title} subtitle={musicPlayer.subtitle} />
      <div className="player">
        <div className="heading">
          <img
            src={musicPlayer.musicPlayerImage.url}
            className="player-image"
          />
          {currentTrack && (
            <div className="player-info">
              <div className="top">
                {!playerPlaying ? (
                  <BsPlayCircle
                    onClick={handlePlayButton}
                    className="play button"
                  />
                ) : (
                  <BsPauseCircle
                    onClick={handlePlayButton}
                    className="pause button"
                  />
                )}
                <div className="current-track-info">
                  <span>{currentTrack.artistName}</span> <br />
                  <span>{currentTrack.songName}</span> <br />
                  <span>Featured Playlist</span>
                </div>
              </div>
              <div className="bottom" >
                <audio ref={audioRef} controls preload="none"  onPlay={(e) => handleAudio(e)} onPause={(e) => handleAudio(e)}>
                  <source src={currentTrack.url} type="audio/mp3" onClick={() => isAudioPlaying()} style={{background: "red"}}/>
                </audio>
              </div>
            </div>
          )}
        </div>
        <ul className="music-list">
          {musicPlayer.songs?.map(({ song }, index) => (
            <li key={`song-${index}`} onClick={() => handleSongChange(song)}>
              <span>{index + 1}</span>
              <span>
                {song.artistName} - {song.songName}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </StyledMusicPlayer>
  );
};

export default MusicPlayer;
