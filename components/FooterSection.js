import styled from "@emotion/styled";
import { useGlobalState } from "../state";
import NavBar from "./NavBar";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import SocialLinks from "./SocialLinks";
import { useEffect, useState } from "react";

const StyledFooter = styled.footer`
  /* height: 140px; */
  background: ${({ footerContent }) => footerContent?.backgroundColor};
  padding: 2rem 2rem;
  display: flex;
  align-items: center;
  position: relative;
  .footer-nav {
    display: grid;
    list-style: none;
    justify-content: space-between;
    gap: 1rem;
    /* background: red; */
    align-self: center;
    * {
      color: ${({footerContent}) => footerContent.textColor}
    }
    font-size: 1rem;
    font-weight: 800;
  }
  @media (min-width: 800px) {
    .footer-nav {
      /* background: red; */
      margin: 0 auto;
      padding: 0 2rem;
      width: 100%;
      max-width: 1350px;
      display: flex;
      li {
        cursor: pointer;
      }
    }
  }
  .social-links {
    position: absolute;
    top: 1rem;
    right: 3rem;
    color: ${({footerContent}) => footerContent.textColor}
  }
`;

const FooterSection = ({ footerContent }) => {
  const [siteSettings] = useGlobalState("siteSettings");
  const navItems = [
    {
      name: "HOME",
      linkTo: "banner",
    },
    {
      name: "MY WORK",
      linkTo: "musicPlayer",
    },
    {
      name: "MY SERVICES",
      linkTo: "myServices",
    },
    {
      name: "ABOUT",
      linkTo: "about",
    },
    {
      name: "CONTACT",
      linkTo: "contact",
    },
    {
      name: siteSettings.pdf?.pdfText,
      linkTo: siteSettings.pdf?.pdfFile,
    },
  ];

  const socialItems = [
    {
      name: "instagram",
      link: siteSettings.instagramAccountLink,
      icon: <FaInstagram />,
      index: 6,
    },
    {
      name: "facebook",
      link: siteSettings.facebookAccountLink,
      icon: <FaFacebookSquare />,
      index: 7,
    },
  ];
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
    <StyledFooter footerContent={footerContent}>
      <ul className="footer-nav">
        {navItems.map((item, index) => (
          <li key={`nav-item${index}`} index={index}>
            {item.linkTo?.includes("https") ? (
              <a href={item.linkTo} download aria-label={`link to ${item.name}`} target="_blank" rel="noreferrer">
                {item.name}
              </a>
            ) : (
              <div onClick={() => handleClick(item.linkTo)}>{item.name}</div>
            )}
          </li>
        ))}
      </ul>
      <SocialLinks socialLinks={socialItems} />
    </StyledFooter>
  );
};

export default FooterSection;
