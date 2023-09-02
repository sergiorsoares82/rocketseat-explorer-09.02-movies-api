import { styled } from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  main {
    width: 112rem;
    margin: 0 auto;
    padding-bottom: 15.6rem;

    .movie-info {
      display: flex;
      flex-direction: column;
      gap: 4rem;

      .movie-main-heading {
        display: flex;
        align-items: center;
        gap: 2rem;

        .title {
          font-size: 3.6rem;
          color: ${({ theme }) => theme.COLORS.WHITE_1};
          font-weight: 500;
        }

        img {
          width: 2rem;
        }
      }

      .movie-sub-heading {
        display: flex;
        align-items: center;
        gap: 0.8rem;

        color: ${({ theme }) => theme.COLORS.WHITE_1};
        font-size: 1.6rem;
        font-weight: 400;

        img {
          width: 1.6rem;
          height: 1.6rem;
          border-radius: 50%;
        }

        svg {
          color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
        }
      }

      .tags {
        display: flex;
        align-items: center;
        gap: 0.8rem;
      }

      .description {
        color: ${({ theme }) => theme.COLORS.WHITE_1};
        text-align: justify;
        font-weight: 400;
      }
    }
  }
`;
