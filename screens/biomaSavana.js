import { View, Text, ScrollView, Image, Pressable } from 'react-native';
import styles from '../styles'

const Separator = () => <View style={styles.separator} />;

  function BiomaSavanaScreen({navigation}) {
    
      return (
        <View style={{ padding: 20 }}>
          <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image style={styles.figura} source={require('../imagens/savana.jpg')}/>
              <Text>Parque Nacional de Tarangire, na Tanzânia</Text>
            </View>
            <Text> </Text>

            <Text style={styles.paragrafo}>A savana é um bioma que se caracteriza por apresentar altas temperaturas, com chuva durante alguns meses, mas longos períodos de seca. {"\n\n"}Essas características influenciam a vegetação da savana, que tem o seu crescimento limitado em razão dos períodos de seca. Dessa maneira, a vegetação é constituída, principalmente, por gramíneas, arbustos e árvores de pequeno porte.{"\n\n"}</Text>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image style={styles.figura} source={require('../imagens/leao.jpg')}/>
              <Text>Leão</Text>
            </View>
            <Text> </Text>

            <Text style={styles.paragrafo}>A fauna desse bioma é bastante diversificada, composta de animais como leões, gnus, girafas, elefantes, zebras, além de algumas espécies de répteis e diversas espécies de aves e insetos.{"\n"}</Text>

            
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
  export default BiomaSavanaScreen;