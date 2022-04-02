import styled from "@emotion/styled";
import Title from "./Title";
import { BsPlayCircle, BsPauseCircle } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";

const StyledMusicPlayer = styled.section`
  margin: 0 auto 4rem;
  max-width: 1350px;
`;

const MusicPlayer = ({ musicPlayer, id }) => {

  return (
    <StyledMusicPlayer id={id} musicPlayerBgColor={musicPlayer.musicPlayerBgColor}>
      <Title title={musicPlayer.title} subtitle={musicPlayer.subtitle} />
      <div className="newMusicPlayer" dangerouslySetInnerHTML={{__html: musicPlayer.embedLink}} />
    </StyledMusicPlayer>
  );
};

export default MusicPlayer;
