import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height:80px;
    padding: 20px 0;
    @media (max-width:768px){
        height: auto;
        max-height: 400px;
    }

`;

export const Logo = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const Menu = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 50%;
    p:hover{
      color: var(--color-pink-jussi)
    }
  a {
      color: var(--color-black-jussi);
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const AlignLeft = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  width: 40%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const AlignRight = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  width: 30%;
  a:hover{
    color: var(--color-pink-jussi)
  }
  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-end;
  }
    a{
        @media (max-width: 768px) {
        position: absolute;
        top: 1em;
        right: 3em;
        }
    }
    img{
        @media (max-width: 768px) {
        position: absolute;
        top: 1em;
        right: 1em;
        }
    }
`;

export const BarraTopo = styled.div`
  max-width: 1440px;
  width: 100%;
  height: auto;
  padding: 0 10px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;

export const SearchBar = styled.div`
  width: 240px;
  form{
    position: relative;
    width: 100%;
  }
  input#search{
    border: 1px solid var(--color-grey-jussi);
    border-radius: 24px;
    padding: 10px;
    width: 100%;
    &::placeholder{
      color: var(--color-pink-jussi);
    }
  }
  button{
    position: absolute;
    right: 0;
    top: 7px;
    border: none;
    background: none;
    cursor: pointer;
  }
  button img {
    padding: 0 20px;
  }
  @media (max-width: 768px){
    width: 100%;
    padding: 10px 0;
  }
`