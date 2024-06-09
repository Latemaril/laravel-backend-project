const Skin = require('../models/Skin');

class SkinRepository {
   async create(data) {
      return await Skin.create(data);
   }

   async findById(skinId) {
      return await Skin.findByPk(skinId);
   }

   async findAllPublished() {
      return await Skin.findAll({
         where: { isPublished: true },
         attributes: ['id', 'userId', 'name']
      });
   }

   async findByUserId(userId) {
      return await Skin.findAll({
         where: { userId },
         attributes: ['id', 'userId', 'name']
      });
   }

   async findByIdAndUserId(skinId, userId) {
      return await Skin.findOne({
         where: {
            userId,
            id: skinId
         },
         attributes: ['id', 'userId', 'name']
      });
   }

   async update(skin) {
      return await skin.save();
   }

   async delete(skinId) {
      return await Skin.destroy({
         where: {
            id: skinId
         }
      });
   }
}

module.exports = new SkinRepository();
