import {useState} from 'react';
import { View, Text, ScrollView, Image, Modal, Pressable } from 'react-native';
import styles from '../styles'

const Separator = () => <View style={styles.separator} />;

  function BiomaFlorestaTropicalScreen({navigation}) {
    const [modalTranspiracao, setModalTranspiracao] = useState(false);
    const [modalEstrato, setModalEstrato] = useState(false);

      return (
        <View style={{ padding: 20 }}>
          <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image style={styles.figura} source={require('../imagens/floresta.jpg')}/>
              <Text>Floresta Amazônica</Text>
            </View>
            <Text> </Text>

            <Modal animationType="slide" transparent={true}  visible={modalTranspiracao}>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 22}}>
                <View style={styles.modalView}>
                  <Text style={styles.paragrafo}>Transpiração é um processo no qual a planta libera água no estado gasoso.{"\n"}</Text>
                  <Pressable style={styles.botaoFechar} onPress={() => setModalTranspiracao(!modalTranspiracao)}>
                    <Text style={styles.textoFechar}>Fechar</Text>
                  </Pressable>
                </View>  
              </View>
            </Modal>

            <Text style={styles.paragrafo}>A floresta Tropical é um bioma caracterizado por alta temperatura, chuvas distribuídas durante todo o ano e praticamente não apresentam diferenças entre inverno e verão. Em geral, as chuvas são diárias e abundantes. {"\n\n"}Em razão dessas características, esse bioma apresenta fauna e flora bastante diversificadas. {"\n\n"}A flora da floresta Tropical é constituída de plantas de diferentes tamanhos. Há árvores de grande porte e com folhas largas, que favorecem a <Text style={styles.link} onPress={() => setModalTranspiracao(true)}>transpiração</Text> dessa planta. {"\n\n"}Assim, a parte superior da floresta é preenchida pelas árvores, o que dificulta a passagem de grande parte da luz solar até o solo. Em razão dessa baixa incidência de luz solar, as plantas que vivem próximos ao solo apresentam folhas largas para absorver o máximo de luz solar que chega até elas. {"\n\n"}A Amazônia do Brasil é considerada a maior floresta tropical do mundo.{"\n\n"}</Text>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image style={styles.figura} source={require('../imagens/araras.jpg')}/>
              <Text>Araras</Text>
            </View>

            <Modal animationType="slide" transparent={true}  visible={modalEstrato}>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 22}}>
                <View style={styles.modalView}>
                  <Text style={styles.paragrafo}>Estrato é uma determinada camada de vegetação que constitui o habitat de determinadas espécies.{"\n"}</Text>
                  <Pressable style={styles.botaoFechar} onPress={() => setModalEstrato(!modalEstrato)}>
                    <Text style={styles.textoFechar}>Fechar</Text>
                  </Pressable>
                </View>  
              </View>
            </Modal>
          
            <Text style={styles.paragrafo}>{"\n"}A fauna distribui-se por todos os <Text style={styles.link} onPress={() => setModalEstrato(true)}>estratos</Text> da floresta. Por exemplo, várias espécies de aves, insetos e morcegos vivem na parte superior das árvores, e diversos mamíferos podem ser encontrados tanto sobre árvores mais baixas quanto no solo, onde também há serpentes, sapos e lagartos.{"\n"}</Text>

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
  export default BiomaFlorestaTropicalScreen;