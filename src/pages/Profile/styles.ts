import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  > header {
    height: 144px;
    background: #28262e;

    display: flex;
    align-items: center;

    div {
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;

      svg {
        color: #999591;
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: -176px auto 0;

  width: 100%;

  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    margin: 5rem 0;
    width: 21.25rem;
    text-align: center;
    display: flex;
    flex-direction: column;

    h1 {
      margin-bottom: 1.5rem;
      font-size: 1.25rem;
      text-align: left;
    }

    > button {
      background: #ff9000;
      height: 3.5rem;
      border-radius: 0.6rem;
      border: 0;
      padding: 0 1rem;
      color: #312e38;
      width: 100%;
      font-weight: 500;
      margin-top: 1rem;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#ff9000')};
      }
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 1.5rem;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
`;

export const AvatarInput = styled.div`
  margin-bottom: 2rem;
  position: relative;
  align-self: center;

  input {
    display: none;
  }

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  label {
    position: absolute;
    width: 3rem;
    height: 3rem;
    background: #ff9000;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border: 0;
    cursor: pointer;
    transition: background-color 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 1.25rem;
      height: 1.25rem;
      color: #312e38;
    }

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }
`;
