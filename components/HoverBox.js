import styled from "@emotion/styled";
import { useState } from "react";
import Link from "next/link";
import { BsApple, BsSpotify, BsYoutube } from "react-icons/bs";
import { SiTidal } from "react-icons/si";

const StyledHoverBox = styled.li`
  width: 45vw;
  height: 45vw;
  overflow: hidden;
  position: relative;
  transition: all 0.1s linear;
  &:hover {
    z-index: 3;
    transform: scale(1.05);
  }
  @media (min-width: 800px) {
    width: 400px;
    height: 400px;
  }
  .box-image {
    position: absolute;
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
    transition: all 0.2s linear;
  }
  article {
    position: relative;
    z-index: 4;
    background: white;
    height: 100%;
    max-height: 100%;
    padding: 0.5rem;
    opacity: 0;
    transition: all 0.3s linear;
    font-size: 0.6em;
    h3 {
      font-size: 0.9rem;
    }
    span {
    }
    @media (min-width: 800px) {
      padding: 2rem;
      font-size: 1rem;
      h3 {
        font-size: 1rem;
      }
    }
    &:hover {
      opacity: 0.9;
    }
    strong {
      width: 100%;
      display: block;
      margin-top: 0.5rem;
      @media (min-width: 800px) {
        margin-top: 2rem;
      }
    }
    ul {
      list-style: none;
      display: grid;
      /* flex-wrap: wrap; */
      justify-content: flex-start;
      grid-template-columns: ${({ rolesLength }) =>
        rolesLength >= 6 && "repeat(2, 1fr)"};
      /* grid-auto-rows: 1rem; */
      @media (min-width: 800px) {
        grid-template-columns: ${({ rolesLength }) =>
          rolesLength >= 8 && "repeat(2, 1fr)"};
      }
      gap: 0;
      margin: 0;
      li {
        /* white-space: nowrap; */
        /* line-height: 12px; */
        /* width: 50%; */
        /* border: 1px solid black; */
      }
    }
    .song-links {
      /* margin-top: 2rem; */
      display: flex;
      justify-content: space-evenly;
      /* margin: 0 auto; */
      position: absolute;
      /* background: red; */
      bottom: 1em;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      svg {
        cursor: pointer;
        font-size: 2em;
      }
      @media (min-width: 800px) {
        bottom: 2rem;
        svg {
          font-size: 2rem;
        }
      }
    }
  }
`;
const RoleItem = styled.li`
  grid-row: ${({ roleLength }) => roleLength >= 19 && "1/3"};
  `;
  // background: ${({ roleLength }) => roleLength >= 19 && "red"};

const HoverBox = ({ hoverBox }) => {
  const [hoverState, setHoverState] = useState(false);
  // console.log(`hoverBoxesContent`, hoverBox);
  const songName = hoverBox.songName.split("/")[0];
  const releaseYear = hoverBox.songName.split("/")[1];
  // artistName: "Janïsa"
  // live: true
  // productionRoles: (9) ['Co-Writer', 'Co-Producer', 'Engineer', 'Additional Programming', 'Drums', 'Percussion', 'Bass', 'Guitar', 'Additional Keys']
  // releaseArtwork: null
  // songLinks: {apple: 'https://music.apple.com/ca/album/lonely/1477663361?i=1477663364', spotify: 'https://open.spotify.com/track/5gm1teJPOCm6e0W0JguC8t? si=4df09d2c13d74f8b', tidal: 'https://tidal.com/browse/track/116172547', youtube: 'https://music.youtube.com/watch?v=O1Hw- Z9l4Wo&feature=share'}
  // songName: "Lonely / 2019"
  const hoverHandler = () => {
    setHoverState(!hoverState);
  };
  const closeHover = () => {
    setHoverState(false);
  };
  if (!hoverBox) return;
  return (
    <StyledHoverBox
      onMouseEnter={hoverHandler}
      onMouseLeave={closeHover}
      onClick={hoverHandler}
      hoverState={hoverState}
      rolesLength={hoverBox.productionRoles.length}
    >
      {hoverBox.releaseArtWork && (
        <img
          className="box-image"
          src={hoverBox.releaseArtWork.url}
          alt={`${hoverBox.songName}-${hoverBox.artistName}`}
        />
      )}
      {/* {hoverState && ( */}
      <article>
        <h3>{hoverBox.artistName}</h3>
        <span>{songName}</span>/ {releaseYear}
        <strong>Production Roles:</strong>
        <ul>
          {hoverBox.productionRoles.map((role, index) => (
            <RoleItem roleLength={role.length} key={`production-role-${index}`}>{role}</RoleItem>
          ))}
        </ul>
        <div className="song-links">
          {hoverBox.songLinks?.apple && (
            <Link target="_blank" href={hoverBox.songLinks.apple} passHref>
              <a target="_blank" aria-label={`apple link for ${hoverBox.artistName}`}>
                <BsApple />
              </a>
            </Link>
          )}
          {hoverBox.songLinks?.spotify && (
            <Link target="_blank" href={hoverBox.songLinks.spotify} passHref>
              <a target="_blank" aria-label={`spotify link for ${hoverBox.artistName}`}>
                <BsSpotify />
              </a>
            </Link>
          )}
          {hoverBox.songLinks?.tidal && (
            <Link target="_blank" href={hoverBox.songLinks.tidal} passHref>
              <a target="_blank" aria-label={`tidal link for ${hoverBox.artistName}`}>
                <SiTidal />
              </a>
            </Link>
          )}
          {hoverBox.songLinks?.youtube && (
            <Link href={hoverBox.songLinks.youtube} passHref>
              <a target="_blank" aria-label={`youtube link for ${hoverBox.artistName}`}>
                <BsYoutube />
              </a>
            </Link>
          )}
        </div>
      </article>
      {/* )} */}
    </StyledHoverBox>
  );
};

export default HoverBox;
