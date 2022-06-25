import react from 'react';
import styled from 'styled-components/native';
import dark from '../../theme/dark';

export const ModalScreen = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: ${props => dark.COLOR.TRANSPARENCY};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 5px;
  z-index: 1000;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  padding: 20px;
  padding-bottom: 0;
  color: ${props => dark.COLOR.FONT_400};
`;

export const OptionsContainer = styled.View`
  padding: 20px;
`;

export const Options = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${props => dark.COLOR.FONT_300};
  padding-top: 10px;
  letter-spacing: 1px;
`;

export const ModalBg = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => dark.COLOR.MODAL_BG};
`;
