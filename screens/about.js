 import { View, Text, Button } from 'react-native';
 import styles from '../styles'

 function AboutScreen({navigation}) {
     return (
     <View style={{ flex: 1, padding: 20, }}>
        <Text style={{fontSize: 18}}>Este aplicativo é resultado do trabalho de extensão do curso de Sistemas de informação da Universidade Estácio de Sá.{"\n\n"}</Text>
        <Text style={{fontSize: 18}}><Text style={{fontWeight: "bold"}}>Autor:</Text> Rafael Andrade. {"\n"}<Text style={{fontWeight: "bold"}}>Referências:</Text>{"\n"} - https://pt.wikipedia.org/{"\n"} - MICHELAN, V.; ANDRADE, E. SuperAÇÃO! Ciências: 7º ano. 1. ed. São Paulo: Moderna, 2022. {"\n\n"} <Text style={{fontWeight: "bold"}}>Imagens:</Text> https://pt.wikipedia.org/</Text>

        <View style={styles.botao}>
          <Button title='Voltar para a tela inicial' onPress={() => navigation.navigate('Apresentação')} />
        </View>
     </View>
     );
 }

 export default AboutScreen;