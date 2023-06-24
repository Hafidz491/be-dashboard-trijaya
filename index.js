// Express
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

const app = express();
const port = process.env.PORT || 5000;

// Url Endcoded
app.use(express.urlencoded({ extended: true }));
// Body Parser
app.use(bodyParser.json());
// Serve Static File in 'Public' Folder
app.use(express.static('public'));
// Allow Cors
app.use(cors());
// File Upload
app.use(
  fileUpload({
    createParentPath: true,
  })
);

// Route
const projectRouter = require('./src/routes/project');
const userRouter = require('./src/routes/user');

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.send(Buffer.from('<h1><center>REST API For Trijaya APP</h1></center>'));
});

// Route list
app.use('/project', projectRouter);
app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`Server Berjalan di http://localhost:${port}`);
});
