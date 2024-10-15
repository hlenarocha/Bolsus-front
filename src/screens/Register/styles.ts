import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const Box = styled.div`
min-width: 500px;
max-width: 700px;
height: 70vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
border: 1px solid white;
border-radius: 10px;
padding: 20px;
background-image: -moz-linear-gradient(to bottom, black, #29292c);

`;

export const Title = styled.p`
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 25px;
  width: 100%;
  font-weight: bold;
  color: #dcdcdc;
  width: 300px;
`;

export const Subtitle = styled.h2`
  color: #dcdcdc;
  font-size: 2vh;
  width: 400px;
  text-align: center;
  margin-top: 20px;
`;


export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;

`;

export const HeaderTitle = styled.h1`
  font-size: 5vh;
  font-weight: bold;
  border-bottom: 5px solid greenyellow;
  color: white;
  
`;

export const Input = styled.input`
width: 80%;
height: 40px;
border-radius: 10px;
border: 1px solid white;
background-color: #29292c;
padding: 10px;
color: whitesmoke;
margin-bottom: 20px;
`;

export const Button = styled.button`
  background-color: greenyellow;
  border-radius: 10px;
  height: 40px;
  font-size: 18px;
  font-weight: bold;
  border: 1px solid black;
  width: 80%;
  margin-bottom: 50px;

`;

export const RegisterText = styled.p`
color: #dcdcdc;
text-align: center;
line-height: 1.5;
`;

export const InputBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;

`;
