import styled from "styled-components";

export const Table = styled.table`
  color: white;
  background-color: #161616;
  padding: 10px;
  border: 1px solid white;
  border-radius: 20px;
  margin-top: 20px;
  font-weight: bold;
  width: 62.5%;
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  max-height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const TableHeadColumn = styled.th`
  margin-top: 20px;
  margin-bottom: 20px;
  color: #dcdcdc;
  font-size: 20px;
  
`; 