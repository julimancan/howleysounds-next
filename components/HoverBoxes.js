import styled from "@emotion/styled";
import HoverBox from "./HoverBox"


const StyledBoxes = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  margin: 2rem 0;
  gap: 1rem;
`;

const HoverBoxes = ({ hoverBoxesContent }) => {
 
  return (
    <StyledBoxes>
      {hoverBoxesContent.map((hoverBox, index) => (
        <HoverBox hoverBox={hoverBox} key={`${index}-hover-box`} />
      ))}
    </StyledBoxes>
  )
}

export default HoverBoxes
