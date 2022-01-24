import styled from "@emotion/styled";

const distanceBetweenLines = 6;
const initialLinePositions = 8;
const StyledTitle = styled.div`
  margin: 2rem;
  color: #414042;
  
  h2 {
    position: relative;
    font-size: 2rem;
    @media (min-width: 800px) {
      font-size: 2.7rem;
    }
    text-transform: uppercase;
    div {
    position: absolute;
    width: 3px;
    height: 25px;
    bottom: .35rem;
    /* transform: translateY(-20%); */
    @media (min-width: 800px) {
      height: 32px;
      top: 0.65rem;
    }
  }
  .red {
    background: #f26e73;
    left: -${initialLinePositions + 2 * distanceBetweenLines}px;
  }
  .blue {
    background: #00b2b5;
    left: -${initialLinePositions + distanceBetweenLines}px;
  }
  .yellow {
    background: #f1bf1a;
    left: -${initialLinePositions}px;
  }
  }
  p {
    font-size: 0.9rem;
  }
`;

const Title = ({ title, subtitle }) => {
  return (
    <StyledTitle className="section-title">
      <h2>
        {title}
        <div className="line red"></div>
        <div className="line blue"></div>
        <div className="line yellow"></div>
      </h2>
      <p>{subtitle}</p>
    </StyledTitle>
  );
};

export default Title;
