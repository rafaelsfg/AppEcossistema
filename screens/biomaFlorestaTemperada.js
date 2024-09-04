import {useState} from 'react';
import { View, Text, ScrollView, Image, Modal, Pressable } from 'react-native';
import styles from '../styles'

const Separator = () => <View style={styles.separator} />;

  function BiomaFlorestaTemperadaScreen({navigation}) {
    const [modalHerbacia, setModalHerbacia] = useState(false);

      return (
        <View style={{ padding: 20 }}>
          <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image style={styles.figura} source={require('../imagens/floresta_temperada.jpg')}/>
              <Text>Floresta Temperada</Text>
            </View>
            
            <Modal animationType="slide" transparent={true}  visible={modalHerbacia}>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 22}}>
                <View style={styles.modalView}>
                  <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={styles.figuraModal} source={require('../imagens/oregano.jpg')}/>
                    <Text>Orégano, erva utilizada como condimento</Text>
                  </View>
                  <Text style={styles.paragrafo}>{"\n"}Ervas, ou plantas herbáceas, são plantas geralmente de pequeno porte e caule macio ou flexível.{"\n"}</Text>
                  <Pressable style={styles.botaoFechar} onPress={() => setModalHerbacia(!modalHerbacia)}>
                    <Text style={styles.textoFechar}>Fechar</Text>
                  </Pressable>
                </View>  
              </View>
            </Modal>

            <Text style={styles.paragrafo}>{"\n"}Na floresta Temperada, as estações do ano são bem definidas, com invernos de temperaturas muito baixas. Nesse bioma, apesar de serem menos abundantes do que nas florestas tropicais, as chuvas são relativamente frequentes. {"\n\n"}A vegetação é formada por <Text style={styles.link} onPress={() => setModalHerbacia(true)}>plantas herbáceas</Text>, arbustos e por árvores que perdem suas folhas no fim do outono, as quais voltam a nascer na primavera. {"\n\n"}Tal característica é essencial para a sobrevivência das plantas, porque, em épocas de baixa temperatura, a maior parte da água disponível no ambiente encontra-se congelada no solo. Assim, ao perder as folhas, essas plantas evitam a perda de água por transpiração e conservam água em estado líquido em seu interior. {"\n\n"}</Text>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image style={styles.figura} source={require('../imagens/urso_pardo.jpg')}/>
              <Text>Urso Pardo</Text>
            </View>
            <Text> </Text>

            <Text style={styles.paragrafo}>A fauna da floresta temperada é composta de diversos mamíferos, como os veados, ursos, esquilos, linces e raposas. Há também muitos insetos e aves pequenas, como algumas espécies de pica-pau.{"\n\n"}</Text>

            
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
  export default BiomaFlorestaTemperadaScreen;