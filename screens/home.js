import { View, Text, Button, ImageBackground, Pressable } from 'react-native';
import styles from '../styles'

function HomeScreen({navigation}) {
      return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={require('../imagens/imagemFundo.jpg')} resizeMode="cover" style={styles.imagemFundo}>
          
          <Text style={{fontSize: 40, color: 'white', fontWeight: "bold"}}>Seja bem vindo!</Text>
          
          <Text style={{fontSize: 28, textAlign: 'center', padding: 20, color: 'white',}}>{"\n"}Vamos estudar sobre <Text style={{fontWeight: "bold"}}>Ecossistemas</Text> e seus componentes. {"\n\n"}Toque no botão abaixo para começar.</Text>
         
          <Pressable style={styles.botaoFechar} onPress={() => navigation.navigate('Ecossistema')}>
            <Text style={styles.textoIniciar}>  INICIAR  </Text>
          </Pressable>
        
        
          <Text>{"\n\n\n"}</Text>
        
          <Button color='green' title='Sobre' onPress={() => navigation.navigate('Sobre')} />
        
        </ImageBackground>
      </View>
      );
 }

 export default HomeScreen;