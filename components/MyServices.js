import styled from "@emotion/styled";
import ServicesSection from "./ServicesSection";
import { StyledButton } from "./StyledButton";
import TextContent from "./TextContent";
import Title from "./Title";

const StyledMyServices = styled.section`
  margin: 1rem 0;
  .services-title {
    max-width: 1350px;
    /* background: red; */
    margin: 0 auto;
  }
  .bottom-line {
    width: 200px;
    @media (min-width: 800px) {
      width: 500px;
    }
    height: 1px;
    background: black;
    margin: 1rem auto;
  }
  article {
    max-width: 1350px;

    margin: 0 2rem;
    @media (min-width: 800px) {
      margin: 0 auto;
    }
    text-align: center;
  }
`;
const MyServices = ({ myServicesContent, id }) => {
  return (
    <StyledMyServices id={id}>
      <div className="services-title">
        <Title
          title={myServicesContent.title}
          subtitle={myServicesContent.subtitle}
        />
      </div>
      <ul>
        {myServicesContent.sections.map((section, index) => (
          <ServicesSection section={section} key={`myServices-${index}`} />
        ))}
      </ul>
      <div className="bottom-line" />
      <article>
        <TextContent content={myServicesContent.summary} />
        <StyledButton textColor="black" hoverBackground="#00B2B5">
          {myServicesContent.ctaText}
        </StyledButton>
      </article>
    </StyledMyServices>
  );
};

export default MyServices;
