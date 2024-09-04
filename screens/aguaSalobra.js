import {useState} from 'react';
 import { View, Text, ScrollView, Image, Modal, Pressable } from 'react-native';
import styles from '../styles'

const Separator = () => <View style={styles.separator} />;

  function AguaSalobraScreen({navigation}) {
    const [modalEstuario, setModalEstuario] = useState(false);

      return (
        <View style={{ padding: 20 }}>
          <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image style={styles.figura} source={require('../imagens/lagoa_salobra.jpg')}/>
              <Text>Lagoa dos Patos, no Rio Grande do Sul,</Text>
            </View>
            <Text> </Text>
            <Modal animationType="slide" transparent={true}  visible={modalEstuario}>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <View style={styles.modalView}>
                  <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={styles.figuraModal} source={require('../imagens/estuario.jpg')}/>
                  <Text>Exemplo de Estuário: Rio da Prata</Text>
                  </View>
                  <Text style={styles.paragrafo}>{"\n"}Estuário é uma região costeira em que um corpo de água doce se mistura com a água do mar.{"\n"}</Text>
                  <Pressable style={styles.botaoFechar} onPress={() => setModalEstuario(!modalEstuario)}>
                    <Text style={styles.textoFechar}>Fechar</Text>
                  </Pressable>
                </View>  
              </View>
            </Modal>
            <Text style={styles.paragrafo}>Os ecossistemas de água salobra apresentam salinidade que varia entre 0,5 g e 35 g de sal a cada 1.000 g de água, ou seja, possuem quantidade intermediária de sais dissolvidos na água. {"\n\n"}Os manguezais e os <Text style={styles.link} onPress={() => setModalEstuario(true)}>estuários</Text> são exemplos de ecossistemas de água salobra.{"\n\n"}</Text>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image style={styles.figura} source={require('../imagens/manguezal.jpg')}/>
              <Text>Mangue-vermelho, espécie típica de manguezal</Text>
            </View>
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
  export default AguaSalobraScreen;