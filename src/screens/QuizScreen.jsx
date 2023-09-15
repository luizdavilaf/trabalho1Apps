import React, { useState, useEffect } from "react";
import { View, Text, Button, CheckBox } from "react-native";

const Quiz = ({ goTo }) => {
  const perguntas = [
    {
      pergunta: "Qual é a capital da França?",
      opcoes: ["Londres", "Berlim", "Paris"],
      respostaCorreta: "Paris",
    },
    {
      pergunta: "Qual é a capital do Brasil?",
      opcoes: ["São Paulo", "Rio de Janeiro", "Brasília"],
      respostaCorreta: "Brasília",
    },
    {
      pergunta: "Qual é a capital do Japão?",
      opcoes: ["Tóquio", "Kyoto", "Osaka"],
      respostaCorreta: "Tóquio",
    },
    {
      pergunta: "Qual é a capital da Rússia?",
      opcoes: ["Moscou", "São Petersburgo", "Kiev"],
      respostaCorreta: "Moscou",
    },
    {
      pergunta: "Qual é a capital da Austrália?",
      opcoes: ["Sydney", "Melbourne", "Canberra"],
      respostaCorreta: "Canberra",
    },
  ];

  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [pontuacao, setPontuacao] = useState(0);

  useEffect(() => {
    console.log("Pontuação atual:", pontuacao);
  }, [pontuacao]);

  const handleResponder = () => {
    console.log(respostaSelecionada);
    if (respostaSelecionada === perguntas[perguntaAtual].respostaCorreta) {
      setPontuacao(pontuacao + 1);
      console.log("Correto!");
    } else {
      console.log("Errado! Pontuaçao: ", pontuacao);
    }

    if (perguntaAtual < perguntas.length - 1) {
      setPerguntaAtual(perguntaAtual + 1);
      setRespostaSelecionada(null);
    } else {
      const novaPontuacao =
        respostaSelecionada === perguntas[perguntaAtual].respostaCorreta
          ? pontuacao + 1
          : pontuacao;
      setPontuacao(novaPontuacao);
      console.log(novaPontuacao);
      goTo("FinalScreen", { pontuacao: novaPontuacao });
    }
  };

  return (
    <View>
      <Text>Pontuacao {pontuacao}</Text>
      <Text>Pergunta {perguntaAtual + 1}</Text>
      <Text>{perguntas[perguntaAtual].pergunta}</Text>

      {perguntas[perguntaAtual].opcoes.map((opcao, index) => (
        <View
          key={index}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <CheckBox
            value={opcao === respostaSelecionada}
            onValueChange={(newValue) => {
              setRespostaSelecionada(newValue ? opcao : null);
            }}
          />
          <Text>{opcao}</Text>
        </View>
      ))}

      <Button title="Responder" onPress={handleResponder} />
    </View>
  );
};

export default Quiz;
