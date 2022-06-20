import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

import foto from './assets/img/profile-photo.jpg';

const urlGithub = 'https://github.com/taiuanascimento';
const urlLinkedin = 'https://www.linkedin.com/in/taiu%C3%A3-nascimento-aaa9a417a/';
const urlInstagram = 'https://www.instagram.com/auiat.ferreira/';

const App = () => {
  const handlePressGoToGithub = async () => {
    const res = await Linking.canOpenURL(urlGithub);
    if (res) {
      console.log('Link aprovado');
      console.log('Abrindo link...');
      await Linking.openURL(urlGithub);
    }
  };

  const handlePressGoToInstagram = async () => {
    const res = await Linking.canOpenURL(urlInstagram);
    if (res) {
      console.log('Link aprovado');
      console.log('Abrindo link...');
      await Linking.openURL(urlInstagram);
    }
  };

  const handlePressGoToLinkedin = async () => {
    const res = await Linking.canOpenURL(urlLinkedin);
    if (res) {
      console.log('Link aprovado');
      console.log('Abrindo link...');
      await Linking.openURL(urlLinkedin);
    }
  };

  return (
    <>
      <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image
            style={style.foto}
            source={foto}
          />
          <Text style={style.nome}>Taiuã Nascimento</Text>
          <Text style={style.funcao}>Desenvolvedor Java | JavaScript</Text>
          <View style={style.icons}>
            <TouchableOpacity onPress={handlePressGoToGithub}>
              <Icon
                name='github'
                size={35}
                color='#009999'
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePressGoToLinkedin}>
              <Icon
                name='linkedin'
                size={35}
                color='#009999'
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePressGoToInstagram}>
              <Icon
                name='instagram'
                size={35}
                color='#009999'
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={style.card}>
          <View style={style.card_header}>
            <Text style={style.card_header_text}>Experiência Profissional</Text>
          </View>
          <View style={style.card_content}>
            <Text style={style.card_content_funcao}>Arquiteto de Soluções Jr.</Text>
            <Text>iLand Soluções</Text>
            <Text>Abril 2019 até o momento</Text>
          </View>
          <View style={style.card_content}>
            <Text style={style.card_content_funcao}>Analista de Suporte de TI</Text>
            <Text>MedAlliance NET Ltda.</Text>
            <Text>04/2014 - 11/2018</Text>
          </View>
        </View>

        <View style={style.card}>
          <View style={style.card_header}>
            <Text style={style.card_header_text}>Formação Acadêmica</Text>
          </View>
          <View style={style.card_content}>
            <Text style={style.card_content_funcao}>Análise e Desenvolvimento de Sistemas</Text>
            <Text>UNINASSAU</Text>
            <Text>2º Período</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#e6ffff',
    flex: 1,
    alignItems: 'center',
  },

  container_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },

  foto: {
    width: 200,
    height: 200,
    borderRadius: 125,
    borderWidth: 4,
    borderColor: 'white',
  },

  nome: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#003333',
  },

  funcao: {
    fontSize: 18,
    color: '#666666',
    marginBottom: 10,
  },

  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '35%',
    marginTop: 10,
    marginBottom: 15,
  },

  card: {
    width: '90%',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#009999',
    marginBottom: 10,
  },

  card_header: {
    height: 40,
    backgroundColor: '#003333',
    alignItems: 'center',
    justifyContent: 'center',
  },

  card_content: {
    borderColor: '#009999',
    padding: 5,
  },

  card_header_text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
  },

  card_content_funcao: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#003333',
  },

  card_content_text: {
    textAlign: 'justify',
    color: '#0d0d0d'
  },
});

export default App;