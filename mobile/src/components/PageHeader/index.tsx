import React from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/images/logo.png';
import backIcon from '../../assets/images/icons/back.png';
import favoriteIcon from '../../assets/images/icons/favorite.png';
import profIcon from '../../assets/images/icons/proffys.png';

import styles from './styles';

interface Params {
  title: string,
  amountProffy: number
}

const PageHeader: React.FC<Params> = ({ title, amountProffy, children }) => {

  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate('Landing');
  }

  return (
    <>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image resizeMode="contain" source={backIcon} />
        </BorderlessButton>
        <Text style={styles.titlePage}>Estudar</Text>
        <Image resizeMode="contain" source={logoImg} />
      </View>
      <View style={styles.container}>
        <View style={styles.containerTextIcon}>
          <Text style={styles.title}>
            {title}
          </Text>
          <View style={styles.contentIcon}>
            {
              title.split(" ").indexOf("favoritos") > 0
                ? <Image source={favoriteIcon} />
                : <Image source={profIcon} />
            }
            <Text style={styles.titleIcon}>
              {
                amountProffy > 1
                  ? `${amountProffy} Proffys`
                  : `${amountProffy} Proffy`
              }
            </Text>
          </View>
        </View>
        {children}
      </View>
    </>
  )
}

export default PageHeader;