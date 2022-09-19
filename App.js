import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,Image,TouchableOpacity,Modal} from 'react-native';
import Opcao from './src/components/Opcao';


export default function App(){

  const [alcool,setAlcool] = useState('')
  const [gasolina,setGasolina] = useState('')
  const [modal,setModal] = useState(false)

  let valor1 = 'Alcool'
  let valor2 = 'Gasolina'

  function abrirModal(){
    setModal(true)
  }

  function sairModal(){
    setModal(false)
  }

    let result = (alcool/gasolina)
    
    if( result < 0.7 ){
      result = valor1
    }else{
      result = valor2
    }
  
  return (
    <View style={styles.container}>

      <View style={styles.arealog}>
          <Image
          style={styles.img}
          source={require('./src/imagen/logo.png')}
          />
      </View>
      <Text style={styles.titulo}>Qual a melhor opção ?</Text>
      <View style={styles.areainput}>

          <Text style={styles.txtinput}>Álcool (Preço por litro):</Text>
          <TextInput
          placeholder='EX: 4.60'
          style={styles.input}
          keyboardType='numeric'
          value={alcool}
          onChangeText={(valor)=> setAlcool(valor)}
          />

          <Text style={styles.txtinput}>Gasolina (Preço por litro):</Text>
          <TextInput
          placeholder='EX: 7.30'
          style={styles.input}
          keyboardType='numeric'
          value={gasolina}
          onChangeText={(input)=> setGasolina(input)}
          />
        <View style={{paddingTop:20}}>
          <TouchableOpacity
          style={styles.btn}
          onPress={ abrirModal}
          >
            <Text style={{fontSize:20,fontWeight:'bold',color:'#FFF',textAlign:'center'}}>Calcular</Text>
          </TouchableOpacity>
        </View>
      </View>
          <Modal  
            animationType='slide' 
            visible={modal}
            >
            <Opcao fechar={sairModal} titl={result} procoAlcool={alcool} precoGasolin={gasolina}/>
          </Modal>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    
  },
  arealog:{
    alignItems:'center',
    justifyContent:'center',
    paddingTop:100,
    paddingBottom:20
  },
  titulo:{
    fontSize:30,
    color: '#FFF',
    fontWeight:'bold',
    paddingBottom: 80,
    textAlign:'center'
  },
  areainput:{
    paddingLeft: 10,
  },
  txtinput:{
    fontSize:20,
    color: '#FFF',
    fontWeight:'bold',
    padding:10
  },
  input:{
    width: '95%',
    borderRadius:3,
    height: 50,
    backgroundColor:'#FFF',
    fontSize:20,
    paddingLeft:15
    
  },
  btn:{
    width: '95%',
    borderRadius:4,
    backgroundColor:'#FD0908',
    padding: 10
  },
  viewModal:{
    flex: 1,
    
  }
});
