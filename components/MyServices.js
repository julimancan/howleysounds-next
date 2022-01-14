import styled from "@emotion/styled"
import ServicesSection from "./ServicesSection"
import { StyledButton } from "./StyledButton";
import TextContent from "./TextContent";
import Title from "./Title"


const StyledMyServices = styled.section`
  margin: 1rem 0;
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
    width: 80vw;
    margin: 0 auto;
    
    text-align: center;
  }
`;
const MyServices = ({myServicesContent}) => {
  return (
    <StyledMyServices>
      <Title title={myServicesContent.title} subtitle={myServicesContent.subtitle} />
      <ul>
        {myServicesContent.sections.map((section, index) => (
          <ServicesSection section={section} index={index}/>
        ))}
      </ul>
      <div className="bottom-line"/>
      <article>
        <TextContent content={myServicesContent.summary} />
        <StyledButton textColor="black" hoverBackground="#00B2B5">
          {myServicesContent.ctaText}
        </StyledButton>
      </article>
    </StyledMyServices>
  )
}

export default MyServices
