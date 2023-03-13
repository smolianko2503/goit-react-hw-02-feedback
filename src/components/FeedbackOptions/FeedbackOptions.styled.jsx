import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 4px;
  gap: 10px;
  borger: 1 px solid black;
  background-color: white;
  :hover {
    border-color: #06f;
    color: #06f;
    fill: #06f;
  }
`;

export const ButtonsSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 24px;
`;
