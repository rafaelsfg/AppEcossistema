import {useState} from 'react';
import { View, Text, ScrollView, Image, Modal, Pressable } from 'react-native';
import styles from '../styles'

const Separator = () => <View style={styles.separator} />;

 function EcossistemaScreen({navigation}) {

      const [modalBiosfera, setModalBiosfera] = useState(false);
      const [modalDecomposicao, setModalDecomposicao] = useState(false);

     return (
     <View style={{ padding: 20 }}>
      <ScrollView>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={styles.figura} source={require('../imagens/eco1.jpg')}/>
          <Text>Terrário </Text>
        </View>
        <Text> </Text>
        <Text style={styles.paragrafo}>Ecossistema é o nome dado a um conjunto formado pelos seres vivos e pelos componentes não vivos do ambiente, e também pelas interações entre eles, como as relações de alimentação, reprodução, abrigo e competição.{"\n\n"}É uma comunidade de organismos que vivem e interagem entre si e com o meio ambiente em que estão inseridos.</Text>
        <Text> </Text>
        <View style={{flexDirection: 'row'}}>
          <Image style={styles.figuraPequena} source={require('../imagens/abelha.jpg')}/>
          <View style={{flex: 1, marginLeft: 10, justifyContent: 'center'}}>
          <Text style={styles.paragrafo}>Os seres vivos que compõem os ecossistemas formam o meio <Text style={{fontWeight: "bold"}}>biótico</Text>.</Text>
          </View>
        </View>
        <Text> </Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1, marginRight: 10, justifyContent: 'center'}}>
          <Text style={styles.paragrafo}>Já os componentes não vivos como solo, água e ar, fazem parte do meio <Text style={{fontWeight: "bold"}}>abiótico</Text>.</Text>
          </View>
          <Image style={styles.figuraPequena} source={require('../imagens/pedras.jpg')}/>  
        </View>
        <Text> </Text>
        <Text style={styles.paragrafo}>Os ecossistemas podem ser constituídos de pequenas áreas, como um tronco de uma árvore, que fornece condições favoráveis para a vida de formigas.{"\n"}</Text>
         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={styles.figura} source={require('../imagens/formiga.jpg')}/>
          <Text>Formiga preta comum</Text>
        </View>
        <Text> </Text>
        <Text style={styles.paragrafo}>E também de áreas maiores, como uma floresta, onde animais se alimentam de plantas e de outros animais.</Text>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={styles.figura} source={require('../imagens/floresta.jpg')}/>
          <Text>Floresta Amazônica</Text>
        </View>
        <Text> </Text>

        <Modal animationType="slide" transparent={true}  visible={modalDecomposicao}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 22,}}>
            <View style={styles.modalView}>
              <Text style={styles.paragrafo}>Decomposição é o processo de transformação da matéria orgânica em minerais.{"\n"}</Text>
              <Pressable style={styles.botaoFechar} onPress={() => setModalDecomposicao(!modalDecomposicao)}>
                    <Text style={styles.textoFechar}>Fechar</Text>
                  </Pressable>
            </View>  
          </View>
        </Modal>
        
        <Text style={styles.paragrafo}>Todos os ecossistemas estão interligados e, portanto, existe a troca de matéria e energia entre eles, por exemplo, quando um indivíduo se alimenta de outro, ou quando ocorre a <Text style={styles.link} onPress={() => setModalDecomposicao(true)}>decomposição</Text> de restos orgânicos, resultando em compostos que poderão ser reaproveitados pelos seres vivos.</Text>
        <Text> </Text>

        <Modal animationType="slide" transparent={true}  visible={modalBiosfera}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 22,}}>
            <View style={styles.modalView}>
              <View style={{alignItems: 'center', justifyContent: 'center' }}>
                <Image style={styles.figuraModal} source={require('../imagens/biosfera.jpg')}/>
              </View>
              <Text style={styles.paragrafo}>{"\n"}A biosfera é a camada da Terra que reúne todos os ecossistemas existentes. Ela corresponde ao local onde são encontrados os seres vivos.{"\n"}</Text>
              <Pressable style={styles.botaoFechar} onPress={() => setModalBiosfera(!modalBiosfera)}>
                    <Text style={styles.textoFechar}>Fechar</Text>
              </Pressable>
            </View>  
          </View>
        </Modal>

        <Text style={styles.paragrafo}>Assim, a <Text style={styles.link} onPress={() => setModalBiosfera(true)}>biosfera</Text> é composta de vários ecossistemas, que podem ser divididos em dois grupos: os terrestres e os aquáticos. {"\n\n"}Toque em um dos grupos de ecossistemas para explorarmos mais:</Text>
        
        <Text> </Text>

        <View style={styles.containerBotao}>
          <Pressable style={styles.botaoNav} onPress={() => navigation.navigate('Ecossistema Terrestre')}>
            <View style={styles.botaoNavView}>
              <View>
                <Image style={styles.icone} source={require('../imagens/iconeTerrestre.png')}/>
              </View>
              <View>
                <Text style={styles.textoBotNav}>Ecossistema Terrestre</Text>
              </View>
            </View>
          </Pressable>
             
          <Text> </Text>

          <Pressable style={styles.botaoNav} onPress={() => navigation.navigate('Ecossistema Aquático')}>
            <View style={styles.botaoNavView}>
              <View>
                <Image style={styles.icone} source={require('../imagens/iconeAquatico.png')}/>
              </View>
              <View>
                <Text style={styles.textoBotNav}>Ecossistema Aquático</Text>
              </View>
            </View>
          </Pressable>
        </View>

        <Text> </Text>

        <Separator />

        <Text> </Text>

        <View style={styles.containerBotao}>
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

 export default EcossistemaScreen;