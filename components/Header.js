import styled from '@emotion/styled'
import Link from 'next/link';
import Head from 'next/head';
import { useGlobalState } from '../state';

const StyledHeader = styled.header`
  
`;



const Header = () => {
  const [siteSettings] = useGlobalState("siteSettings");

  return (
    <StyledHeader >
        <Head>
          <title>{siteSettings.title}</title>
          <link rel="shortcut icon" href={siteSettings.favicon?.url} />
          <script async defer data-website-id="25378653-f5a1-4f82-b7aa-cafa60ce6c55" src="https://analytics-julimancan.vercel.app/umami.js"></script>
        </Head>
    </StyledHeader>
  )
}

export default Header
