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
          {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
          {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> */}
          {/* <link href={`https://fonts.googleapis.com/css2?family=${siteSettings.headingFonts || ""}&display=optional`} rel="stylesheet" /> */}
          {/* <link href={`https://fonts.googleapis.com/css2?family=${siteSettings.menuFont}&display=optional`} rel="stylesheet" /> */}
          {/* <link href={`https://fonts.googleapis.com/css2?family=${siteSettings.paragraphFonts}&display=optional`} rel="stylesheet" /> */}
          {/* <link href={`https://fonts.googleapis.com/css2?family=${siteSettings.subtitleFonts}&display=optional`} rel="stylesheet" /> */}
          <title>{siteSettings.title}</title>
          <link rel="shortcut icon" href={siteSettings.favicon?.url} />
        </Head>
    </StyledHeader>
  )
}

export default Header
