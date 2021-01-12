import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  background-color: #ff9000;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  height: 56px;
  color: #312e38;
  width: 100%;
  font-weight: 600;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
