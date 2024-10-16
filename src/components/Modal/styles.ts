import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.600);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
min-width: 500px;
color: #dcdcdc;
max-width: 600px;
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
  font-size: 25px;
  width: 100%;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 2vh;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px;

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

export const Select = styled.select`
width: 80%;
height: 40px;
border-radius: 10px;
border: 1px solid white;
background-color: #29292c;
color: whitesmoke;
margin-bottom: 20px;
padding: 0px 10px;
`

export const Option = styled.option`
padding: 10px;
color: whitesmoke;
`;
