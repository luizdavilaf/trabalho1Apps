import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Cadastro = ({ goTo }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleCadastro = () => {
    goTo('QuizScreen', {nome, email})
  };

  return (
    <View>
      <Text>Cadastro</Text>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={text => setNome(text)}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
};

export default Cadastro;