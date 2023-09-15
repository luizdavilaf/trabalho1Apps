import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Cadastro from './src/screens/Cadastro';
import QuizScreen from './src/screens/QuizScreen';
import FinalScreen from './src/screens/FinalScreen';

const App = () => {
  const [activeScreen, setActiveScreen] = useState('Cadastro')
  const [userData, setUserData] = useState({ nome: '', email: '', pontuacao: 0 });
  

  const goTo = (screenName, data) => {
    setActiveScreen(screenName);
    if (data.nome || data.email || data.pontuacao) {
      setUserData({ ...userData, ...data });
    }
   
  };
  return (
    <View style={styles.container}>
      {activeScreen === 'Cadastro' && (<Cadastro goTo={goTo} />)}
      {activeScreen === 'QuizScreen' && <View><QuizScreen goTo={goTo} /></View>}
      {activeScreen === 'FinalScreen' && <View><FinalScreen userData={userData} /></View>}
    </View>

  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
