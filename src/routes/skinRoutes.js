const express = require('express');
const SkinController = require('../controllers/SkinController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Skins
 *   description: Skin management
 */

/**
 * @swagger
 * /api/skins:
 *   post:
 *     summary: Create a new skin
 *     tags: [Skins]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - name
 *             properties:
 *               userId:
 *                 type: integer
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Skin created successfully
 *       400:
 *         description: Bad request
 */
router.post('/', SkinController.createSkin);

/**
 * @swagger
 * /api/skins/publish/{id}:
 *   post:
 *     summary: Publish a skin
 *     tags: [Skins]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Skin ID
 *     responses:
 *       200:
 *         description: Skin published successfully
 *       400:
 *         description: Bad request
 */
router.post('/publish/:id', SkinController.publishSkin);

/**
 * @swagger
 * /api/skins:
 *   get:
 *     summary: Get list of published skins
 *     tags: [Skins]
 *     responses:
 *       200:
 *         description: List of published skins
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   userId:
 *                     type: integer
 *       400:
 *         description: Bad request
 */
router.get('/', SkinController.getPublishedSkins);

/**
 * @swagger
 * /api/skins/share:
 *   post:
 *     summary: Share a skin with a user
 *     tags: [Skins]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - skinId
 *               - userId
 *             properties:
 *               skinId:
 *                 type: integer
 *               userId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Skin shared successfully
 *       400:
 *         description: Bad request
 */
router.post('/share', SkinController.shareSkinWithUser);

/**
 * @swagger
 * /api/skins/shared/{userId}:
 *   get:
 *     summary: Get list of skins shared with a user
 *     tags: [Skins]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: User ID
 *     responses:
 *       200:
 *         description: List of shared skins
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   userId:
 *                     type: integer
 *       400:
 *         description: Bad request
 */
router.get('/shared/:userId', SkinController.getSharedSkins);

/**
 * @swagger
 * /api/skins/user/{userId}:
 *   get:
 *     summary: Get list of skins created by a user
 *     tags: [Skins]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: User ID
 *     responses:
 *       200:
 *         description: List of user's skins
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   userId:
 *                     type: integer
 *       400:
 *         description: Bad request
 */
router.get('/user/:userId', SkinController.getSkinsByUser);

/**
 * @swagger
 * /api/skins/user/{userId}/skin/{skinId}:
 *   get:
 *     summary: Get a skin by user ID and skin ID
 *     tags: [Skins]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: User ID
 *       - in: path
 *         name: skinId
 *         schema:
 *           type: integer
 *         required: true
 *         description: Skin ID
 *     responses:
 *       200:
 *         description: Skin details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 userId:
 *                   type: integer
 *                 name:
 *                   type: string
 *       404:
 *         description: Skin not found
 */
router.get('/user/:userId/skin/:skinId', SkinController.getSkinByIdAndUser);

/**
 * @swagger
 * /api/skins/user/{userId}/skin/{skinId}:
 *   put:
 *     summary: Update a skin's name
 *     tags: [Skins]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: User ID
 *       - in: path
 *         name: skinId
 *         schema:
 *           type: integer
 *         required: true
 *         description: Skin ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Skin updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 userId:
 *                   type: integer
 *                 name:
 *                   type: string
 *       400:
 *         description: Bad request
 *       404:
 *         description: Skin not found
 */
router.put('/user/:userId/skin/:skinId', SkinController.updateSkinName);

/**
 * @swagger
 * /api/skins/user/{userId}/skin/{skinId}:
 *   delete:
 *     summary: Delete a skin by user ID and skin ID
 *     tags: [Skins]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: User ID
 *       - in: path
 *         name: skinId
 *         schema:
 *           type: integer
 *         required: true
 *         description: Skin ID
 *     responses:
 *       200:
 *         description: Skin deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       400:
 *         description: Bad request
 *       404:
 *         description: Skin not found
 */
router.delete('/user/:userId/skin/:skinId', SkinController.deleteSkin);

module.exports = router;
