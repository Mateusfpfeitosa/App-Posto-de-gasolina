import React  from "react";
import {View,Text,TouchableOpacity,StyleSheet,Image} from 'react-native'

export default function Opcao(props){

    
    return(
        <View style={styles.constainer} >

            <View style={styles.arealog}>
                <Image
                style={styles.img}
                source={require('../../imagen/gas.png')}
                />
            </View>
            <Text style={styles.titulo}>Compensa usar : {props.titl}</Text>
            <View style={styles.areaDiscicao}>

                <Text style={[styles.text,{fontSize:30}]}>Com os Preços:</Text>
                <Text style={styles.text}>Álcool : {props.procoAlcool}</Text>
                <Text style={styles.text}>Gasolina : {props.precoGasolin}</Text>

            </View>

            <View style={styles.areabutton}>
                <TouchableOpacity 
                style={styles.button}
                onPress={props.fechar}
                >
                    <Text style={styles.textBotton}>Calcular Novamente</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    constainer:{
        flex:1,
        backgroundColor:'#000'
    },
    arealog:{
        alignItems:'center',
        justifyContent:'center',
        paddingTop:100,
        paddingBottom:20
      },
      titulo:{
        fontSize:30,
        color: '#00FF00',
        fontWeight:'bold',
        paddingBottom: 80,
        textAlign:'center'
      },
      text:{
        color: "#FFF",
        fontSize:25,
        padding: 7,
        fontWeight:'bold'
      },
      areaDiscicao:{
        justifyContent: "center",
        alignItems: "center",  
      },
      areabutton:{
        justifyContent: "center",
        alignItems: "center",  
        paddingTop:20
      },
      button:{
        width: '70%',
        borderWidth:1,
        borderColor: '#FA0504',
        backgroundColor: '#000'
      },
      textBotton:{
        fontWeight:'bold',
        fontSize: 15,
        color: '#FA0504',
        textAlign:"center",
        padding: 5
      }

})