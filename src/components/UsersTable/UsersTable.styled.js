import styled from "styled-components";
export const Table = styled.table`
  max-width: 800px;
  border-collapse: collapse;
  border: 2px solid black;
`;
export const Th = styled.th`
  padding: 0;
  text-align: center;
  color: black;
  background-color: grey;
  border-right: 1px solid black;
  padding: 10px;
`;
export const Td = styled.td`
  text-align: center;
  color: #696969;
  border-right: 1px solid black;
  padding: 10px;
`;

export const Tr = styled.tr`
  &:nth-child(odd) {
    background-color: #eee;
  }
`;
