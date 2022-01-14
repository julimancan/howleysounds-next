// import Head from 'next/head'
// import Image from 'next/image'
import { useEffect } from "react";
import Banner from "../components/Banner";
import HoverBoxes from "../components/HoverBoxes";
import MusicPlayer from "../components/MusicPlayer";
import MyServices from "../components/MyServices";
import {
  getHeroBanner,
  getHoverBoxesContent,
  getMusicPlayerContent,
  getMyServicesContent,
  getSiteSettings,
} from "../lib/api";
import { useGlobalState } from "../state";

export default function Home({
  siteConfig,
  banner,
  musicPlayer,
  hoverBoxesContent,
  myServicesContent
}) {

  const setSiteSettings = useGlobalState("siteSettings")[1];

  useEffect(() => {
    setSiteSettings(siteConfig[0]);
  }, []);

  return (
    <main>
      <Banner banner={banner} />
      <MusicPlayer musicPlayer={musicPlayer} />
      <HoverBoxes hoverBoxesContent={hoverBoxesContent} />
      <MyServices myServicesContent={myServicesContent} />
    </main>
  );
}

export async function getServerSideProps(context) {
  const siteConfig = await getSiteSettings();
  const banner = await getHeroBanner();
  const musicPlayer = await getMusicPlayerContent();
  const hoverBoxesContent = await getHoverBoxesContent();
  const myServicesContent = await getMyServicesContent();

  return {
    props: {
      siteConfig,
      banner,
      musicPlayer,
      hoverBoxesContent,
      myServicesContent
    },
  };
}
