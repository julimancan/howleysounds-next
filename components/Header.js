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
        </Head>
    </StyledHeader>
  )
}

export default Header
