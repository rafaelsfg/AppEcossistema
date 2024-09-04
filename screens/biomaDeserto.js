import { View, Text, ScrollView, Image, Pressable } from 'react-native';
import styles from '../styles'

const Separator = () => <View style={styles.separator} />;

  function BiomaDesertoScreen({navigation}) {
    
      return (
        <View style={{ padding: 20 }}>
          <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image style={styles.figura} source={require('../imagens/deserto.jpg')}/>
              <Text>Deserto de Atacama, no Chile</Text>
            </View>
            <Text> </Text>

            <Text style={styles.paragrafo}>No deserto, em geral, o verão se caracteriza por temperaturas elevadas e o inverno, por temperaturas amenas. A ocorrência de chuvas escassas e irregulares ao longo do ano e as altas temperaturas resultam no desenvolvimento de plantas adaptadas a essas condições, como cactos e arbustos. {"\n\n"}Algumas dessas adaptações, como as dos cactos, caracterizam-se pela ausência de folhas para evitar a perda de água pela transpiração e por armazenar água em seus tecidos.{"\n\n"}</Text>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image style={styles.figura} source={require('../imagens/jerboa.jpeg')}/>
              <Text>Jerboa da Sibéria</Text>
            </View>
            <Text> </Text>

            <Text style={styles.paragrafo}>Assim como as plantas, os animais que vivem no deserto, em geral, também apresentam características que os auxiliam a viver nesse bioma. Por exemplo, alguns deles têm corpo menor e pele espessa para reduzir a perda de água pela transpiração. Nesse bioma, encontramos animais como ratos-cangurus, jerboas e marmotas, além de lagartos, serpentes e insetos.{"\n\n"}</Text>

            
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
  export default BiomaDesertoScreen;