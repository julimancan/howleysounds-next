// import Head from 'next/head'
// import Image from 'next/image'
import { useEffect } from "react";
import AboutSection from "../components/AboutSection";
import Banner from "../components/Banner";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";
import HoverBoxes from "../components/HoverBoxes";
import MusicPlayer from "../components/MusicPlayer";
import MyServices from "../components/MyServices";
import {
  getAboutContent,
  getContactSectionContent,
  getFooterContent,
  getHeroBanner,
  getHoverBoxesContent,
  getMusicPlayerContent,
  getMyServicesContent,
  getSiteSettings,
  getTestimonialsContent,
} from "../lib/api";
import { useGlobalState } from "../state";

export default function Home({
  siteConfig,
  banner,
  musicPlayer,
  hoverBoxesContent,
  myServicesContent,
  contactSectionContent,
  testimonialsContent,
  aboutContent,
  footerContent
}) {

  const setSiteSettings = useGlobalState("siteSettings")[1];

  useEffect(() => {
    setSiteSettings(siteConfig[0]);
  }, []);

  const navItems = [
    {
      name: "HOME",
      linkTo: "banner"
    },
    {
      name: "MY WORK",
      linkTo: "musicPlayer"
    },
    {
      name: "MY SERVICES",
      linkTo: "myServices"
    },
    {
      name: "ABOUT",
      linkTo: "about"
    },
    {
      name: "CONTACT",
      linkTo: "contact"
    },
    {
      name: "FREE eBOOk",
      linkTo: "Contact"
    },
  ]
  return (
    <main>
      <Banner banner={banner} id="banner" />
      <MusicPlayer musicPlayer={musicPlayer} id="musicPlayer" />
      <HoverBoxes hoverBoxesContent={hoverBoxesContent} />
      <MyServices myServicesContent={myServicesContent} id="myServices" />
      <ContactSection contactSectionContent={contactSectionContent} id="contact" testimonialsContent={testimonialsContent} />
      <AboutSection  aboutContent={aboutContent} id="about" />
      {/* <FooterSection footerContent={footerContent} /> */}
    </main>
  );
}

export async function getServerSideProps(context) {
  const siteConfig = await getSiteSettings();
  const banner = await getHeroBanner();
  const musicPlayer = await getMusicPlayerContent();
  const hoverBoxesContent = await getHoverBoxesContent();
  const myServicesContent = await getMyServicesContent();
  const contactSectionContent = await getContactSectionContent();
  const testimonialsContent = await getTestimonialsContent();
  const aboutContent = await getAboutContent();
  const footerContent = await getFooterContent();

  return {
    props: {
      siteConfig,
      banner,
      musicPlayer,
      hoverBoxesContent,
      myServicesContent,
      contactSectionContent,
      testimonialsContent,
      aboutContent,
      footerContent
    },
  };
}
