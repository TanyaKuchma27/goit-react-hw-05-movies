import styled from '@emotion/styled';

export const Title = styled.h2`
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  margin: -8px;
`;

export const Item = styled.li`
  margin: 8px;
  width: calc((100% - 16 * 8px) / 8);
  text-align: center;
`;

export const Text = styled.p`
  margin: 0;
  padding: 4px;
  text-align: center;
`;