const SkinRepository = require('../repositories/SkinRepository');
const SharedSkinRepository = require('../repositories/SharedSkinRepository');

class SkinService {
   async createSkin({ userId, name }) {
      return await SkinRepository.create({ userId, name });
   }

   async publishSkin(skinId) {
      const skin = await SkinRepository.findById(skinId);
      if (!skin) {
         throw new Error('Skin not found');
      }
      skin.isPublished = true;
      return await SkinRepository.update(skin);
   }

   async getPublishedSkins() {
      return await SkinRepository.findAllPublished();
   }

   async shareSkinWithUser(skinId, userId) {
      return await SharedSkinRepository.create({ skinId, userId });
   }

   async getSharedSkinsForUser(userId) {
      return await SharedSkinRepository.findAllByUserId(userId);
   }

   async getSkinsByUser(userId) {
      return await SkinRepository.findByUserId(userId);
   }

   async getSkinByIdAndUser(userId, skinId) {
      const skin = await SkinRepository.findByIdAndUserId(skinId, userId);
      if (!skin) {
         throw new Error('Skin not found');
      }
      return skin;
   }

   async updateSkinName(userId, skinId, newName) {
      const skin = await SkinRepository.findByIdAndUserId(skinId, userId);
      if (!skin) {
         throw new Error('Skin not found');
      }
      skin.name = newName;
      return await SkinRepository.update(skin);
   }
}

module.exports = new SkinService();
