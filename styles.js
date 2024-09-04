import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  paragrafo: {
    fontSize: 18,
    textAlign: 'justify',

  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
  },

  containerBotao: {
    flexDirection: 'line',
    alignItems: 'center',
    justifyContent: 'center',  
  },

  botao: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
  },

  botaoNavView: {
    flexDirection: 'row',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  botaoFechar: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    backgroundColor: '#2196F3',
  },

  botaoNav: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    
    backgroundColor: '#008000',
  },

  botaoNav2: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    
    backgroundColor: '#2196F3',
  },

  textoFechar: {
    color: 'white',
    fontWeight: "bold",
  },

  textoIniciar: {
    color: 'white',
    fontWeight: "bold",
    fontSize: 28,
  },

  textoBotNav: {
    color: 'white',
    fontWeight: "bold",
    fontSize: 20,
    paddingLeft: 8,
  },

  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  figura: {
    width: 350,
    height: 250,
    resizeMode: 'contain',
  },

  icone: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },

  figuraModal: {
    width: 200,
    height: 150,
    resizeMode: 'contain',
  },

  imagemFundo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  figuraPequena: {
    width: 150,
    height: 150,
    resizeMode: 'contain',

  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  link:{
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

 export default styles;