import styled from "@emotion/styled";
import Link from "next/link";
import { useEffect, useState } from "react";
import AnimatedListItem from "./AnimatedListItem";
import SocialLinks from "./SocialLinks";

const StyledNavBar = styled.ul`
  position: absolute;
  z-index: 10;
  color: ${({ siteSettings }) => siteSettings.menuTextColor || "white"};
  top: 2rem;
  /* background: red; */
  padding: 1.8rem 1rem;
  font-size: 1.2rem;
  list-style: none;
  display: none;
  gap: 5vw;
  @media (min-width: 800px) {
    display: flex;
  }
  li {
    cursor: pointer;
    &:hover {
      color: ${({ siteSettings }) => siteSettings.menuHoverColor || "white"};
    }
    a {
      &:hover {
        color: ${({ siteSettings }) => siteSettings.menuHoverColor || "white"};
      }
    }
  }
  .social-links {
    /* background: red; */
    position: absolute;
    top: -1.5rem;
    right: 1rem;

  }
`;

const NavBar = ({ siteSettings, navItems, socialItems }) => {
  const [elementSelected, setElementSelected] = useState("banner");
  const handleClick = (link) => {
    setElementSelected(link);
  };
  useEffect(() => {
    let elementClicked = document.getElementById(elementSelected);
    elementClicked.scrollIntoView({
      block: "start",
      behavior: "smooth",
      inline: "start",
    });
  }, [elementSelected]);

  return (
    <StyledNavBar siteSettings={siteSettings}>
      {navItems.map((item, index) => (
        <AnimatedListItem key={`nav-item${index}`} index={index}>
          {item.linkTo?.includes("https") ? (
            <a href={item.linkTo} download target="_blank">
              {item.name}
            </a>
          ) : (
            <div onClick={() => handleClick(item.linkTo)}>{item.name}</div>
          )}
        </AnimatedListItem>
      ))}
      <SocialLinks socialLinks={socialItems} />
    </StyledNavBar>
  );
};

export default NavBar;
