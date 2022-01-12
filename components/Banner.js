import { useGlobalState } from "../state";
import styled from "@emotion/styled";
import TextContent from "./TextContent";

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
  background: red;
  
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
      font-size: clamp(2rem, 3rem, 5.93rem);
      text-transform: uppercase;
      line-height: clamp(1.8rem, 2.8rem, 5.57rem);
    }
    p {
      color: ${({ subtitleColor }) => subtitleColor};
      text-align: center;
      font-size: clamp(1rem, 1.1rem, 1.375rem);
      transform: clamp(translateY(0), translateY(-5px));
      margin: 0 auto;
    }
  }
`;

const StyledButton = styled.button`
  background: transparent;
  border: 1px solid ${({ textColor }) => textColor};
  color: ${({ textColor }) => textColor};
  width: fit-content;
  margin: 1.5rem auto;
  padding: 0.8rem 2rem;
  text-transform: uppercase;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    background: ${({ hoverBackground }) => hoverBackground};
    border: 1px solid ${({ hoverBackground }) => hoverBackground};
  }
`;
const UnderBanner = styled.article`
  background: ${({ sectionBgColor }) => sectionBgColor};
  width: 100%;
  padding: 3rem .5rem;
  display: grid;
  justify-content: center;
  @media (min-width: 800px) {
    padding: 3rem 0;
  }
  .under-banner-content {
    display: grid;
    margin: 0 auto;
    width: 100%;
    @media (min-width: 800px) {
      display: flex;
    }
    .under-banner-left {
      width: 100%;
      text-align: left;
      margin-right: 2rem;
      @media (min-width: 800px) {
        text-align: right;
        width: 35%;
        
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
    }
  }
`;

const Banner = ({ banner }) => {
  const [siteSettings] = useGlobalState("siteSettings");
  const { underBanner } = banner;
  return (
    <section>
      <StyledBanner
        titleColor={banner.titleColor}
        subtitleColor={banner.subtitleColor}
        ctaHoverColor={banner.ctaHoverColor}
      >
        <HeroBanner autoPlay loop muted alt={banner.bgVideo.alt}>
          <source src={banner.bgVideo.main} type="video/webm" />
          <source src={banner.bgVideo.fallback} type="video/mp4" />
        </HeroBanner>
        <div className="title">
          <img src={banner.logo.url} />
          <h1>{banner.title}</h1>
          <p>{banner.subtitle}</p>
          <StyledButton
            textColor={banner.subtitleColor}
            hoverBackground={banner.ctaHoverColor}
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
