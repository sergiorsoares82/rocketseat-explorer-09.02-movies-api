import { styled } from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: grid;
  grid-template-areas: 'header' 'page';

  main {
    grid-area: page;
    width: 112rem;
    margin: 0 auto;

    .heading {
      margin: 5rem 0;
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        color: ${({ theme }) => theme.COLORS.WHITE_1};
        font-size: 3.2rem;
        font-weight: 400;
      }

      a {
        width: 20rem;
        height: 4.8rem;
        border: none;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        background: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.8rem;
      }
    }

    .cards {
      overflow-y: auto;
      max-height: 55vh;
    }
  }
`;
