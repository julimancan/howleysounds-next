// import Head from 'next/head'
// import Image from 'next/image'
import { useEffect } from 'react';
import Banner from '../components/Banner';
import MusicPlayer from '../components/MusicPlayer';
import { getHeroBanner, getMusicPlayerContent, getSiteSettings } from '../lib/api';
import { useGlobalState } from '../state';

export default function Home({siteConfig, banner, musicPlayer}) {
  const setSiteSettings = useGlobalState("siteSettings")[1];
  useEffect(() => {
    setSiteSettings(siteConfig[0])
  }, [])
  return (
    <main>
      <Banner banner={banner} />
      <MusicPlayer musicPlayer={musicPlayer}/>
    </main>
  )
}


export async function getServerSideProps(context) {
  const siteConfig = await getSiteSettings();
  const banner = await getHeroBanner();
  const musicPlayer = await getMusicPlayerContent();
  return {
    props: {
      siteConfig,
      banner,
      musicPlayer
    }
  }
}