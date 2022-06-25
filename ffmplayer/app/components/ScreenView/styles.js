import react from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import dark from '../../theme/dark';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => dark.COLOR.BACKGROUND};
`;
