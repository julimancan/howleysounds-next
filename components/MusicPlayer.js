import styled from "@emotion/styled";
import Title from "./Title";
import { BsPlayCircle } from "react-icons/bs";
import { useEffect, useState } from "react";

const StyledMusicPlayer = styled.section`
    width: clamp(80vw, 70vw, 60vw);
    margin: 0 auto 2rem;
  .player {
    display: flex;
    justify-content: center;
    background: ${({musicPlayerBgColor})=> musicPlayerBgColor || "limegreen"};
    background: red;
    padding: 1rem;
    .heading {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: blue;
      @media (min-width: 700px) {
        flex-direction: row;
        justify-content: center;
        gap: 4rem;
      }
      .player-image { 
        object-fit: cover;
        width: 50%;
        aspect-ratio: 1;
      }
      .player-info {
        display: grid;
        .top {
          display: flex;
        }
      }
    }
  }
`;

const MusicPlayer = ({ musicPlayer }) => {
  const [currentTrack, setCurrentTrack] = useState();
  useEffect(() => {
    setCurrentTrack(musicPlayer.songs[0].song);
  }, []);
// lo q viene dentro del objeto musicPlaer:
// musicPlayerBgColor: "#F2F2F2"
// musicPlayerImage: {alt: null, url: 'https://cdn.sanity.io/images/v7vjsryv/production/d…836ed688564149d53a731105046ddfabb2e07-751x666.jpg'}
// songs: (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
// subtitle: "Click on album art to listen"
// title: "My Work"

  // console.log(`currentTrack`, currentTrack);
  return (
    <StyledMusicPlayer musicPlayerBgColor={musicPlayer.musicPlayerBgColor}>
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
                <BsPlayCircle />
                <div className="current-track-info">
                  <span>{currentTrack.artistName}</span> <br />
                  <span>{currentTrack.songName}</span> <br />
                  <span>Featured Playlist</span>
                </div>
              </div>
              <div className="bottom">
                <audio controls preload="none">
                  <source src={currentTrack.url} type="audio/mp3" />
                </audio>
              </div>
            </div>
          )}
        </div>
      </div>
    </StyledMusicPlayer>
  );
};

export default MusicPlayer;
