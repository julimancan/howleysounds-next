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
  musicPlayerBgColor,
  "songs": songs[]{"song": {artistName, songName, "url": mp3.asset->url}}
`;

export const getMusicPlayerContent = async () => {
  const results = await client.fetch(`*[_type == "myWork"] {
    ${musicPlayerItems}
  }`);
  return results[0];
};


const hoverBoxesItems = `
  songName,
  artistName,
  live,
  "releaseArtWork": releaseArtWork{alt, "url": asset->url},
  "productionRoles": productionRoles[],
  "songLinks": songLinks{tidal, spotify, apple, youtube}
`;

export const getHoverBoxesContent = async () => {
  const results = await client.fetch(`*[_type == "hoverBoxes"] {
    ${hoverBoxesItems}
  }`);
  return results;
};

const myServicesItems = `
  title,
  subtitle,
  "sections": sections[]{sectionTitle, description, bgColor, textColor},
  summary,
  ctaText
`;

export const getMyServicesContent = async () => {
  const results = await client.fetch(`*[_type == "myServices"] {
    ${myServicesItems}
  }`);
  return results[0];
};