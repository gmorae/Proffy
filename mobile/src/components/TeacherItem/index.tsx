import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import api from '../../services/api';

import styles from './styles';

export interface Teacher {
  id: number,
  name: string,
  subject: string,
  bio: string,
  cost: number,
  whatsapp: string,
  avatar: string
}

interface Params {
  teacher: Teacher,
  favorite: boolean;
}

const TeacherItem: React.FC<Params> = ({ teacher, favorite }) => {

  const [isFavorite, setIsFavorite] = useState(favorite)

  function handleToWhatsapp() {
    api.post('connections', {
      user_id: teacher.id
    })
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
  }

  async function handleToggleFavorites() {
    const favorites = await AsyncStorage.getItem('favorites');

    let favoritesArray = new Array;

    if (favorites) favoritesArray = JSON.parse(favorites);

    if (isFavorite) {
      const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => teacherItem.id === teacher.id);
      favoritesArray.splice(favoriteIndex, 1)
      setIsFavorite(false);
    } else {
      favoritesArray.push(teacher);
      setIsFavorite(true);
    }
    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          source={{ uri: teacher.avatar }}
          style={styles.avatar}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>
      <Text style={styles.bio}>{teacher.bio}</Text>

      <View style={styles.footer}>

        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>
            {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(teacher.cost)}
          </Text>
        </Text>

        <View style={styles.buttonsContainer}>

          <RectButton
            onPress={handleToggleFavorites}
            style={[styles.favoriteButton, isFavorite && styles.favorite]}
          >
            {isFavorite
              ? <Image source={unFavoriteIcon} />
              : <Image source={heartOutlineIcon} />
            }
          </RectButton>

          <RectButton onPress={handleToWhatsapp} style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contentButtonText}>Entrar em contato</Text>
          </RectButton>

        </View>
      </View>
    </View>
  )
}

export default TeacherItem;