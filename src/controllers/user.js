const db = require('../database/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secretKey = 'sangat-rahasia';

exports.register = async (req, res) => {
  try {
    const { nama, email, password } = req.body;

    bcrypt.hash(password, 10).then(async (hash) => {
      const newUser = await db.User.create({
        name: nama,
        email: email,
        password: hash,
      });

      res.json({
        status: 200,
        message: 'Berhasil Rgistrasi',
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

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await db.User.findOne({
    where: { email: email },
  });

  if (!user)
    return res.status(404).json({
      code: '404',
      message: 'User Not Found',
    });

  bcrypt.compare(password, user.password).then((x) => {
    if (!x)
      return res.status(401).json({
        code: '401',
        message: 'Wrong Username or Password',
      });

    let accessToken = jwt.sign({ id: user.id, email: user.email }, secretKey);

    res.json({
      code: '200',
      message: 'Login Success',
      token: accessToken,
    });
  });
};

// TODO: Get all users
