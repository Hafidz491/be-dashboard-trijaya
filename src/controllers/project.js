const db = require('../database/models/');
const sequelize = require('sequelize');

// Add new Project
const addInstansi = async (req, res) => {
  const { instansiName, projectNumber, address } = req.body;
  if (!req.files) {
    try {
      const newProject = await db.Project.create({
        instansiName,
        projectNumber,
        address,
        document: null,
        isFinished: false,
      });

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
  } else {
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
  }
};

// Insert item to Project
const addItemToProject = async (req, res) => {
  const { instansiId, itemName, itemVolume, itemUnit, price, total } = req.body;
  try {
    const newItem = await db.Item.create({
      itemName,
      itemVolume,
      itemUnit,
      price,
      total,
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

// Get All Project
const getAllProjects = async (req, res) => {
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

// Get All Project by status
const getAllProjectByStatus = async (req, res) => {
  // get all projects by status isFinished
  const { status } = req.params;

  const isFinished = status === 'true' ? true : false;

  try {
    const projects = await db.Project.findAll({
      where: { isFinished: isFinished },
      attributes: [
        'id',
        'instansiName',
        'createdAt',
        'isFinished',
        [sequelize.fn('SUM', sequelize.col('items.total')), 'totalPrice'],
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

// Get item from instansi
const getInstanstiWithItem = async (req, res) => {
  // get all item by instansi id
  const instansiId = req.params.id;

  try {
    const instansi = await db.Project.findOne({
      where: { id: instansiId },
      attributes: [
        'id',
        'instansiName',
        'projectNumber',
        'address',
        'document',
        'isFinished',
        'createdAt',
        'updatedAt',
        [db.sequelize.fn('SUM', db.sequelize.col('total')), 'totalPrice'],
      ],
      include: {
        model: db.Item,
        as: 'items',
      },
      group: ['Project.id', 'items.id'],
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
const updateProject = async (req, res) => {
  const { instansiName, projectNumber, address } = req.body;
  const { id } = req.params;

  if (!req.files) {
    try {
      const updateProject = await db.Project.update(
        {
          instansiName,
          projectNumber,
          address,
        },
        {
          where: { id: id },
        }
      );

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
  } else {
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
  }
};
const updateProjectFinished = async (req, res) => {
  const { id } = req.params;
  try {
    const updateProject = await db.Project.update(
      {
        isFinished: true,
      },
      {
        where: { id: id },
      }
    );
    res.json({
      status: 200,
      message: 'Berhasil menyelesaikan project',
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
const getProjectById = async (req, res) => {
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
        [sequelize.fn('SUM', sequelize.col('items.total')), 'totalPrice'],
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

// Delete item
const deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await db.Item.destroy({
      where: { id: id },
    });
    res.json({
      status: 'success',
      data: item,
    });
  } catch (error) {
    console.log(error);
  }
};

// Get All Informations
const getAllInformation = async (req, res) => {
  // Query total income (sum of all items) for all projects
  const totalIncome = await db.Project.sum('total', {
    include: { model: db.Item, as: 'items' },
  });

  // Query projects that are finished
  const finishedProjects = await db.Project.count({
    where: { isFinished: true },
  });

  // Query projects that are unfinished
  const unfinishedProjects = await db.Project.count({
    where: { isFinished: false },
  });

  const newData = {
    totalIncome,
    finishedProjects,
    unfinishedProjects,
  };

  res.json({
    status: 'success',
    data: newData,
  });
};

// Get All Project per Month
const getAllProjectPerMonth = async (req, res) => {
  const projectStatsPerMonth = await db.Project.findAll({
    attributes: [
      [db.sequelize.literal('DATE_FORMAT(Project.createdAt, "%M")'), 'month'],
      [
        db.sequelize.literal(
          'SUM(CASE WHEN isFinished = true THEN 1 ELSE 0 END)'
        ),
        'totalProjects',
      ],
      [db.sequelize.fn('SUM', db.sequelize.col('items.total')), 'totalRevenue'],
    ],
    include: [
      {
        model: db.Item,
        as: 'items',
        attributes: [],
      },
    ],
    group: [db.sequelize.literal('MONTH(Project.createdAt)')],
  });
  res.json({
    status: 'success',
    data: projectStatsPerMonth,
  });
};

// Get All Project Status per Month
const getAllProjectStatusPerMonth = async (req, res) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const finishedAndUnfinishedProjectsPerMonth = await db.Project.findAll({
    attributes: [
      [db.sequelize.literal('DATE_FORMAT(createdAt, "%M")'), 'month'],
      [
        db.sequelize.literal(
          'SUM(CASE WHEN isFinished = true THEN 1 ELSE 0 END)'
        ),
        'totalFinishedProjects',
      ],
      [
        db.sequelize.literal(
          'SUM(CASE WHEN isFinished = false THEN 1 ELSE 0 END)'
        ),
        'totalUnfinishedProjects',
      ],
    ],
    where: db.sequelize.where(
      db.sequelize.fn('YEAR', db.sequelize.col('createdAt')),
      currentYear
    ),
    group: [db.sequelize.literal('MONTH(createdAt)')],
  });

  res.json({
    status: 'success',
    data: finishedAndUnfinishedProjectsPerMonth,
  });
};

module.exports = {
  addInstansi,
  addItemToProject,
  getAllProjects,
  getAllProjectByStatus,
  getInstanstiWithItem,
  updateProject,
  updateProjectFinished,
  getProjectById,
  deleteItem,
  getAllInformation,
  getAllProjectPerMonth,
  getAllProjectStatusPerMonth,
};
