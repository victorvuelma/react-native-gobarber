import React, { useState, useMemo } from 'react';
import { Platform } from 'react-native';
import PropTypes from 'prop-types';

import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, DateButton, DateText, Picker } from './styles';

export default function DateInput({ date, onChange }) {
  const [opened, setOpened] = useState(false);

  const dateFormatted = useMemo(() => {
    return format(date, "dd 'de' MMMM 'de' yyyy", {
      locale: ptBR,
    });
  }, [date]);

  async function handleDateChange(event, newDate) {
    setOpened(Platform.OS === 'ios');
    onChange(newDate || date);
  }

  return (
    <Container>
      <DateButton
        onPress={() => {
          console.tron.log('yey');
          setOpened(!opened);
        }}
      >
        <Icon name="event" color="#fff" size={20} />
        <DateText>{dateFormatted}</DateText>
      </DateButton>

      {opened && (
        <Picker>
          <DateTimePicker
            value={date}
            onChange={handleDateChange}
            minimumDate={new Date()}
            minuteInterval={60}
            locale="pt-BR"
            mode="date"
            display="spinner"
          />
        </Picker>
      )}
    </Container>
  );
}

DateInput.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onChange: PropTypes.func.isRequired,
};
