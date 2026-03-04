import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RootLayout() {
  const [contador, setContador] = useState(null);
  const [valorAnterior, setValorAnterior] = useState(null);
  const [operacao, setOperacao] = useState(null);

  function concatSelect(numb) {
    const stringNumb = numb.toString();

    // Se a tela estiver vazia, define o primeiro número
    if (contador === null) {
      setContador(stringNumb);
    } 
    // Impede zeros múltiplos à esquerda (ex: "00")
    else if (contador === "0" && stringNumb === "0") {
      return; 
    }
    // Substitui o zero inicial por outro número (ex: "0" -> "5")
    else if (contador === "0" && stringNumb !== "," && stringNumb !== "0") {
      setContador(stringNumb);
    }
    // Concatenação normal
    else {
      setContador(contador + stringNumb);
    }
  }

  function operationSelect(opt) {
  if (contador !== null) {
    setValorAnterior(parseFloat(contador.replace(',', '.'))); // Salva o número (tratando a vírgula)
    setOperacao(opt); // Salva o sinal
    setContador(null); // Limpa a tela para o segundo número
  }
}

  function calcular() {
    if (valorAnterior !== null && contador !== null && operacao !== null) {
      const atual = parseFloat(contador.replace(',', '.')); 
      let resultado = 0;

      switch (operacao) {
        case "+": resultado = valorAnterior + atual; break;
        case "-": resultado = valorAnterior - atual; break;
        case "X": resultado = valorAnterior * atual; break;
        case "/": resultado = (atual !== 0) ? valorAnterior / atual : "Erro"; break; //garante que divizões por 0 retornem Erro
        default: return;
      }

      setContador(resultado.toString().replace('.', ',')); 
      setValorAnterior(null);
      setOperacao(null);
    }
  }

  function raiz(){
    if(contador !== null && contador >= 0){
      setContador(Math.sqrt(contador));
    }
  }

  function apagarContador(tipo:String){
    if(contador==null){
      return;
    }
    if(tipo=="C"){
      console.log(contador.toString().slice(0, -1));
      var contadorTMP = contador.toString().slice(0, -1);
      setContador(contadorTMP);
    }else if(tipo == "CE"){
      setContador(null);
    }
  }


  return(
    <>
      <View style={styles.corpo}>
        <View style={styles.display}>
        <Text style={{fontSize: 20, alignSelf: 'center'}}>{contador || 0}</Text>
      </View>
      <View style={styles.teclado}>
        <View style={styles.linha}>
          <TouchableOpacity style={styles.botao} onPress={() => apagarContador("C")}>
            <Text>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => apagarContador("CE")}>
            <Text>CE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={raiz}>
            <Text>R</Text>
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
          <TouchableOpacity style={styles.calcularBTT} onPress={calcular}>
            <Text>=</Text>
          </TouchableOpacity>
        </View>
      </View>   
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  corpo:{
    flex: 1, // Faz o container ocupar a tela toda
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
    backgroundColor: '#fff', 
    padding: 10,
  },

  display:{
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'black',
    width: '100%', // No mobile ocupa tudo
    maxWidth: 204, // Exatamente a largura dos 4 botões + margens
    height: 50,
    justifyContent: 'center',
    marginBottom: 5,
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
    width: 100,
		justifyContent: 'center',
		alignItems: 'center'
  },
})