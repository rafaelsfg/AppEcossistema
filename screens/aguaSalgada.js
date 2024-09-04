import {useState} from 'react';
import { View, Text, ScrollView, Image, Modal, Pressable } from 'react-native';
import styles from '../styles'

const Separator = () => <View style={styles.separator} />;

  function AguaSalgadaScreen({navigation}) {
    const [modalFito, setModalFito] = useState(false);
    const [modalZoo, setModalZoo] = useState(false);
    const [modalAuto, setModalAuto] = useState(false);
    const [modalHetero, setModalHetero] = useState(false);
    const [modalSubstrato, setModalSubstrato] = useState(false);

      return (
        <View style={{ padding: 20 }}>
          <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image style={styles.figura} source={require('../imagens/oceano.png')}/>
              <Text>Oceano</Text>
            </View>
            <Text> </Text>

            <Text style={styles.paragrafo}>Os ecossistemas de água salgada apresentam valores de salinidade maiores que 35 g de sal a cada 1.000 g de água, ou seja, possuem alta concentração de sais dissolvidos na água. Os oceanos são exemplos desses ecossistemas. {"\n\n"}</Text>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image style={styles.figura} source={require('../imagens/recife_coral.jpg')}/>
              <Text>Recife de coral</Text>
            </View>
            <Text> </Text>

            <Text style={styles.paragrafo}>De acordo com sua localização e locomoção no ecossistema aquático, os seres vivos podem ser classificados em <Text style={{fontWeight: "bold"}}>plâncton</Text>, <Text style={{fontWeight: "bold"}}>nécton</Text> e <Text style={{fontWeight: "bold"}}>bentos</Text>. Observe os exemplos a seguir.{"\n\n"}</Text>

            <Modal animationType="slide" transparent={true}  visible={modalFito}>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <View style={styles.modalView}>
                  <Text style={styles.paragrafo}>Fitoplâncton é um conjunto de organismos aquáticos microscópicos que têm capacidade de fazer fotossíntese.{"\n"}</Text>
                  <Pressable style={styles.botaoFechar} onPress={() => setModalFito(!modalFito)}>
                    <Text style={styles.textoFechar}>Fechar</Text>
                  </Pressable>
                </View>  
              </View>
            </Modal>

            <Modal animationType="slide" transparent={true}  visible={modalZoo}>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <View style={styles.modalView}>
                  <Text style={styles.paragrafo}>Zooplâncton é um conjunto de organismos aquáticos microscópicos que não têm capacidade de fazer fotossíntese.{"\n"}</Text>
                  <Pressable style={styles.botaoFechar} onPress={() => setModalZoo(!modalZoo)}>
                    <Text style={styles.textoFechar}>Fechar</Text>
                  </Pressable>
                </View>  
              </View>
            </Modal>

            <Modal animationType="slide" transparent={true}  visible={modalAuto}>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <View style={styles.modalView}>
                  <Text style={styles.paragrafo}>Seres autótrófos são aqueles que possuem a capacidade de produzir seu próprio alimento.{"\n"}</Text>
                  <Pressable style={styles.botaoFechar} onPress={() => setModalAuto(!modalAuto)}>
                    <Text style={styles.textoFechar}>Fechar</Text>
                  </Pressable>
                </View>  
              </View>
            </Modal>

            <Modal animationType="slide" transparent={true}  visible={modalHetero}>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <View style={styles.modalView}>
                  <Text style={styles.paragrafo}>Seres heterótrofos são aqueles que não possuem a capacidade de produzir seu próprio alimento.{"\n"}</Text>
                  <Pressable style={styles.botaoFechar} onPress={() => setModalHetero(!modalHetero)}>
                    <Text style={styles.textoFechar}>Fechar</Text>
                  </Pressable>
                </View>  
              </View>
            </Modal>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image style={styles.figura} source={require('../imagens/plancton.jpg')}/>
            </View>
            <Text style={styles.paragrafo}>{"\n"}Os <Text style={{fontWeight: "bold"}}>Plânctons</Text> são compostos de <Text style={styles.link} onPress={() => setModalFito(true)}>fitoplâncton</Text> e <Text style={styles.link} onPress={() => setModalZoo(true)}>zooplâncton</Text>, em geral, microscópicos e com pouca capacidade de locomoção, sendo levados pelas correntes de água. O fitoplâncton inclui os seres vivos <Text style={styles.link} onPress={() => setModalAuto(true)}>autótrofos</Text>, como as algas. Já o zooplâncton, inclui os seres vivos <Text style={styles.link} onPress={() => setModalHetero(true)}>heterótrofos</Text>, como microcrustáceos, protozoários e larvas de alguns animais.{"\n\n"}</Text>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image style={styles.figura} source={require('../imagens/crustaceo.jpg')}/>
            </View>
            <Text style={styles.paragrafo}>{"\n"}Os <Text style={{fontWeight: "bold"}}>Néctons</Text> são formados por seres vivos que habitam a coluna de água e são capazes de se locomover ativamente. Os peixes, os mamíferos aquáticos, vários moluscos e diversos crustáceos são representantes desse grupo.{"\n\n"}</Text>

            <Modal animationType="slide" transparent={true}  visible={modalSubstrato}>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <View style={styles.modalView}>
                  <Text style={styles.paragrafo}>Em um ecossistema aquático, o substrato será o fundo do mar, de um lago ou de um rio.{"\n"}</Text>
                  <Pressable style={styles.botaoFechar} onPress={() => setModalSubstrato(!modalSubstrato)}>
                    <Text style={styles.textoFechar}>Fechar</Text>
                  </Pressable>
                </View>  
              </View>
            </Modal>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image style={styles.figura} source={require('../imagens/estrela_do_mar.jpg')}/>
            </View>
            <Text style={styles.paragrafo}>{"\n"}Os <Text style={{fontWeight: "bold"}}>Bentos</Text> são formados por seres vivos que habitam o fundo de ecossistemas aquáticos. Alguns deles vivem fixos ao <Text style={styles.link} onPress={() => setModalSubstrato(true)}>substrato</Text>, como as esponjas e os lírios-do-mar. Outros se movimentam sobre o substrato, como as estrelas-do-mar e os pepinos-do-mar.{"\n\n"}</Text>

            <Text> </Text>

            <Separator />

            <View style={styles.containerBotao}>

            <Pressable style={styles.botaoNav2} onPress={() => navigation.navigate('Ecossistema Aquático')}>
              <View style={styles.botaoNavView}>
                <View>
                  <Image style={styles.icone} source={require('../imagens/iconeAquatico.png')}/>
                </View>
                <View>
                  <Text style={styles.textoBotNav}>Voltar para Ecossistema Aquático</Text>
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
  export default AguaSalgadaScreen;