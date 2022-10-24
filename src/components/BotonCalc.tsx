import React from 'react'
import { ColorValue, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
    texto: String;
    color?: ColorValue;
    ancho?: boolean;
    accion: (numeroTexto : String) => void;
}

export const BotonCalc = ({ texto, color = "#2d2d2d", ancho = false, accion }: Props) => {
    return (
        <TouchableOpacity
            onPress={()=> accion(texto)}
        >
            <View style={{
                ...style.boton,
                backgroundColor: color,
                width: ancho ? 180 : 80
            }}>
                <Text style={{
                    ...style.textoBoton,
                    color: (color === '#9B9B9B') ? 'black' : 'white'
                }}>{texto}</Text>
            </View>
        </TouchableOpacity>
    )


}

const style = StyleSheet.create({
    boton: {
        height: 80,
        width: 80,
        backgroundColor: "#2d2d2d",
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    textoBoton: {
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
        fontWeight: '300'
    }
})