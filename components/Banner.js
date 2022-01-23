import { useGlobalState } from "../state";
import styled from "@emotion/styled";
import TextContent from "./TextContent";
import { StyledButton } from "./StyledButton";
import NavBar from "./NavBar";
import BurgerMenu from "./BurgerMenu";
import { useEffect, useState } from "react";
import { FaInstagram, FaFacebookSquare} from "react-icons/fa"
const HeroBanner = styled.video`
  object-fit: cover;
  width: 100%;
  height: 80vh;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
`;

const StyledBanner = styled.section`

  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  overflow: hidden;
  /* width: 100vw; */
  /* background: red; */
  
  * {
    z-index: 10;
  }
  .title {
    display: grid;
    align-items: start;
    /* justify-content: start; */
    /* background: yellowgreen; */
    /* gap: 0; */
    height: fit-content;
    img {
      width: 70%;
      margin: 0 auto;
      /* background: blue; */
      @media (min-width: 800px) {
        width: 500px;
        
      }
    }
    h1 {
      color: ${({ titleColor }) => titleColor};
      text-align: center;
      font-size: 3rem;
      text-transform: uppercase;
      line-height: 3rem;
      @media (min-width: 600px) {
        font-size: 3.5rem;

      }
      @media (min-width: 800px) {
        font-size: 4rem;
        line-height: 3.5rem;
        
      }
    }
    p {
      color: ${({ subtitleColor }) => subtitleColor};
      text-align: center;
      font-size: clamp(1rem, 1.1rem, 1.375rem);
      transform: clamp(translateY(0), translateY(-5px));
      margin: 0 auto;
    }
    /* background: red; */
    /* height: 1000px; */
  }
`;


const UnderBanner = styled.article`
  background: ${({ sectionBgColor }) => sectionBgColor};
  width: 100%;
  padding: 3rem .5rem;
  display: grid;
  justify-content: center;
  @media (min-width: 900px) {
    padding: 3rem 0;
  }
  .under-banner-content {
    display: grid;
    margin: 0 auto;
    width: 100%;
    padding: 1.5rem;
    @media (min-width: 900px) {
      display: flex;
    }
    .under-banner-left {
      width: 100%;
      text-align: left;
      margin-right: 2rem;
      @media (min-width: 900px) {
        text-align: right;
        /* width: 35%; */
        
      }
      h2 {
        color: ${({ nameColor }) => nameColor};
        font-size: 1.8rem;
        /* margin-bottom: .5rem; */
      }
      h3 {
        color: ${({ jobsColor }) => jobsColor};
        font-size: 1.5rem;
        line-height: 1.4rem;
      }
    }
    .under-banner-right {
      color: ${({ descriptionColor }) => descriptionColor};
      padding-top: 2.5rem;
      display: grid;
      align-items: center;
      @media (min-width: 800px) {
        white-space:nowrap;
      }
      p {
        line-height: 20px;
      }
    }
  }
`;



const Banner = ({ banner, id }) => {
  const [siteSettings] = useGlobalState("siteSettings");
  const { underBanner } = banner;
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const pagePercentage = window.innerHeight * .8;
    if (window.pageYOffset >= pagePercentage) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, []);
  
  const socialItems = [
    {
      name: "instagram",
      link: siteSettings.instagramAccountLink,
      icon: <FaInstagram/>,
      index: 6
    },
    {
      name: "facebook",
      link: siteSettings.facebookAccountLink,
      icon: <FaFacebookSquare/>,
      index: 7
    }
  ]
  const navItems = [
    {
      name: "HOME",
      linkTo: "banner"
    },
    {
      name: "MY WORK",
      linkTo: "musicPlayer"
    },
    {
      name: "MY SERVICES",
      linkTo: "myServices"
    },
    {
      name: "ABOUT",
      linkTo: "about"
    },
    {
      name: "CONTACT",
      linkTo: "contact"
    },
    {
      name: "FREE eBOOK",
      linkTo: siteSettings.pdf?.pdfFile
    },
  ]
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
    <section id={id} >
      <StyledBanner
        titleColor={banner.titleColor}
        subtitleColor={banner.subtitleColor}
        ctaHoverColor={banner.ctaHoverColor}
      >
        <HeroBanner autoPlay loop muted alt={banner.bgVideo.alt}>
          <source src={banner.bgVideo.main} type="video/webm" />
          <source src={banner.bgVideo.fallback} type="video/mp4" />
        </HeroBanner>
        <NavBar siteSettings={siteSettings} navItems={navItems} socialItems={socialItems} />
        <BurgerMenu navItems={navItems} scrolled={scrolled} socialItems={socialItems} />
        <div className="title">
          <img src={banner.logo.url} />
          <h1>{banner.title}</h1>
          <p>{banner.subtitle}</p>
          <StyledButton
            textColor={banner.subtitleColor}
            hoverBackground={banner.ctaHoverColor}
            onClick={() => handleClick("musicPlayer")}
          >
            {banner.bannerCta}
          </StyledButton>
        </div>
      </StyledBanner>
      <UnderBanner
        nameColor={underBanner.nameColor}
        sectionBgColor={underBanner.sectionBgColor}
        jobsColor={underBanner.jobsColor}
        descriptionColor={underBanner.descriptionColor}
      >
        <div className="under-banner-content">
          <div className="under-banner-left">
            <h2>{underBanner.Name}</h2>
            {underBanner.jobTitles?.map((job, index) => (
              <h3 key={index}>{job}</h3>
            ))}
          </div>
          <div className="under-banner-right">
            <TextContent content={underBanner.description} />
            <StyledButton
              textColor={underBanner.descriptionColor}
              hoverBackground={banner.ctaHoverColor}
              onClick={() => handleClick("contact")}
            >
              {underBanner.ctaText}
            </StyledButton>
          </div>
        </div>
      </UnderBanner>
    </section>
  );
};

export default Banner;
