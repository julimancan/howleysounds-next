import styled from "@emotion/styled";


const distanceBetweenLines = 6;
const initialLinePositions = 8;
const StyledTitle = styled.div`
  margin: 2rem;
  position: relative;
  color: #414042;
  div {
    position: absolute;
    width: 3px;
    height: 32px;
    top: 10.5px;
  }
  .red {
    background: #F26E73;
    left: -${initialLinePositions + (2*distanceBetweenLines)}px;
  }
  .blue {
    background: #00B2B5;
    left: -${initialLinePositions + distanceBetweenLines}px;
  }
  .yellow {
    background: #F1BF1A;
    left: -${initialLinePositions}px;
  }
  h2 {
    font-size: 2.7rem;
    text-transform: uppercase;
  }
`;

const Title = ({ title, subtitle }) => {
  return (
    <StyledTitle>
      <div className="line red"></div>
      <div className="line blue"></div>
      <div className="line yellow"></div>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </StyledTitle>
  );
};

export default Title;
