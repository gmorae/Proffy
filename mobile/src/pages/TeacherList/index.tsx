import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';

const TeacherList: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [subject, setSubject] = useState('');
  const [week_day, setWeek_day] = useState('');
  const [time, setTime] = useState('');

  const [teachers, setTeachers] = useState([])
  const [favorites, setFavorites] = useState<number[]>([]);

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritesTeachers = JSON.parse(response);
        const favoritesTeachersIds = favoritesTeachers.map((teacher: Teacher) => teacher.id);

        setFavorites(favoritesTeachersIds);
      }
    })
  }

  function handleToggleFiltersVisible() {
    setIsVisible(!isVisible)
  }

  function handleFiltersSubmit() {
    loadFavorites();

    api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    }).then(response => {
      setIsVisible(false)
      setTeachers(response.data)
    })
  }

  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis" amountProffy={32}>
        <TouchableOpacity style={styles.filter} onPress={handleToggleFiltersVisible}>
          <View style={styles.buttonFilter}>
            <Icon name="filter" color="#04D361" size={20} />
            <Text style={styles.textFilter}>Filtrar por dia, hora e matéria</Text>
          </View>
          {
            isVisible
              ? <Icon name="chevron-up" color="#A380F6" size={16} />
              : <Icon name="chevron-down" color="#A380F6" size={16} />
          }
        </TouchableOpacity>
        {isVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              value={subject}
              onChangeText={text => setSubject(text)}
              placeholderTextColor="#c1bccc"
              style={styles.input}
              placeholder="Qual a matéria?"
            />
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Qual o dia da semana ?</Text>
                <TextInput
                  value={week_day}
                  onChangeText={text => setWeek_day(text)}
                  placeholderTextColor="#c1bccc"
                  style={styles.input}
                  placeholder="Qual o dia?"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Qual o dia da horário ?</Text>
                <TextInput
                  value={time}
                  onChangeText={text => setTime(text)}
                  placeholderTextColor="#c1bccc"
                  style={styles.input}
                  placeholder="Qual o horário?"
                />
              </View>
            </View>
            <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        {teachers.map((teacher: Teacher, index) => (
          <TeacherItem
            key={index}
            teacher={teacher}
            favorite={favorites.includes(teacher.id)}
          />
        ))}
      </ScrollView>
      <View style={styles.messageList}>
        {teachers.length > 0
          ? <Text style={styles.messageListText}>Estes são todos os resultados</Text>
          : <Text style={styles.messageListText}>Nenhum professor encontrado {'\n'} com sua pesquisa.</Text>
        }
      </View>
    </View>
  );
}

export default TeacherList;