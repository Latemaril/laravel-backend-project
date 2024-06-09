const SharedSkin = require('../models/SharedSkin');
const Skin = require('../models/Skin');

class SharedSkinRepository {
   async create(data) {
      return await SharedSkin.create(data);
   }

   async findAllByUserId(userId) {
      const sharedSkins = await SharedSkin.findAll({
         where: { userId },
         include: {
            model: Skin,
            attributes: ['id', 'userId', 'name']
         }
      });

      return sharedSkins.map(sharedSkin => sharedSkin.Skin);
   }
}

module.exports = new SharedSkinRepository();
