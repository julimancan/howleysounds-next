import styled from "@emotion/styled";

const StyledSection = styled.li`
  background: ${({ section }) => section.bgColor};
  padding: 2rem .5rem;
  @media (min-width: 800px) {
    padding: 2rem 1rem;
  }
  color: ${({ section }) => section.textColor};
  .content {
    margin: 0 auto;
    max-width: 450px;
    @media (min-width: 940px) {
      display: flex;
      max-width: 1350px;
      padding: 0 2rem;
    }
    span {
      width: 25%;
      
      h3 {
        /* background: red; */
        font-size: 1.8rem;
        @media (min-width: 1280px) {
          font-size:  2.5rem
        }
      }
    }
    div {
      width: 100%;
      /* max-width: 650px; */
      margin: 0 auto;
      @media (min-width: 940px) {
        width: 70%;
        max-width: none;
        
      }
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
