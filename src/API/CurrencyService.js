import axios from 'axios'

export class CurrencyService {
    static async getAll (value) {
        const response = await axios.get(`https://api.github.com/search/repositories?q=${value}`) 
        return response.data.items
        
    }
}