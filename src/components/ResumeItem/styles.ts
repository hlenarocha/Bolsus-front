import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
`;

export const Title = styled.div`
  text-align: center;
  font-weight: bold;
  color: #dcdcdc;
  margin-bottom: 10px;
`;

export const Value = styled.div<{color?: string}>`
  text-align: center;
  font-weight: bold;
  color: ${props => props.color ?? '#fff'};
  font-size: 4vh;
`;