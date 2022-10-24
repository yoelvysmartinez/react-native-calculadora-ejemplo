import React from 'react'
import { View, Text } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import useCalculadora from '../hooks/useCalculadora';
import { style } from '../theme/appTheme';



export const CalculadoraScreen = () => {
   
    const {calcular, btnSumar, btnRestar, btnMultiplicar, btnDividir, btnDel, limpiar, positivoNegativo, numero, numeroAnterior, armarNumero} = useCalculadora();
  

    return (
        <View style={style.calculadoraContainer}>
            {
                (numeroAnterior !== '0') && (
                    <Text style={style.resultadoPequeno}>{numeroAnterior}</Text>
                )
            }
            <Text style={style.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {numero}
            </Text>

            <View style={style.fila}>
                <BotonCalc texto={"C"} color="#9B9B9B" accion={limpiar} />
                <BotonCalc texto={"+/-"} color="#9B9B9B" accion={positivoNegativo} />
                <BotonCalc texto={"del"} color="#9B9B9B" accion={btnDel} />
                <BotonCalc texto={"/"} color="#FF9427" accion={btnDividir} />
            </View>
            <View style={style.fila}>
                <BotonCalc texto={"7"} accion={armarNumero} />
                <BotonCalc texto={"8"} accion={armarNumero} />
                <BotonCalc texto={"9"} accion={armarNumero} />
                <BotonCalc texto={"x"} color="#FF9427" accion={btnMultiplicar} />
            </View>
            <View style={style.fila}>
                <BotonCalc texto={"4"} accion={armarNumero} />
                <BotonCalc texto={"5"} accion={armarNumero} />
                <BotonCalc texto={"6"} accion={armarNumero} />
                <BotonCalc texto={"-"} color="#FF9427" accion={btnRestar} />
            </View>
            <View style={style.fila}>
                <BotonCalc texto={"1"} accion={armarNumero} />
                <BotonCalc texto={"2"} accion={armarNumero} />
                <BotonCalc texto={"3"} accion={armarNumero} />
                <BotonCalc texto={"+"} color="#FF9427" accion={btnSumar} />
            </View>
            <View style={style.fila}>
                <BotonCalc texto={"0"} ancho={true} accion={armarNumero} />
                <BotonCalc texto={"."} accion={armarNumero} />
                <BotonCalc texto={"="} color="#FF9427" accion={calcular} />
            </View>
        </View>
    )
}
