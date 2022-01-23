import styled from "@emotion/styled";
import ContactForm from "./ContactForm";
import Testimonials from "./Testimonials";
import Title from "./Title";

const StyledContactSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1350px;
  margin: 0 auto;
  .content {
    display: grid;
    align-items: center;
    justify-content: center;
    @media (min-width: 1225px) {
      max-width: 600px;
    }
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
