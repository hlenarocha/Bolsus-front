import styled from "styled-components";

export const Container = styled.div`
  background-color: #161616;
  border: 1px solid white;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;

export const ContainerInfo = styled.div`
  width: 100%;  
  
`;

export const ContainerSaldo = styled.div`
  border: 1px solid white;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;

export const ContainerReceitasDespesas = styled.div`
  display: flex;
  width: 120vh;
  justify-content: space-between;
  margin-right: 2vh;
`;


export const ContainerResume = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 20px;
  height: 15vh;
`;

export const MonthArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  

`;


export const MonthArrow = styled.div`
  cursor: pointer;
  width: 40px;
  text-align: center;
  font-size: 25px;
  color: greenyellow;

`;

export const MonthTitle = styled.div`
  flex: 1;
  text-align: center;
  color: #dcdcdc;
  font-weight: bold;

`;
