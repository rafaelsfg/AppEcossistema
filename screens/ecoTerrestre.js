import {useState} from 'react';
import { View, Text, ScrollView, Image, Modal, Pressable } from 'react-native';
import styles from '../styles'

const Separator = () => <View style={styles.separator} />;

  function EcoTerrestreScreen({navigation}) {

      const [modalPrecipitacao, setModalPrecipitacao] = useState(false);

      return (
        <View style={{ padding: 20 }}>
          <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image style={styles.figura} source={require('../imagens/bioma_terrestre.jpg')}/>
              <Text>Bioma de Savana</Text>
            </View>
            <Text> </Text>

            <Modal animationType="slide" transparent={true}  visible={modalPrecipitacao}>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 22}}>
                <View style={styles.modalView}>
                  <Text style={styles.paragrafo}>Precipitação, neste caso, refere-se à quantidade de chuva que cai durante um período.{"\n"}</Text>
                  <Pressable style={styles.botaoFechar} onPress={() => setModalPrecipitacao(!modalPrecipitacao)}>
                    <Text style={styles.textoFechar}>Fechar</Text>
                  </Pressable>
                </View>  
              </View>
            </Modal>
            <Text style={styles.paragrafo}>Os ecossistemas terrestres, assim como os aquáticos, apresentam diferentes características e sofrem influência de vários fatores abióticos, como temperatura, luminosidade, <Text style={styles.link} onPress={() => setModalPrecipitacao(true)}>precipitação</Text> e tipo de solo.{"\n\n"}Alguns ecossistemas terrestres apresentam características semelhantes, como o tipo de vegetação e o clima predominante, em uma grande dimensão regional.{"\n\n"}O conjunto desses ecossistemas com características semelhantes forma um <Text style={{fontWeight: "bold"}}>bioma</Text>.{"\n\n"}De maneira geral, os biomas apresentam <Text style={{fontWeight: "bold"}}>fauna</Text> (animais) e <Text style={{fontWeight: "bold"}}>flora</Text> (vegetais) distintas, dependendo da localização desses biomas e dos fatores abióticos presentes neles.{"\n\n"}Toque em um dos biomas abaixo para conhecermos as suas principais características:{"\n"}</Text>
            
            <View style={styles.containerBotao}>
            <Pressable style={styles.botaoNav} onPress={() => navigation.navigate('Floresta Tropical')}>
              <View style={styles.botaoNavView}>
                <View>
                  <Image style={styles.icone} source={require('../imagens/iconeFlorestaTropical.png')}/>
                </View>
                <View>
                  <Text style={styles.textoBotNav}>Floresta Tropical</Text>
                </View>
              </View>
            </Pressable>

            <Text> </Text>

            <Pressable style={styles.botaoNav} onPress={() => navigation.navigate('Floresta Temperada')}>
              <View style={styles.botaoNavView}>
                <View>
                  <Image style={styles.icone} source={require('../imagens/iconeFlorestaTemperada.png')}/>
                </View>
                <View>
                  <Text style={styles.textoBotNav}>Floresta Temperada</Text>
                </View>
              </View>
            </Pressable>
            
            <Text> </Text>

            <Pressable style={styles.botaoNav} onPress={() => navigation.navigate('Taiga')}>
              <View style={styles.botaoNavView}>
                <View>
                  <Image style={styles.icone} source={require('../imagens/iconeTaiga.png')}/>
                </View>
                <View>
                  <Text style={styles.textoBotNav}>Taiga</Text>
                </View>
              </View>
            </Pressable>

            <Text> </Text>

            <Pressable style={styles.botaoNav} onPress={() => navigation.navigate('Tundra')}>
              <View style={styles.botaoNavView}>
                <View>
                  <Image style={styles.icone} source={require('../imagens/iconeTundra.png')}/>
                </View>
                <View>
                  <Text style={styles.textoBotNav}>Tundra</Text>
                </View>
              </View>
            </Pressable>
            
            <Text> </Text>

            <Pressable style={styles.botaoNav} onPress={() => navigation.navigate('Deserto')}>
              <View style={styles.botaoNavView}>
                <View>
                  <Image style={styles.icone} source={require('../imagens/iconeDeserto.png')}/>
                </View>
                <View>
                  <Text style={styles.textoBotNav}>Deserto</Text>
                </View>
              </View>
            </Pressable>
           
            <Text> </Text>

            <Pressable style={styles.botaoNav} onPress={() => navigation.navigate('Savana')}>
              <View style={styles.botaoNavView}>
                <View>
                  <Image style={styles.icone} source={require('../imagens/iconeSavana.png')}/>
                </View>
                <View>
                  <Text style={styles.textoBotNav}>Savana</Text>
                </View>
              </View>
            </Pressable>
            
            <Text> </Text>

            <Pressable style={styles.botaoNav} onPress={() => navigation.navigate('Pradaria')}>
              <View style={styles.botaoNavView}>
                <View>
                  <Image style={styles.icone} source={require('../imagens/iconePradaria.png')}/>
                </View>
                <View>
                  <Text style={styles.textoBotNav}>Pradaria</Text>
                </View>
              </View>
            </Pressable>
            
            </View>

            <Text> </Text>
        
            <Separator />

            <Text> </Text>

            <View style={styles.containerBotao}>  
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

 export default EcoTerrestreScreen;
