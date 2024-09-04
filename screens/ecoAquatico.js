import {useState} from 'react';
import { View, Text, ScrollView, Image, Modal, Pressable } from 'react-native';
import styles from '../styles'

const Separator = () => <View style={styles.separator} />;

  function EcoAquaticoScreen({navigation}) {

      const [modalFoto, setModalFoto] = useState(false);

      return (
        <View style={{ padding: 20 }}>
          <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image style={styles.figura} source={require('../imagens/coral.jpg')}/>
              <Text>Coral</Text>
            </View>
            <Text> </Text>

            <Modal animationType="slide" transparent={true}  visible={modalFoto}>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 22}}>
                <View style={styles.modalView}>
                  <Text style={styles.paragrafo}>A fotossíntese é um processo usado por plantas e outros organismos, que utiliza a energia luminosa para a produção de energia necessária para a sua sobrevivência.{"\n"}</Text>
                  <Pressable style={styles.botaoFechar} onPress={() => setModalFoto(!modalFoto)}>
                    <Text style={styles.textoFechar}>Fechar</Text>
                  </Pressable>
                </View>  
              </View>
            </Modal>

            <Text style={styles.paragrafo}>Os ecossistemas aquáticos abrangem a maior parte da biosfera. Eles incluem rios, lagos, mares, oceanos, entre outros corpos de água. {"\n\n"}Esses ecossistemas apresentam diferentes características, que são influenciadas por fatores abióticos, como temperatura, luminosidade e concentração de gás oxigênio. {"\n\n"}Em um ecossistema aquático, o gás oxigênio, assim como outros gases, encontra-se dissolvido na água. A quantidade de gás oxigênio dissolvido na água depende de alguns fatores abióticos, por exemplo, a temperatura. Nesse caso, quanto mais baixa a temperatura da água, maior é a quantidade de gás oxigênio dissolvido nela; e quanto mais alta é a temperatura da água, menor é a quantidade de gás oxigênio dissolvido nela. {"\n\n"}Os seres vivos que realizam <Text style={styles.link} onPress={() => setModalFoto(true)}>fotossíntese</Text>, como as plantas aquáticas, geralmente se concentram onde há maior incidência de luz solar, como na superfície da água ou próximo a ela. {"\n\n"}A incidência de luz solar influencia na fotossíntese e na temperatura da água. Ao penetrar na coluna de água, os raios solares sofrem alteração, por exemplo, em sua intensidade, que varia de acordo com a profundidade do corpo de água. Assim, quanto maior a profundidade, menor é a incidência de luz solar e, consequentemente, mais baixa é a temperatura da água. {"\n\n"}Além dos fatores abióticos estudados, os ecossistemas aquáticos também podem ser influenciados pela quantidade de sais minerais dissolvidos na água, a chamada <Text style={{fontWeight: "bold"}}>salinidade</Text>. {"\n\n"}De acordo com a salinidade, os ecossistemas aquáticos podem ser classificados em: <Text style={{fontWeight: "bold"}}>ecossistema de água doce</Text>, <Text style={{fontWeight: "bold"}}>ecossistema de água salobra</Text> e <Text style={{fontWeight: "bold"}}>ecossistema de água salgada</Text>. {"\n\n"}Toque em um dos tipos de ecossistemas aquáticos abaixo para conhecermos as suas principais características:</Text>
            
            <View style={styles.containerBotao}>
              <Pressable style={styles.botaoNav} onPress={() => navigation.navigate('Ecossistema de Água Doce')}>
                <View style={styles.botaoNavView}>
                  <View>
                    <Image style={styles.icone} source={require('../imagens/iconeAguaDoce.png')}/>
                  </View>
                  <View>
                    <Text style={styles.textoBotNav}>Ecossistema de Água Doce</Text>
                  </View>
                </View>
              </Pressable>
             
              <Text> </Text>

              <Pressable style={styles.botaoNav} onPress={() => navigation.navigate('Ecossistema de Água Salobra')}>
                <View style={styles.botaoNavView}>
                  <View>
                    <Image style={styles.icone} source={require('../imagens/iconeAguaSalobra.png')}/>
                  </View>
                  <View>
                    <Text style={styles.textoBotNav}>Ecossistema de Água Salobra</Text>
                  </View>
                </View>
              </Pressable>

              <Text> </Text>

              <Pressable style={styles.botaoNav} onPress={() => navigation.navigate('Ecossistema de Água Salgada')}>
                <View style={styles.botaoNavView}>
                  <View>
                    <Image style={styles.icone} source={require('../imagens/iconeAguaSalgada.png')}/>
                  </View>
                  <View>
                    <Text style={styles.textoBotNav}>Ecossistema de Água Salgada</Text>
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

 export default EcoAquaticoScreen;
