import styled from "@emotion/styled";
import { NavigationItem } from "./BurgerMenu";

const colors = {};

const SocialLinkWrapper = styled.div`
  margin: 0.5rem 0 0;
  ul {
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    gap: 2rem;
    li {
      cursor: pointer;
      a {
        color: ${colors.menuTextColor};
      }
      a:hover {
        color: ${colors.textHoverColor};
      }
    }
  }
`;
const SocialLinks = ({ socialLinks, colors }) => {
  console.log("socialLinks", socialLinks);
  return (
    <SocialLinkWrapper colors={colors} className="social-links">
      <ul>
        {socialLinks.map((item, index) => (
          <NavigationItem
            key={`social-link-${index}`}
            colors={colors}
            index={item.index}
          >
            <a href={item.link} target="_blank" rel="noreferrer">
              {item.icon}
            </a>
          </NavigationItem>
        ))}
      </ul>
    </SocialLinkWrapper>
  );
};

export default SocialLinks;
