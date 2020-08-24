import React, { useState, useEffect } from 'react'
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
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

    async function handleAddProject() {
        const response = await api.post('/projects', {
            title: 'Novo Projeto Adicionado',
            owner: 'Natalia lindona'
          })

          setProjects([...projects, response.data])
    }

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#c3c3c3c3"/>
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Projetos</Text>
                <FlatList 
                data={projects}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                keyExtractor={project => project.id}
                renderItem={({ item: project }) => (
                <Text style={styles.project}>{project.title}</Text>
                )}
                />
                <TouchableOpacity style={styles.button} onPress={handleAddProject}>
                    <Text style={styles.buttonText}>Adicionar projeto</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c3c3c3c3',
        alignItems: "center",
        justifyContent: "center",
    },
    project: {
        color: '#7159c1',
        fontSize: 20,
    },
    title: {
        color: '#7159c1',
        fontSize: 30,
        fontWeight: 'bold'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: '#7159c1',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        width: '50%',
        height: '7%',
        marginBottom: 20
    }
})