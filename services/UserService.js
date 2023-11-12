import axios from 'axios';

export default class UserService {
  static async login(username, password) {
    try {
      const response = await axios.get('https://dummyjson.com/users');
      // Получаем список пользователей из ответа
      // Ищем в ответе пользователя с такими username и password
      const user = response.data.users.find(
        u => u.username === username && u.password === password,
      );

      if (user) {
        // Пользователь найден, возвращаем данные пользователя
        return {success: true, user: user};
      } else {
        // Пользователь не найден, возвращаем сообщение об ошибке
        return {success: false, message: 'Неправильный логин или пароль'};
      }
    } catch (error) {
      // В случае ошибки в запросе, возвращаем информацию об ошибке
      return {
        success: false,
        message: 'Произошла ошибка при запросе данных пользователя',
      };
      //   return { success: false, message: error.message }; Не думаю что здесь стоит возвращать сообщение об ошибке
    }
  }
}
