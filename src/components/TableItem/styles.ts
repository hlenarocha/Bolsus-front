import styled from 'styled-components';

// styles.ts

export const TableLine = styled.tr`
  width: 100%;
  border-bottom: 1px solid rgba(255,255,255,0.2);
  position: relative;

`;

export const TableColumn = styled.td`
  padding: 15px;
  text-align: center;
  vertical-align: middle;
  width: 20%; 
`;

export const Category = styled.div<{color: string}>`
  padding: 5px 10px;
  color: black;
  font-weight: bolder;
  background-color: ${props => props.color};
  border-radius: 5px;
  display: inline-block;
`;

export const Value = styled.div<{color: string}>`
  color: ${props => props.color};
  font-weight: bold;
  white-space: nowrap; 
`;

export const DeleteIcon = styled.img`
  object-fit: cover;
  width: 20px;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  &:hover {
    opacity: 0.5;
  }
`;
