const db = require('../database/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secretKey = 'sangat-rahasia';

// TODO: Register user
exports.register = async (req, res) => {
  try {
    const { name, email, role, password } = req.body;

    const user = await db.User.findOne({
      where: { email: email },
    });

    if (user) {
      return res.status(409).json({
        status: 409,
        message: 'Email sudah terdaftar',
      });
    }

    bcrypt.hash(password, 10).then(async (hash) => {
      const newUser = await db.User.create({
        name: name,
        email: email,
        role: role,
        password: hash,
      });

      res.json({
        status: 200,
        message: 'Berhasil menambahkan user',
        data: newUser,
      });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: 500,
      message: 'Internal Server Error',
    });
  }
};

// TODO: Login user
exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await db.User.findOne({
    where: { email: email },
  });

  if (!user)
    return res.status(404).json({
      code: '404',
      message: 'User tidak ditemukan',
    });

  bcrypt.compare(password, user.password).then((x) => {
    if (!x)
      return res.status(401).json({
        code: '401',
        message: 'Email atau Password salah',
      });

    let accessToken = jwt.sign({ id: user.id, email: user.email }, secretKey);

    res.json({
      code: '200',
      message: 'Login Berhasil',
      dataUser: {
        id: user.id,
        name: user.name,
        role: user.role,
      },
      token: accessToken,
    });
  });
};

// TODO: Get detail user
exports.detail = async (req, res) => {
  const { id } = req.params;

  const user = await db.User.findOne({
    where: { id: id },
  });

  if (!user)
    return res.status(404).json({
      code: 404,
      message: 'User tidak ditemukan',
    });

  res.json({
    code: 200,
    message: 'Berhasil mendapatkan detail user',
    data: user,
  });
};

// TODO: Get all users
exports.all = async (req, res) => {
  const users = await db.User.findAll();

  res.json({
    code: 200,
    message: 'Berhasil mendapatkan semua user',
    data: users,
  });
};

// TODO: Delete user
exports.delete = async (req, res) => {
  const { id } = req.params;

  const user = await db.User.findOne({
    where: { id: id },
  });

  if (!user)
    return res.status(404).json({
      code: 404,
      message: 'User tidak ditemukan',
    });

  await user.destroy();

  res.json({
    code: 200,
    message: 'Berhasil menghapus user',
    data: user,
  });
};
