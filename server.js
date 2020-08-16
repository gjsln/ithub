const path = require('path');

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/jobdescriptions/', (req, res) => {
  res.sendFile(path.join(__dirname, 'server', 'data.json'));
});

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
