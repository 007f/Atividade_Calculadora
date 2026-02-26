import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RootLayout() {
  const [contador, setContador] = useState(null);
  const [var1, setvar1] = useState(null);
  const [var2, setvar2] = useState(null);

  function concatSelect(numb){
    if (contador==null){
      setContador(numb);
    }else{
      setContador(contador.toString() + numb.toString());
    }
  }

  function apagarContador(tipo:String){
    if(contador==null){
      return;
    }
    if(tipo=="C"){
      var contadorTMP = contador.slice(0, -1);
      setContador(contadorTMP);
    }else if(tipo == "CE"){
      setContador(null);
    }
  }

  function operationSelect(opt:String){
    
  }

  function calcular(){}


  return(
    <>
      <View style={styles.display}>
        <Text style={{fontSize: 20, alignSelf: 'center'}}>{contador}</Text>
      </View>
      <View style={styles.teclado}>
        <View style={styles.linha}>
          <TouchableOpacity style={styles.botao} onPress={() => apagarContador("C")}>
            <Text>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => apagarContador("CE")}>
            <Text>CE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => concatSelect("%")}>
            <Text>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => operationSelect("/")}>
            <Text>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.linha}>
          <TouchableOpacity style={styles.botao} onPress={() => concatSelect(1)}>
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => concatSelect(2)}>
            <Text>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => concatSelect(3)}>
            <Text>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => operationSelect("X")}>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.linha}>
          <TouchableOpacity style={styles.botao} onPress={() => concatSelect(4)}>
            <Text>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => concatSelect(5)}>
            <Text>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => concatSelect(6)}>
            <Text>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => operationSelect("-")}>
            <Text>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.linha}>
          <TouchableOpacity style={styles.botao} onPress={() => concatSelect(7)}>
            <Text>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => concatSelect(8)}>
            <Text>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => concatSelect(9)}>
            <Text>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => operationSelect("+")}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.linha}>
          <TouchableOpacity style={styles.botao} onPress={() => concatSelect(0)}>
            <Text>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => concatSelect(",")}>
            <Text>,</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.calcularBTT} onPress={() => calcular()}>
            <Text>=</Text>
          </TouchableOpacity>
        </View>
      </View>   
    </>
  );
}

const styles = StyleSheet.create({
  display:{
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'black',
    height: 30
  },
  teclado:{
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'black',
  },

  linha:{
    flexDirection: 'row',
  },

  botao:{
    backgroundColor: '#12cc75ff',
		margin: 2,
		padding: 20,
		borderRadius: 10,
    width: 48,
		justifyContent: 'center',
		alignItems: 'center'
  },
  calcularBTT:{
    backgroundColor: '#12cc75ff',
		margin: 2,
		paddingHorizontal: 45,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center'
  },
})