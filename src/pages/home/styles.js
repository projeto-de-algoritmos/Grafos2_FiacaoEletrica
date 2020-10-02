import styled from 'styled-components';
import { darken } from 'polished';
export const Container = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #7159c1, #335bff);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  button {
    margin: 5px 0 0;
    height: 44px;
    padding: 0 15px;
    background: #3b9eff;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#3b9eff')};
    }
  }
`;
export const Text = styled.p`
  margin-bottom: 20px;
  font-size: 16px;
  color: #fff;
  padding: 4px;
  text-align: center;
`;
export const Text0 = styled.p`
  margin-bottom: 80px;
  font-size: 30px;
  color: #fff;
  padding: 4px;
  text-align: center;
`;


export const Text2 = styled.p`
  margin-top: 10px;
  font-size: 30px;
  color: #fff;
  padding: 4px;
  text-align: center;
`;
export const Custo = styled.p`
  margin-top: 10px;
  font-size: 50px;
  color: #fff;
  padding: 4px;
  text-align: center;
`;
