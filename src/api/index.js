import axios from 'axios'

export default {
    getData: () => axios.get(`https://pokeapi.co/api/v2/pokemon`),
    getInfo: (url) => axios.get(url)
}