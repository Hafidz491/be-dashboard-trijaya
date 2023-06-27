const { path } = require('express/lib/application');
const db = require('../database/models/');
const sequelize = require('sequelize');

exports.addInstansi = async (req, res) => {
  try {
    const { instansiName, projectNumber, address } = req.body;
    if (!req.files) {
      return res.status(400).json({
        code: 400,
        message: 'Tidak ada file',
      });
    }

    const document = req.files.document;
    const fileExtension = document.name.split('.').pop();
    const time = Math.floor(Date.now() / 1000);

    if (fileExtension !== 'pdf') {
      return res.status(400).json({
        code: 400,
        message: 'File harus berupa pdf',
      });
    }

    const documentName = `Document-${instansiName}-${time}.${fileExtension}`;
    const newProject = await db.Project.create({
      instansiName,
      projectNumber,
      address,
      document: documentName,
      isFinished: false,
    });

    document.mv(`./public/document/${instansiName}/${documentName}`);

    res.json({
      status: 200,
      message: 'Berhasil menambahkan project',
      data: newProject,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
    });
  }
};

exports.addItemToProject = async (req, res) => {
  const { instansiId, itemName, itemVolume, itemUnit, price } = req.body;
  try {
    const newItem = await db.Item.create({
      itemName,
      itemVolume,
      itemUnit,
      price,
      instansiId: instansiId,
    });
    res.json({
      status: 200,
      message: 'Berhasil menambahkan item',
      data: newItem,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 500,
      message: 'Internal Server Error',
    });
  }
};

exports.getAllProjects = async (req, res) => {
  // get all projects from table Projects
  try {
    const projects = await db.Project.findAll({
      attributes: [
        'id',
        'instansiName',
        'createdAt',
        [sequelize.fn('SUM', sequelize.col('items.price')), 'totalPrice'],
      ],
      include: [
        {
          model: db.Item,
          as: 'items',
          attributes: [],
        },
      ],
      group: ['Project.id'],
    });
    res.json({
      status: 'success',
      data: projects,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getAllProjectByStatus = async (req, res) => {
  // get all projects by status isFinished
  const { status } = req.params;

  try {
    const projects = await db.Project.findAll({
      where: { isFinished: status },
      attributes: [
        'id',
        'instansiName',
        'createdAt',
        [sequelize.fn('SUM', sequelize.col('items.price')), 'totalPrice'],
      ],
      include: [
        {
          model: db.Item,
          as: 'items',
          attributes: [],
        },
      ],
      group: ['Project.id'],
    });
    res.json({
      status: 'success',
      data: projects,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getInstanstiWithItem = async (req, res) => {
  // get all item by instansi id
  const instansiId = req.params.id;

  try {
    const instansi = await db.Project.findOne({
      where: { id: instansiId },
      include: { model: db.Item, as: 'items' },
    });
    res.json({
      status: 'success',
      data: instansi,
    });
  } catch (error) {
    console.log(error);
  }
};

// Update Project
exports.updateProject = async (req, res) => {
  const { instansiName, projectNumber, address } = req.body;
  const { id } = req.params;
  if (!req.files) {
    return res.status(400).json({
      code: 400,
      message: 'Tidak ada file',
    });
  }
  try {
    const document = req.files.document;
    const fileExtension = document.name.split('.').pop();
    const time = Math.floor(Date.now() / 1000);

    if (fileExtension !== 'pdf') {
      return res.status(400).json({
        code: 400,
        message: 'File harus berupa pdf',
      });
    }

    const documentName = `Document-${instansiName}-${time}.${fileExtension}`;

    const updateProject = await db.Project.update(
      {
        instansiName,
        projectNumber,
        address,
        document: documentName,
      },
      {
        where: { id: id },
      }
    );

    document.mv(`./public/document/${instansiName}/${documentName}`);

    res.json({
      status: 200,
      message: 'Berhasil mengupdate project',
      data: updateProject,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 500,
      message: 'Internal Server Error',
    });
  }
};

// Get Project By Id
exports.getProjectById = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await db.Project.findOne({
      where: { id: id },
      attributes: [
        'id',
        'instansiName',
        'projectNumber',
        'address',
        'document',
        'isFinished',
        'createdAt',
        [sequelize.fn('SUM', sequelize.col('items.price')), 'totalPrice'],
      ],
      include: [
        {
          model: db.Item,
          as: 'items',
          attributes: [],
        },
      ],
      group: ['Project.id'],
    });
    res.json({
      status: 'success',
      data: project,
    });
  } catch (error) {
    console.log(error);
  }
};

// TODO: delete project

// TODO: delete item
