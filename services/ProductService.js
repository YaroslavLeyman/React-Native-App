import axios from 'axios';

export default class ProductService {
  static async getProduct() {
    try {
      const response = await axios.get('https://dummyjson.com/products');

      if (response.data.products.length > 0) {
        return {success: true, products: response.data.products};
      } else {
        return {success: false, message: 'Нет данных'};
      }

    } catch (error) {
      return {
        success: false,
        message: 'Произошла ошибка при запросе данных пользователя',
      };
    }
  }
}
