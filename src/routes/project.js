const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifytoken');

const projectController = require('../controllers/project');

// Get
router.get('/all', projectController.getAllProjects);
router.get('/item/:id', projectController.getInstanstiWithItem);

// Post
router.post('/add', verifyToken, projectController.addInstansi);
router.post('/add-item', verifyToken, projectController.addItemToProject);

// Put
router.put('/update/:id', verifyToken, projectController.updateProject);

// Delete
// TODO: Delete Project

// TODO: Delete Item

module.exports = router;
