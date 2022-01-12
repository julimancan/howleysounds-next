import client from "./sanity";


const siteSettingsItems = `
  title,
  description,
  menuTextColor,
  menuBgColor,
  menuHoverColor,
  menuCurrentColor,
  instagramAccountLink,
  facebookAccountLink,
  "favicon": favicon{alt, "url": asset->url}
`
export const getSiteSettings = async () => {
  const results = await client.fetch(`*[_type == "siteSettings"] {
    ${siteSettingsItems}
  }`);
  return results;
};


const bannerItems = `
  "bgVideo": bgVideo{"main": webm.asset->url, "fallback": fallback.asset->url, alt},
  "logo": logo{alt, "url": asset->url},
  title,
  titleColor,
  subtitle,
  subtitleColor,
  bannerCta,
  ctaHoverColor,
  underBanner
`;
export const getHeroBanner = async () => {
  const results = await client.fetch(`*[_type == "heroBanner"] {
    ${bannerItems}
  }`);
  return results[0];
}

const musicPlayerItems = `
  title,
  subtitle,
  "musicPlayerImage": musicPlayerImage{alt, "url": asset->url},
  "songs": songs[]{"song": {artistName, songName, "url": mp3.asset->url}}
`;

export const getMusicPlayerContent = async () => {
  const results = await client.fetch(`*[_type == "myWork"] {
    ${musicPlayerItems}
  }`);
  return results[0];
};
