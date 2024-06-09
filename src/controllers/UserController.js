const UserService = require('../services/UserService');

class UserController {
   static async register(req, res) {
      try {
         const user = await UserService.register(req.body);
         res.status(201).json(user);
      } catch (error) {
         res.status(400).json({ error: error.message });
      }
   }

   static async login(req, res) {
      try {
         const user = await UserService.login(req.body);
         res.status(200).json(user);
      } catch (error) {
         res.status(400).json({ error: error.message });
      }
   }

   static async logout(req, res) {
      try {
         await UserService.logout(req.body.id);
         res.status(200).json({ message: 'Logged out successfully' });
      } catch (error) {
         res.status(400).json({ error: error.message });
      }
   }
}

module.exports = UserController;
