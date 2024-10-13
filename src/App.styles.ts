import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  background-color: #292929;
  align-items: center;
  height: 200px;
  width: 100%;
  color: #ffffff;
  flex-direction: column;

`;

export const HeaderTitle = styled.h1`
  margin-bottom: 40px;
  
`;

export const HeaderSubtitle = styled.h2`

`;

export const Body = styled.div`
  margin: auto;
  max-width: 900px;
  min-height: 600px;
  padding: 20px;
`;