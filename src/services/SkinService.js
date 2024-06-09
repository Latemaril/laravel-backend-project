const Skin = require('../models/Skin');
const SharedSkin = require('../models/SharedSkin');

class SkinService {
   static async createSkin({ userId, name }) {
      const skin = await Skin.create({ userId, name });
      return skin;
   }

   static async publishSkin(skinId) {
      const skin = await Skin.findByPk(skinId);
      if (!skin) {
         throw new Error('Skin not found');
      }
      skin.isPublished = true;
      await skin.save();
      return skin;
   }

   static async getPublishedSkins() {
      const skins = await Skin.findAll({
         where: { isPublished: true },
         attributes: ['id', 'userId', 'name']
      });
      return skins;
   }

   static async shareSkinWithUser(skinId, userId) {
      await SharedSkin.create({ skinId, userId });
   }

   static async getSharedSkinsForUser(userId) {
      const sharedSkins = await SharedSkin.findAll({
         where: { userId },
         include: {
            model: Skin,
            attributes: ['id', 'userId', 'name']
         }
      });

      return sharedSkins.map(sharedSkin => sharedSkin.Skin);
   }

   static async getSkinsByUser(userId) {
      const skins = await Skin.findAll({
         where: { userId },
         attributes: ['id', 'userId', 'name']
      });
      return skins;
   }

   static async getSkinByIdAndUser(userId, skinId) {
      const skin = await Skin.findOne({
         where: {
            userId,
            id: skinId
         },
         attributes: ['id', 'userId', 'name']
      });

      if (!skin) {
         throw new Error('Skin not found');
      }

      return skin;
   }
}

module.exports = SkinService;
