import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View, StyleSheet, AsyncStorage } from 'react-native';;

import StyleTemplate from '../../assets/style/template';
import NotasList from '../../src/components/NotasList';

import api from '../services/api';

export default function Notas({ navigation }) {
    const [Notas, setNotas] = useState([]);
    const [id, setId] = useState();
    const [materias, setMaterias] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('_id').then(storagedId => {
            setId(storagedId);
        })
        buscaMaterias(id);
    }, []);

    async function buscaMaterias(_id) {
        console.log('solicitando');

        // //email e senha
        const response = await api.put('/notas/_id', {
            "materia": nome,
            "notas": email
        });

        setMaterias(response.data.materias);
        setNotas(response.data.materias);
        console.log(materias);

        return materias;
    }

    return (
        <SafeAreaView style={StyleTemplate.container}>
            <ScrollView style={StyleTemplate.scroll}>
                <Text style={StyleTemplate.titulo}>Notas</Text>
                <View>
                    <View style={style.container}>
                        <Text style={style.tableHeader}>Matéria</Text>
                        <Text style={style.tableHeader}>1 Bim</Text>
                        <Text style={style.tableHeader}>2 Bim</Text>
                        <Text style={style.tableHeader}>3 Bim</Text>
                        <Text style={style.tableHeader}>4 Bim</Text>
                    </View>
                    {Notas.map((materias => <NotasList key={materias} materias={materias} />))}
                </View>
                <View>
                    <TouchableOpacity onPress={BackIndex}>
                        <Text style={style.back2Index}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )

    function BackIndex() {
        navigation.navigate('Index');
    }
};

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    back2Index: {
        color: '#000',
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
    },
    tableHeader: {
        flex: 0,
        borderColor: '#FFF',
        backgroundColor: '#000',
        color: '#FFF',
        paddingVertical: 5,
        paddingHorizontal: 15,
        fontSize: 16,

    }
})