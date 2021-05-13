import styled, {css} from 'styled-components';
import { Facebook, Instagram, Linkedin } from 'styled-icons/boxicons-logos';

export const Footer = styled.footer`
  background: var(--color-black-jussi);
`;

export const AlignLeft = styled.div`
  @media (max-width: 768px){
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
  }
`
export const AlignRight = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px){
    width: 100%;
  }
`

export const Barra = styled.div`
  max-width: 1360px;
  margin: 0px 25%;
  padding: 24px 0px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const iconsCSS = css`
  width:32px;
  height:32px;
  margin-right: 17px;
  color: var(--color-white-jussi);
`;

export const FacebookIcon = styled(Facebook)`
  ${iconsCSS}
`
export const InstagramIcon = styled(Instagram)`
  ${iconsCSS}  
`
export const LinkdinIcon = styled(Linkedin)`
  ${iconsCSS}
`