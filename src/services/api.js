import axios from 'axios'

const api = axios.create({
    baseURL: 'http://172.17.0.1:3333'
})

export default api
/**
 * iOs com Emulador: localhost
 * iOs com fisico: Ip da Maquina
 * Android com Emulador: adb reverse
 * Android com Emulador: Usar Ip especifico 
 * Android com fisico: Ip da maquina
 */