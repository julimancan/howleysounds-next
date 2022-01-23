import styled from "@emotion/styled";
import TextContent from "./TextContent";
import Title from "./Title";

const StyledAboutSection = styled.section`
  /* background: red; */
  max-width: 1350px;
  margin: 4rem auto;
  .about-content {
    padding: 0 2rem;
    .image {
      margin: 2rem 0;
      img {
        width: 100%;
      }
    }
    p {
      /* background: red; */
      margin: 1rem 0;
      font-size: .9rem
    }
  }
`;

const AboutSection = ({ id, aboutContent }) => {
  return (
    <StyledAboutSection id={id}>
      <Title title={aboutContent.title} subtitle={aboutContent.subtitle} />
      <div className="about-content">
        <div className="image">
          <img src={aboutContent.image.url} alt={aboutContent.image.alt || "Photo collage of Kevin Howley"} />
        </div>
        <TextContent content={aboutContent.content} />
      </div>
    </StyledAboutSection>
  );
};

export default AboutSection;
74