import { View, Text, ScrollView, Image, Pressable } from 'react-native';
import styles from '../styles'

const Separator = () => <View style={styles.separator} />;

  function AguaDoceScreen({navigation}) {
    
      return (
        <View style={{ padding: 20 }}>
          <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image style={styles.figura} source={require('../imagens/rio_de_contas.jpg')}/>
              <Text>Ponte sobre o rio de contas, na cidade de Jequié</Text>
            </View>
            <Text> </Text>

            <Text style={styles.paragrafo}>Os ecossistemas de água doce apresentam valores de salinidade menores que 0,5 g de sal a cada 1.000 g de água, ou seja, possuem pouca quantidade de sais dissolvidos na água. {"\n\n"}Os rios, riachos, lagos e lagoas são exemplos de ecossistemas de água doce. {"\n\n"}</Text>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image style={styles.figura} source={require('../imagens/pirarucu.jpg')}/>
              <Text>Pirarucu, um dos maiores peixes de água doce do Brasil</Text>
            </View>

            <Text> </Text>
                        
            <Separator />

            <Text> </Text>

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
  export default AguaDoceScreen;