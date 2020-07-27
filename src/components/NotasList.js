import React from 'react';
import { Text, View , StyleSheet} from 'react-native';

export default function NotasList( { materia } ){
    return(
        <View style={style.container}>
            <Text  style={style.TableCellTitulo}> { materia } </Text>
            <Text style={style.TableCell}>100</Text>
            <Text style={style.TableCell}>100</Text>
            <Text style={style.TableCell}>100</Text>
            <Text style={style.TableCell}>100</Text>
        </View>
    )
} 

const style = StyleSheet.create({ 
    container: {
        flexDirection :'row'
    },  
    TableCellTitulo:{
        width :150,
        borderWidth: 1,
        borderColor :"#000",
        paddingVertical: 5,
        paddingHorizontal: 5,
    },
    TableCell:{
        flex: 1,
        borderWidth: 1,
        borderColor :"#000",
        color: "#000",
        paddingVertical: 5,
        paddingHorizontal: 5,
        fontSize: 16,
        textAlign : 'center'
    }
})