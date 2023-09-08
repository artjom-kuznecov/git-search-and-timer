import axios from 'axios'

export class CardService {
    static async getAll (input) {
        const response = await axios.get(`https://api.github.com/search/repositories?q=${input}`) 
        return response.data.items
        
    }
}