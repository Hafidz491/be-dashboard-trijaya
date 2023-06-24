const db = require('../database/models/');

exports.addProject = async (req, res) => {
  const { instansiName, projectNumber, address } = req.body;
  try {
    const newProject = await db.Project.create({
      instansiName,
      projectNumber,
      address,
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
    const projects = await db.Project.findAll({});
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

exports.updateProject = async (req, res) => {
  const { instansiName, projectNumber, address } = req.body;
  const { id } = req.params;
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
};

// TODO: delete project

// TODO: delete item