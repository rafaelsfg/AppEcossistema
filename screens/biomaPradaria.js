import { View, Text, ScrollView, Image, Pressable } from 'react-native';
import styles from '../styles'

const Separator = () => <View style={styles.separator} />;

  function BiomaPradariaScreen({navigation}) {
    
      return (
        <View style={{ padding: 20 }}>
          <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image style={styles.figura} source={require('../imagens/pradaria.jpg')}/>
              <Text>Pradaria no estado do Kansas, nos Estados Unidos</Text>
            </View>
            <Text> </Text>

            <Text style={styles.paragrafo}>Na pradaria, em geral, as temperaturas são baixas durante o inverno e altas durante o verão. As chuvas são moderadas, com seca durante alguns períodos do ano. {"\n\n"}A vegetação desse bioma é constituída principalmente por gramíneas e arbustos capazes de suportar períodos de seca.{"\n\n"}</Text>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image style={styles.figura} source={require('../imagens/cao_da_pradaria.jpg')}/>
              <Text>Cão-da-pradaria</Text>
            </View>
            <Text> </Text>

            <Text style={styles.paragrafo}>A fauna é composta de diversos insetos, lobos, raposas, coiotes e roedores.{"\n"}</Text>

            
            <Separator />

            <Text> </Text>

            <View style={styles.containerBotao}>

            <Pressable style={styles.botaoNav2} onPress={() => navigation.navigate('Ecossistema Terrestre')}>
              <View style={styles.botaoNavView}>
                <View>
                  <Image style={styles.icone} source={require('../imagens/iconeTerrestre.png')}/>
                </View>
                <View>
                  <Text style={styles.textoBotNav}>Voltar para Ecossistema Terrestre</Text>
                </View>
              </View>
            </Pressable> 
           
            <Text> </Text>

            <Pressable style={styles.botaoNav2} onPress={() => navigation.navigate('Ecossistema')}>
              <View style={styles.botaoNavView}>
                <View>
                  <Image style={styles.icone} source={require('../imagens/iconeEcossistema.png')}/>
                </View>
                <View>
                  <Text style={styles.textoBotNav}>Voltar para Ecossistema</Text>
                </View>
              </View>
            </Pressable> 
           
            <Text> </Text>

            <Pressable style={styles.botaoNav2} onPress={() => navigation.navigate('Apresentação')}>
              <View style={styles.botaoNavView}>
                <View>
                  <Image style={styles.icone} source={require('../imagens/iconeHome.png')}/>
                </View>
                <View>
                  <Text style={styles.textoBotNav}>Voltar para o Início</Text>
                </View>
              </View>
            </Pressable>                            
            </View>

          </ScrollView>
        </View>
      );
  }
  export default BiomaPradariaScreen;