import styled from 'styled-components';

export const TableLine = styled.tr`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
width: 100%;
border-bottom: 1px solid rgba(255,255,255,0.2);

`;

export const TableColumn = styled.td`
  padding: 20px;
  
`;

export const Category = styled.div<{color: string}>`
  display: inline-block;
  padding: 5px 10px;
  color: white;
  background-color: ${props => props.color};
  border-radius: 5px;
  
`;

export const Value = styled.div<{color: string}>`
  color: ${props => props.color};
`;