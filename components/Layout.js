import styled from "@emotion/styled";
import Header from "./Header";

const LayoutWrapper = styled.div`

  /* @font-face {
    font-family: "Oceanside-Typewriter";
    src: url("/fonts/Oceanside-Typewriter.ttf");
    font-display: swap;
  }
  @font-face {
    font-family: "PrequelDemo";
    src: url("/fonts/PrequelDemo-Regular.ttf");
    font-display: swap;
  }
  @font-face {
    font-family: "American-Typewriter";
    src: url("/fonts/American-Typewriter-Regular.ttf");
    font-display: swap;
  } */
  @font-face {
    font-family: "gotham-ultra";
    src: url("/fonts/gotham-ultra.otf");
    font-display: swap;
  }
  @font-face {
    font-family: "Gotham-Book";
    src: url("/fonts/Gotham-Book.otf");
    font-display: swap;
  }
   
  h1, h2, h3, h4, h5 {
    font-family: "gotham-ultra"
  }
  span, p {
    font-family: "Gotham-Book"

  }
  `;

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      { children}
    </LayoutWrapper>
  )
}

export default Layout
