import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import imgFundo from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;
const appearFromLeft = keyframes`
  from {
    opacity:0;
    transform: translatex(-50px);
  }
  to {
    opacity:1;
    transform: translatex(0);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  justify-content: center;
  width: 60%;
  max-width: 700px;
  img {
    margin-top: 30px;
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  justify-content: center;
  align-items: center;
  animation: ${appearFromLeft} 1s;
  form {
    margin: 50px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }
    a {
      color: #fff;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.2, '#fff')};
      }
    }
  }
  > a {
    color: #ff9000;
    display: block;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;
    margin-top: -20px;
    svg {
      margin-right: 16px;
    }
    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${imgFundo}) no-repeat center;
  background-size: cover;
`;
