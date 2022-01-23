import styled from "@emotion/styled";
import HoverBox from "./HoverBox";

const StyledBoxes = styled.section`
  max-width: 1500px;
  margin: 0 auto 4rem;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    margin: 2rem 0;
    gap: 1rem;
    /* background: red; */
  }
`;

const HoverBoxes = ({ hoverBoxesContent }) => {
  return (
    <StyledBoxes>
      <ul>
        {hoverBoxesContent.map((hoverBox, index) => (
          <HoverBox hoverBox={hoverBox} key={`${index}-hover-box`} />
        ))}
      </ul>
    </StyledBoxes>
  );
};

export default HoverBoxes;
