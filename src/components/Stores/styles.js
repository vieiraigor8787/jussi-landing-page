import styled from 'styled-components';

export const Content = styled.section`
  background-color: var(--color-grey-jussi) ;
`

export const Images = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    @media (max-width: 768px){
        width: 100%;
    }
` 

export const Flex = styled.div`
  max-width: 1440px;
  max-height: 80px;
  margin: 0 auto;
  padding: 20px 120px;
  display: flex;
  justify-content: space-evenly;
 img{ 
     height: 20px;
 }
 img:nth-child(3), img:last-child{ 
    height: 30px;
}
  @media (max-width: 768px){
    padding: 10px 20px;
    flex-direction: column;
    justify-self: center;
    span { 
        display: none;
    }
    h4{
        text-align: center;
        margin-bottom: 10px;
    }
    img {
        height: 18px!important;
        width: 80px;
    }

}
  `