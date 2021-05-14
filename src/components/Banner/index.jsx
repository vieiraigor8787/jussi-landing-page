import React from 'react';
import * as s from './styles';
import imgBanner from '../../img/imageFullbanner.png';

const MainBanner = () => {
  return (
   <s.ContentBanner>
     <s.BannerBlock>
       <s.TextBanner>
        <h1>// Criamos lojas que vendem mais.</h1>
        <p>A Jüssi é especialista na criação de lojas usando a plataforma VTEX. Precisa criar sua loja ou migrar de plataforma?</p>
        <a href="/#">Veja nossas soluções</a>
       </s.TextBanner>
       <s.Images>
          <img src={imgBanner} alt="produtos loja virtual"/>
       </s.Images>
     </s.BannerBlock>
   </s.ContentBanner>
  )
}

export default MainBanner;