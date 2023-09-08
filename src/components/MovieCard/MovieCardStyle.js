import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 22rem;
  padding: 3.2rem;
  background: rgba(255, 133, 155, 0.05);
  border-radius: 1.6rem;

  margin-bottom: 2.4rem;

  cursor: pointer;

  .title {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.WHITE_1};
    margin-bottom: 0.8rem;
  }

  .summary {
    margin-top: 1.5rem;
    margin-bottom: 2rem;
    height: 5.2rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3; /* start showing ellipsis when 2nd line is reached */
    /* white-space: pre-wrap; let the text wrap preserving spaces */

    color: #999591;
    text-overflow: ellipsis;
    /* white-space: nowrap;
    line-clamp: 2; */
    font-size: 1.4rem;
    line-height: 1.3;
    font-family: 'Roboto', sans-serif;
  }
`;
