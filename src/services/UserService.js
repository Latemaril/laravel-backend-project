const bcrypt = require('bcryptjs');
const User = require('../models/User');

class UserService {
   static async register({ username, password }) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({ username, password: hashedPassword });
      return user;
   }

   static async login({ username, password }) {
      const user = await User.findOne({ where: { username } });
      if (!user) {
         throw new Error('Invalid username or password');
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
         throw new Error('Invalid username or password');
      }

      return user;
   }

   static async logout(userId) {
      // Логика для разлогирования пользователя, если потребуется
      return true;
   }
}

module.exports = UserService;
