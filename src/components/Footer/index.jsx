import React from 'react';
import * as s from "./styles";

import wppcompanyLogo from '../../img/wppcompany.png';

const Footer = () => {
  return (
    <s.Footer>
      <s.Barra>
        <s.AlignLeft>
          <img src={wppcompanyLogo} alt="wppcompany logo"/>
        </s.AlignLeft>
        <s.AlignRight>
          <a href="https://www.facebook.com/agencia.jussi/" target="_blank"  rel="noreferrer">
            <s.FacebookIcon />
          </a>
          <a href="https://www.instagram.com/jussi/" target="_blank" rel="noreferrer">
            <s.InstagramIcon />
          </a>
          <a href="https://www.linkedin.com/company/agencia-jussi/" target="_blank" rel="noreferrer">
            <s.LinkdinIcon />
          </a>
        </s.AlignRight>
      </s.Barra>
    </s.Footer>
  )
}

export default Footer