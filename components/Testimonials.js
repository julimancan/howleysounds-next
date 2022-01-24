import styled from "@emotion/styled";
import { useRef, useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
const StyledTestimonials = styled.article`
  position: relative;
  color: white;
  margin: 2rem auto 1rem;
  padding: 2rem;
  min-height: 820px;
  width: calc(100% - .5rem);
  @media (min-width: 400px) {
    min-height: 500px;
    
  }
  @media (min-width: 800px) {
    min-height: 700px;
    margin: 2rem auto 1rem;
    max-width: 600px;
  }
  .picture {  
    background-image: ${({imageUrl}) => "url(" + imageUrl + ")"};
    background-size: cover;
    width: 100%;
    height: 100%;
    @media (min-width: 800px) {
      height: 100%;
      /* min-width: 600px; */
    }
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    .transparency {
      width: 100%;
      height: 100%;
      background: rgba(32, 95, 105, 0.8);
    }
  }
  .prev,
  .next {
    position: absolute;
    top: 50%;
    color: white;
    font-size: 2.5rem;
    cursor: pointer;
  }
  .prev {
    left: .1rem;
    @media (min-width: 600px) {
      left: .5rem;
    }
  }
  .next {
    right: .1rem;
    @media (min-width: 600px) {
      right: .5rem;
      
    }
  }
  .testimonial-content {
    width: 90%;
    margin: 0 auto;
    transition: 0.25s all ease-in-out;
    display: grid;
    gap: 1rem;
    h3,
    h4,
    h5,
    p {
      text-align: center;
    }
    h3, h4, h5 {
      letter-spacing: 1px;
    }
    h3 {
      font-size: 2rem;
      font-family: "Gotham-Book";
      font-weight: 100
    }
    h4 {
      font-size: 1.8rem;
    }
    h5 {
      margin-top: -.5rem;
      font-family: "Gotham-Book";
      font-weight: 100;
      font-size: 1.2rem;
    }
    p {
      font-size: 12px;
      line-height: 1.5rem;
      text-align: left;
      @media (min-width: 600px) {
        font-size: 10px;
      }
      @media (min-width: 800px) {
        font-size: 1rem;
      }
    }
  }
`;

const Testimonials = ({ content }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(
    content.testimonials[currentIndex]
  );
  const testimonialRef = useRef();

  const arrayLength = content.testimonials.length - 1;

  const handleNext = () => {
    testimonialRef.current.style.opacity = 0;
    // testimonialRef.current.style.transition = "0.25s all ease-in-out";
    if (currentIndex >= arrayLength) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
    setTimeout(() => {
      testimonialRef.current.style.opacity = 1;
      setCurrentTestimonial(content.testimonials[currentIndex]);
    }, 400);
  };

  const handlePrev = () => {
    testimonialRef.current.style.opacity = 0;

    if (currentIndex === 0) {
      setCurrentIndex(arrayLength);
    } else {
      setCurrentIndex(currentIndex - 1);
    }

    setTimeout(() => {
      testimonialRef.current.style.opacity = 1;
      setCurrentTestimonial(content.testimonials[currentIndex]);
    }, 400);
  };

  return (
    <StyledTestimonials imageUrl={content.sectionBgImage.url}>
      <div className="picture">
        <div className="transparency"/>
      </div>
      <div ref={testimonialRef} className="testimonial-content">
        <h3>{content.title}</h3>
        <h4>{currentTestimonial.artistName}</h4>
        <h5>{currentTestimonial.artistJob}</h5>
        <p>{currentTestimonial.testimonialDescription}</p>
      </div>
      <MdNavigateBefore className="prev" onClick={handlePrev} />
      <MdNavigateNext className="next" onClick={handleNext} />
    </StyledTestimonials>
  );
};

export default Testimonials;
