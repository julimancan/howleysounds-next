import styled from "@emotion/styled"
import Title from "./Title"


const StyledMusicPlayer = styled.section`
  .player {
    background: F2F2F2;
  }
`;

const MusicPlayer = ({musicPlayer}) => {
  console.log({musicPlayer})
  return (
    <StyledMusicPlayer>
      <Title title={musicPlayer.title} subtitle={musicPlayer.subtitle} />
      <div className="player">
    
        <img src={musicPlayer.musicPlayerImage.url}/>
      </div>
    </StyledMusicPlayer>
  )
}

export default MusicPlayer
