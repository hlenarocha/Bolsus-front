import styled from "styled-components";

export const Container = styled.div`
  background-color: #161616;
  border: 1px solid white;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  flex-direction: row;
  flex: 1;
  

`;

export const Image = styled.img`
  cursor: pointer;
`;

export const Title = styled.p`
  font-weight: bold;
  color: #dcdcdc;
  font-size: 20px;
`;

export const Subtitle = styled.p`
    color: #dcdcdc;
    margin-top: 5px;

`;

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;

`;
