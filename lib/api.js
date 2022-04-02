import client from "./sanity";

const siteSettingsItems = `
  title,
  description,
  menuTextColor,
  menuBgColor,
  menuBarColor,
  emailFrom,
  menuHoverColor,
  menuCurrentColor,
  instagramAccountLink,
  facebookAccountLink,
  "favicon": favicon{alt, "url": asset->url},
  "pdf": pdf{pdfText, "pdfFile": pdfFile.asset->url}
`;
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
};

const musicPlayerItems = `
  title,
  subtitle,
  embedLink
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

const contactSectionItems = `
  title,
  subtitle,
  "formContent": formContent{
                    formTitle, 
                    formSubtitle, 
                    artistName, 
                    yourName, 
                    email, 
                    artistWebsite, 
                    "projectNeeds": projectNeeds[],
                    approxStartingDate,
                    approxBudget,
                    message             
                  },
`;

export const getContactSectionContent = async () => {
  const results = await client.fetch(`*[_type == "contact"] {
    ${contactSectionItems}
  }`);
  return results[0];
};

const testimonialsItems = `
  title,
  "sectionBgImage": sectionBgImage{alt, "url": asset->url},
  "testimonials": testimonials[]{artistName, artistJob, testimonialDescription}
`;

export const getTestimonialsContent = async () => {
  const results = await client.fetch(`*[_type == "testimonialsSection"] {
    ${testimonialsItems}
  }`);
  return results[0];
};

const aboutItems = `
  title,
  subtitle,
  "image": image{alt, "url": asset->url},
  "content": content[]
`;

export const getAboutContent = async () => {
  const results = await client.fetch(`*[_type == "about"] {
    ${aboutItems}
  }`);
  return results[0];
};

const footerItems = `
  backgroundColor,
  textColor,
  selectedColor,
  `;

export const getFooterContent = async () => {
  const results = await client.fetch(`*[_type == "newFooter"] {
    ${footerItems}
  }`);
  return results[0];
};
