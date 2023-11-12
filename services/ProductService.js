import axios from 'axios';

export default class ProductService {
    static async getProduct() {
        try {
            const response = await axios.get('https://dummyjson.com/products');
            return response.data;
        } catch (error) {
            return error;
        }
    }
}