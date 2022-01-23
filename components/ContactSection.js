import styled from "@emotion/styled";
import ContactForm from "./ContactForm";
import Testimonials from "./Testimonials";
import Title from "./Title";

const StyledContactSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  /* margin-bottom: 2rem; */
  gap: 2rem;
  padding: 2rem 0rem 0;
  /* background: red; */
  max-width: 1350px;
  margin: 0 auto;
  .content {
    display: grid;
    align-items: center;
    justify-content: center;
    margin: 0 auto
  }
  @media (min-width: 800px) {
    /* background: blue; */
    /* display: flex; */
    /* align-items: flex-start; */

  }
`;

const ContactSection = ({ id, contactSectionContent, testimonialsContent }) => {
  // console.log(`testimonialsContent`, testimonialsContent);
  return (
    <StyledContactSection id={id}>
      <div className="content">
        <Title
          title={contactSectionContent.title}
          subtitle={contactSectionContent.subtitle}
        />
        <ContactForm formContent={contactSectionContent.formContent} />
      </div>
      <Testimonials content={testimonialsContent} />
    </StyledContactSection>
  );
};

export default ContactSection;
