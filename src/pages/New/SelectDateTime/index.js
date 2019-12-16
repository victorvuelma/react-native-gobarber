import React from 'react';
import Background from '~/components/Background';

// import { Container } from './styles';

export default function SelectDateTime() {
  return <Background />;
}

SelectDateTime.navigationOptions = ({ navigation }) => ({
  title: 'Selecione o horário',
});
