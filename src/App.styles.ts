import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #29292C;
  height: 100vh;

`;

export const Header = styled.div`
  display: flex;
  background-image: linear-gradient(to bottom, #000000, #161616, #29292C);
  justify-content: center;
  //border-bottom: 1px solid #ffffff;
  box-shadow: inset;
  align-items: center;
  height: 150px;
  width: 100%;
  color: #ffffff;
  flex-direction: column;

`;

export const HeaderTitle = styled.h1`
  font-size: 5vh;
  font-weight: bold;
  border-bottom: 5px solid greenyellow;
  
`;

export const HeaderSubtitle = styled.h2`
  margin-top: 10px;
  color: #dcdcdc;
  font-size: 2vh;
 

`;

export const Body = styled.div`
  margin: auto;
  max-width: 900px;
  min-height: 600px;
  padding: 20px;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  
`;

export const Image = styled.img`
  width: 65px;
  height: 65px;
  object-fit: cover;

`;

export const ImageLogout = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  position: absolute;
  right: 5%;
  cursor: pointer;

`;

export const Greeting = styled.p`
  font-size: 3vh;
  color: white;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 20px;

`;

export const TextInteraction = styled.p`
  font-size: 2.5vh;
  color: #dcdcdc;
  margin-bottom: 20px;
  margin-top: 20px;

`;