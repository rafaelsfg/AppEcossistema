import {useState} from 'react';
import { View, Text, ScrollView, Image, Modal, Pressable } from 'react-native';
import styles from '../styles'

const Separator = () => <View style={styles.separator} />;

  function BiomaTundraScreen({navigation}) {
    const [modalLiquen, setModalLiquen] = useState(false);

      return (
        <View style={{ padding: 20 }}>
          <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image style={styles.figura} source={require('../imagens/tundra.jpg')}/>
              <Text>Iqaluit, capital de Nunavut no Canadá</Text>
            </View>
            <Text> </Text>

            <Modal animationType="slide" transparent={true}  visible={modalLiquen}>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 22}}>
                <View style={styles.modalView}>
                  <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={styles.figuraModal} source={require('../imagens/liquen.jpg')}/>
                    <Text>Liquen folioso</Text>
                  </View>
                  <Text style={styles.paragrafo}>{"\n"}Um liquen ou fungo liquenizado é um organismo composto que vivem entre algas verdes e fungos ou entre cianobactérias e fungos, em uma relação harmônica.{"\n"}</Text>
                  <Pressable style={styles.botaoFechar} onPress={() => setModalLiquen(!modalLiquen)}>
                    <Text style={styles.textoFechar}>Fechar</Text>
                  </Pressable>
                </View>  
              </View>
            </Modal>

            <Text style={styles.paragrafo}>A tundra é um bioma que se localiza próximo à calota polar ártica, onde as temperaturas são baixas e a chuva é escassa. Dessa maneira, o solo permanece coberto por neve e congelado durante quase todo o ano. {"\n\n"}No verão, a camada mais superficial descongela, o que contribui para o solo permanecer bastante úmido, o que favorece o crescimento de <Text style={styles.link} onPress={() => setModalLiquen(true)}>liquens</Text> e de plantas como gramíneas e musgos. {"\n\n"}Além dessas plantas, a vegetação da tundra também é formada por pequenos arbustos em regiões mais secas. O crescimento da maioria dessas plantas ocorre durante o curto tempo de verão.{"\n\n"}</Text>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image style={styles.figura} source={require('../imagens/urso_polar.jpg')}/>
              <Text>Urso polar</Text>
            </View>
            <Text> </Text>

            <Text style={styles.paragrafo}>A fauna é composta de mamíferos, como o urso-polar e o almiscareiro, que possuem uma espessa camada de pelos e de gordura para resistir às baixas temperaturas desse bioma. Na tundra também há aves, como a coruja-da-neve, aves aquáticas e insetos.{"\n"}</Text>

            
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
  export default BiomaTundraScreen;