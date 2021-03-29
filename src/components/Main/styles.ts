import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #fff;
  color: #fff;
  width: 100%;
  height: 100%;
  /* padding: 3rem; */
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Button = styled.a`
  background-color: #4a6da7;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  width: 80%;
  height: 70px;
  max-width: 1000px;
  cursor: pointer;
  transition: 200ms;
  color: #fff;
  text-decoration: none;

  :hover {
    transition: 200ms;
    background-color: #3a5684;
  }

  @media (max-width: 500px) {
    width: 95%;
  }

  /* @media (max-width: 400px) {
    width: 100%;
  } */
`

export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`
