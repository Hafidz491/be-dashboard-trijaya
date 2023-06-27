const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifytoken');

const projectController = require('../controllers/project');

// Get
router.get('/all', projectController.getAllProjects);
router.get('/all/:status', projectController.getAllProjectByStatus);
router.get('/item/:id', projectController.getInstanstiWithItem);
router.get('/:id', projectController.getProjectById);

// Post
router.post('/add', verifyToken, projectController.addInstansi);
router.post('/add-item', verifyToken, projectController.addItemToProject);

// Put
router.put('/update/:id', verifyToken, projectController.updateProject);

// Delete
// TODO: Delete Project

// TODO: Delete Item

module.exports = router;
