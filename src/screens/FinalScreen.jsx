import React, { useState, useEffect } from "react";
import { View, Text, Button, CheckBox } from "react-native";

const FinalScreen = ({ userData }) => {

  useEffect(() => {
    console.log("Pontuação atual:", pontuacao);
  }, [pontuacao]);
  const { nome, email, pontuacao } = userData;
  return (
    <View>
      <Text>O Quiz foi completado!</Text>
      <Text>Nome: {nome}</Text> 
      <Text>Email: {email}</Text> 
      <Text>Nota Final: {pontuacao}</Text> 
    </View>
  );
};

export default FinalScreen;
