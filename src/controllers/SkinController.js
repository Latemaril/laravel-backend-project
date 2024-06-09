const SkinService = require('../services/SkinService');

class SkinController {
   static async createSkin(req, res) {
      try {
         const skin = await SkinService.createSkin(req.body);
         res.status(201).json(skin);
      } catch (error) {
         res.status(400).json({ error: error.message });
      }
   }

   static async publishSkin(req, res) {
      try {
         const skin = await SkinService.publishSkin(req.params.id);
         res.status(200).json(skin);
      } catch (error) {
         res.status(400).json({ error: error.message });
      }
   }

   static async getPublishedSkins(req, res) {
      try {
         const skins = await SkinService.getPublishedSkins();
         res.status(200).json(skins);
      } catch (error) {
         res.status(400).json({ error: error.message });
      }
   }

   static async shareSkinWithUser(req, res) {
      try {
         const { skinId, userId } = req.body;
         await SkinService.shareSkinWithUser(skinId, userId);
         res.status(200).json({ message: 'Skin shared successfully' });
      } catch (error) {
         res.status(400).json({ error: error.message });
      }
   }

   static async getSharedSkins(req, res) {
      try {
         const { userId } = req.params;
         const skins = await SkinService.getSharedSkinsForUser(userId);
         res.status(200).json(skins);
      } catch (error) {
         res.status(400).json({ error: error.message });
      }
   }

   static async getSkinsByUser(req, res) {
      try {
         const { userId } = req.params;
         const skins = await SkinService.getSkinsByUser(userId);
         res.status(200).json(skins);
      } catch (error) {
         res.status(400).json({ error: error.message });
      }
   }

   static async getSkinByIdAndUser(req, res) {
      try {
         const { userId, skinId } = req.params;
         const skin = await SkinService.getSkinByIdAndUser(userId, skinId);
         res.status(200).json(skin);
      } catch (error) {
         res.status(404).json({ error: error.message });
      }
   }

   static async updateSkinName(req, res) {
      try {
         const { userId, skinId } = req.params;
         const { name } = req.body;
         const updatedSkin = await SkinService.updateSkinName(userId, skinId, name);
         res.status(200).json(updatedSkin);
      } catch (error) {
         res.status(400).json({ error: error.message });
      }
   }

   static async deleteSkin(req, res) {
      try {
         const { userId, skinId } = req.params;
         await SkinService.deleteSkin(userId, skinId);
         res.status(200).json({ message: 'Skin deleted successfully' });
      } catch (error) {
         res.status(400).json({ error: error.message });
      }
   }
}

module.exports = SkinController;
