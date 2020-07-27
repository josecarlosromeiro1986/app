import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function NotasList({ materias }) {
    return (
        <View style={style.container}>
            <View style={style.materia}>
                <Text>{materias} </Text>
            </View>
            <Text style={style.notas}>1 Bim</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: '#000'
    },
    materia: {
        width: 120,
        borderColor: '#000',
    },
    notas: {
        width: 50,
    }
})