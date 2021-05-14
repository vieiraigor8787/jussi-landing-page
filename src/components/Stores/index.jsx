import React from 'react';
import * as s from './styles';

import Brastemp from '../../img/logomarcas/logo-brastemp.png'
import CompraCerta from '../../img/logomarcas/logo-compra-certa.png'
import Consul from '../../img/logomarcas/logo-consul.png'
import Thebar from '../../img/logomarcas/logo-thebar.png'

const Logos = () => {
  return (
    <s.Content>
      <s.Flex>
          <h4>Nossas principais lojas VTEX</h4>
          <span>→</span>
          <s.Images>
            <img src={Brastemp} alt="Brastemp"/> 
            <img src={CompraCerta} alt=""/>
            <img src={Consul} alt=""/>
            <img src={Thebar} alt=""/> 
          </s.Images>
      </s.Flex>
    </s.Content>
  )
}

export default Logos;