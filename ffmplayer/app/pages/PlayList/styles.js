import react from "react";
import styled from "styled-components/native";
import dark from '../../theme/dark';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => dark.COLOR.BACKGROUND};
`;

