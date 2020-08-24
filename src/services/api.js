import axios from 'axios'

export default api = axios.create({
    baseURL: 'http://localhost:3333'
})
/**
 * iOs com Emulador: localhost
 * iOs com fisico: Ip da Maquina
 * Android com Emulador: adb reverse
 * Android com Emulador: Usar Ip especifico 
 * Android com fisico: Ip da maquina
 */