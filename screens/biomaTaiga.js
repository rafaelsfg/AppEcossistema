import {useState} from 'react';
import { View, Text, ScrollView, Image, Modal, Pressable } from 'react-native';
import styles from '../styles'

const Separator = () => <View style={styles.separator} />;

  function BiomaTaigaScreen({navigation}) {
    const [modalAbeto, setModalAbeto] = useState(false);

      return (
        <View style={{ padding: 20 }}>
          <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image style={styles.figura} source={require('../imagens/taiga.jpg')}/>
              <Text>Mata de taiga no Alasca</Text>
            </View>
            <Text> </Text>

            <Modal animationType="slide" transparent={true}  visible={modalAbeto}>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 22,}}>
                <View style={styles.modalView}>
                  <View style={{alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={styles.figuraModal} source={require('../imagens/abetos.jpg')}/>
                  </View>
                  <Text style={styles.paragrafo}>{"\n"}Abetos são nativas de florestas temperadas da Europa, Ásia, Norte da África e Américas Central e do Norte.{"\n"}</Text>
              <Pressable style={styles.botaoFechar} onPress={() => setModalAbeto(!modalAbeto)}>
                    <Text style={styles.textoFechar}>Fechar</Text>
                  </Pressable>
            </View>  
          </View>
        </Modal>

            <Text style={styles.paragrafo}>A taiga, também conhecida como floresta de coníferas, é um bioma que se caracteriza pela baixa temperatura, com inverno rigoroso. {"\n\n"}A vegetação é constituída principalmente de pinheiros e <Text style={styles.link} onPress={() => setModalAbeto(true)}>abetos</Text>. {"\n\n"}Essas plantas apresentam folhas estreitas que evitam, por exemplo, o acúmulo de neve sobre elas. Essas características auxiliam as plantas a resistir às baixas temperaturas, já que no inverno a água disponível no solo encontra-se congelada. {"\n\n"}Dessa maneira, há pouca diversidade da flora nesse tipo de floresta, pois apenas algumas plantas possuem adaptações para resistir às condições do inverno intenso.{"\n\n"}</Text>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image style={styles.figura} source={require('../imagens/alce.jpg')}/>
              <Text>Alce macho</Text>
            </View>
            <Text> </Text>

            <Text style={styles.paragrafo}>Entre outros animais, a fauna é composta de mamíferos, como ursos, cervos, alces, lebres-da-pata-branca, esquilos, lobos, raposas, martas e visons, além de aves, como o pintassilgo e os pardais.{"\n"}</Text>

            
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
  export default BiomaTaigaScreen;