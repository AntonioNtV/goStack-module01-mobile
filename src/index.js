import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

/**
 *  Não possuem valor semâtico (não possui significado)
 *  Não possui estilização própria
 *  Todos componentes possuem por padrao display flex
 * 
 *  View: div, footer, header, main, aside, section... (container)
 *  Text: p, span, strong, h1, h2, h3
 */

export default function App() {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>
            <View style={styles.container}>
                <Text style={styles.title}> Hello GoStack </Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    status: {
        backgroundColor: '#7159c1'
    },
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        color: '#ffffff',
        fontWeight: 'bold'
    }
})