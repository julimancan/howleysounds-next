import styled from "@emotion/styled";

const AnimatedListItem = styled.li`
animation-name: animateIn;
animation-duration: 350ms;
animation-delay: calc(${({ index }) => index === 0 ? 1 : index + 1} * 400ms);  
animation-fill-mode: both;
animation-timing-function: ease-in-out;
@keyframes animateIn {
0% {
  opacity: 0;
  transform: scale(0.6) translateY(-8px);
}

100% {
  opacity: 1;
  }
}
`;

export default AnimatedListItem;