import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.600);
  z-index: 1;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
position: relative;
min-width: 500px;
color: #dcdcdc;
max-width: 600px;
height: 40vh;
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
  font-size: 25px;
  width: 100%;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 2vh;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 15px;
  width: 400px;
  line-height: 1.5;

`;



export const ConfirmButton = styled.button`
  background-color: greenyellow;
  border-radius: 10px;
  height: 40px;
  font-size: 18px;
  font-weight: bold;
  border: 1px solid black;
  width: 80%;
  margin-bottom: 50px;
  cursor: pointer;

  &:hover {
  opacity: 0.2;
  transition: 400ms;
  }
`;

export const Image = styled.img`
object-fit: cover;
margin-top: 30px;
`;