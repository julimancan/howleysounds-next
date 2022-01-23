import styled from "@emotion/styled";
import Link from "next/link";
import { useEffect, useState } from "react";
import SocialLinks from "./SocialLinks";
import AnimatedListItem from "./AnimatedListItem";
import { useGlobalState } from "../state";

const menuItems = [];
const transitionDuration = ".4s";

const BurgerContainer = styled.div`
  top: 2rem;
  right: 2rem;
  position: fixed;
  color: white;
  cursor: pointer;
  height: auto;
  width: auto;
  height: 2rem;
  display: flex;
  align-items: center;
`;

const Burger = styled.div`
  display: block;
  width: 40px;
  height: 3px;
  background: ${({ open, colors, scrolled }) =>
    open
      ? colors.menuBackgroundColor
      : !scrolled
      ? colors.menuBarColor
      : "black"};
  border-radius: 5px;
  align-self: center;
  transition: width ${transitionDuration}, background ${transitionDuration};
  &:before,
  &:after {
    content: "";
    border-radius: 5px;
    width: ${({ open }) => (open ? "40px" : "50px")};
    height: 5px;
    background: ${({ colors, scrolled, open }) =>
      open ? colors.menuTextColor : !scrolled ? colors.menuTextColor : "black"};
    position: absolute;
    transition: background ${transitionDuration}, top ${transitionDuration},
      bottom ${transitionDuration}, transform ${transitionDuration},
      width ${transitionDuration};
  }
  &:before {
    top: ${({ open }) => (open ? "1.5rem" : 0)};
    transform: ${({ open }) => (open ? "rotate(45deg) translateY(-15px)" : "")};
  }
  &:after {
    bottom: ${({ open }) => (open ? "1.5rem" : 0)};
    transform: ${({ open }) => (open ? "rotate(-45deg) translateY(15px)" : "")};
  }
`;

const NavContainer = styled.nav`
  background: ${({ colors }) => colors.menuBackgroundColor};
  opacity: 0.95;
  position: fixed;
  width: ${({ open }) => (open ? "100vw" : 0)};
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: width ${transitionDuration};

  h1 {
    text-decoration: none;
    color: ${({ colors }) => colors.menuTextColor};
    margin-left: 1rem;
    /* position: absolute; */
    /* top: 1.75rem; */
    /* left: 5rem; */
    font-size: 3rem;
    transition: color ${transitionDuration};
  }
  @media (min-width: 800px) {
    display: none;
  }
`;

const NavigationList = styled.ul`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  list-style: none;
  line-height: 3rem;
`;

export const NavigationItem = styled(AnimatedListItem)`
  h3,
  .download-res {
    color: ${({ colors }) => colors?.menuTextColor};
    text-transform: uppercase;
    font-weight: bold;
    margin: 0.3rem;
    cursor: pointer;
    font-size: 1rem;
  }
  a {
    text-transform: uppercase;
    font-weight: bold;
    text-decoration: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
  }
`;

const BurgerMenu = ({ navItems, scrolled, socialItems }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [siteSettings] = useGlobalState("siteSettings");
  const [elementSelected, setElementSelected] = useState("banner");
  const handleClick = (link) => {
    setElementSelected(link);
    setNavOpen(false);
  };
  useEffect(() => {
    let elementClicked = document.getElementById(elementSelected);
    elementClicked.scrollIntoView({
      block: "start",
      behavior: "smooth",
      inline: "start",
    });
  }, [elementSelected]);
  const colors = {
    menuTextColor: siteSettings.menuTextColor || "black",
    menuBackgroundColor: siteSettings.menuBgColor,
    menuBarColor: siteSettings.menuTextColor,
  };
  // const colors = {
  //   menuTextColor: "black",
  //   menuBackgroundColor: "white",
  //   menuBarColor: "red"
  // };

  console.log({ navItems });
  return (
    <NavContainer open={navOpen} colors={colors}>
      <BurgerContainer onClick={() => setNavOpen(!navOpen)} open={navOpen}>
        <Burger open={navOpen} colors={colors} scrolled={scrolled} />
      </BurgerContainer>

      <NavigationList open={navOpen}>
        {navItems.map((item, index) => (
          <NavigationItem
            key={`nav-item${index}`}
            colors={colors}
            index={index}
          >
            {item.linkTo?.includes("https") ? (
              <a href={item.linkTo} download target="_blank" rel="noreferrer">
                <h3>{item.name}</h3>
              </a>
            ) : (
              <h3 onClick={() => handleClick(item.linkTo)}>{item.name}</h3>
            )}
          </NavigationItem>
        ))}
        <SocialLinks socialLinks={socialItems} colors={colors} />
      </NavigationList>
    </NavContainer>
  );
};

export default BurgerMenu;
