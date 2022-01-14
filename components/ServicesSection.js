import styled from "@emotion/styled";

const StyledSection = styled.li`
  background: ${({ section }) => section.bgColor};
  padding: 2rem 1rem;
  color: ${({ section }) => section.textColor};
  .content {
    @media (min-width: 800px) {
      display: flex;
    }

    /* background: limegreen; */
    max-width: 80vw;
    margin: 0 auto;
    span {
      width: 25%;
      
      h3 {
        font-size: 2rem;
      }
    }
    div {
      width: 70%;
      p {
        margin: 0 0 1rem;
      }
    }
  }
`;

const ServicesSection = ({ section, index }) => {
  const sentences = section.description.split(".");
  sentences.pop();
  return (
    <StyledSection key={`${index}-my-services`} section={section}>
      <div className="content">
        <span>
          As a ...<h3>{section.sectionTitle}</h3>
        </span>
        <div>
          {sentences.map((sentence, index) => (
            <p key={index}>{sentence}.</p>
          ))}
        </div>
      </div>
    </StyledSection>
  );
};

export default ServicesSection;
