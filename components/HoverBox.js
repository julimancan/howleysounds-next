import styled from "@emotion/styled";
import { useState } from "react";
import Link from "next/link";
import { BsApple, BsSpotify, BsYoutube } from "react-icons/bs";
import { SiTidal } from "react-icons/si";

const StyledHoverBox = styled.li`
  width: 200px;
  height: 200px;
  overflow: hidden;
  position: relative;
  @media (min-width: 800px) {
    width: 400px;
    height: 400px;
  }
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
    opacity: ${({hoverState}) => hoverState ? .3 : 1};
    transition: all .1s linear;
  }
  article {
    position: relative;
    z-index: 2;
    ul {
      list-style: none;
      li {
      }
    }
    svg {
      cursor: pointer;
    }
  }
`;

const HoverBox = ({ hoverBox }) => {
  const [hoverState, setHoverState] = useState(false);
  console.log(`hoverBoxesContent`, hoverBox);
  console.log(`hoverbox.songName.split("/")`, hoverBox.songName.split("/")[0]);
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
    >
      {hoverBox.releaseArtWork && (
        <img
          src={hoverBox.releaseArtWork.url}
          alt={`${hoverBox.songName}-${hoverBox.artistName}`}
        />
      )}
      {hoverState && (
        <article>
          <span>{songName}</span>
          <span>{hoverBox.artistName}</span>
          Released on: {releaseYear}
          <ul>
            My Roles:
            {hoverBox.productionRoles.map((role, index) => (
              <li key={`production-role-${index}`}>{role}</li>
            ))}
          </ul>
          <Link
            target="_blank"
            href={
              hoverBox.songLinks?.apple
                ? hoverBox.songLinks.apple
                : "https://www.apple.com"
            }
          >
            <BsApple />
          </Link>
          <Link
            target="_blank"
            href={
              hoverBox.songLinks?.spotify
                ? hoverBox.songLinks.spotify
                : "https://www.spotify.com"
            }
          >
            <BsSpotify />
          </Link>
          <Link
            target="_blank"
            href={
              hoverBox.songLinks?.tidal
                ? hoverBox.songLinks.tidal
                : "https://www.tidal.com"
            }
          >
            <SiTidal />
          </Link>
          <Link
            target="_blank"
            href={
              hoverBox.songLinks?.youtube
                ? hoverBox.songLinks.youtube
                : "https://www.youtube.com"
            }
          >
            <BsYoutube />
          </Link>
        </article>
      )}
    </StyledHoverBox>
  );
};

export default HoverBox;
