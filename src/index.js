import React, { useState, useEffect } from 'react'
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar } from 'react-native'
import api from './services/api'

/**
 *  Não possuem valor semâtico (não possui significado)
 *  Não possui estilização própria
 *  Todos componentes possuem por padrao display flex
 * 
 *  View: div, footer, header, main, aside, section... (container)
 *  Text: p, span, strong, h1, h2, h3
 */

export default function App() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        api.get('/projects').then(response => {
            setProjects(response.data)
        })
    }, [])

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>
            <SafeAreaView style={styles.container}>
                <FlatList 
                data={projects} 
                keyExtractor={project => project.id}
                renderItem={({ item: project }) => (
                <Text style={styles.project}>{project.title}</Text>
                )}
                />
            </SafeAreaView>
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
        alignItems: "center",
        justifyContent: "center"
    },
    project: {
        color: '#FFF',
        fontSize: 20,
    }
})