import React from 'react';
import { View, ImageBackground, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import giveClassesImage from '../../assets/images/give-classes-background.png'

import PageHeader from '../../components/PageHeader';

import styles from './styles';

const GiveClasses: React.FC = () => {

  function handleNavigateSite() {
    Linking.openURL('https://proffys-nlw.vercel.app/give-classes')
  }

  return (
    <>
      <PageHeader titlePage="Dar aula" />
      <View style={styles.container}>
        <ImageBackground
          resizeMode="contain"
          source={giveClassesImage}
          style={styles.content}
        >
          <Text style={styles.title}>Quer ser um Proffy ?</Text>
          <Text style={styles.description}>
            Para começar, você precisa se cadastrar como professor na nossa plataforma web.
        </Text>
        </ImageBackground>
        <RectButton style={styles.okButton} onPress={handleNavigateSite}>
          <Text style={styles.okButtonText}>Ir para o site</Text>
        </RectButton>
      </View>
    </>
  );
}

export default GiveClasses;