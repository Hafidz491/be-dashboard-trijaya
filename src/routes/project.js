const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifytoken');

const projectController = require('../controllers/project');

/* GET listing. */
// Get All Project
router.get('/all', projectController.getAllProjects);
// Get All Information
router.get('/all/informations', projectController.getAllInformation);
// Get All Project per Month
router.get('/all/month', projectController.getAllProjectPerMonth);
// Get All Project Status per Month
router.get('/all/month/status', projectController.getAllProjectStatusPerMonth);
// Get All Project By Status
router.get('/all/:status', projectController.getAllProjectByStatus);
// Get Items in Project
router.get('/item/:id', projectController.getInstanstiWithItem);
// Get Project Details
router.get('/:id', projectController.getProjectById);

/* Post Listing */
// Add Project
router.post('/add', verifyToken, projectController.addInstansi);
// Add Item to Project
router.post('/add-item', verifyToken, projectController.addItemToProject);

// Put
router.put('/update/:id', verifyToken, projectController.updateProject);
router.put(
  '/update/finished/:id',
  verifyToken,
  projectController.updateProjectFinished
);

// Delete
// TODO: Delete Project

// TODO: Delete Item
router.delete('/delete-item/:id', verifyToken, projectController.deleteItem);

module.exports = router;
