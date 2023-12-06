const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());

// Connect to MongoDB 
mongoose.connect('mongodb://localhost:27107/bookconnectiondb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const allroutes = require('./routes/allroutes');


app.use('/api/books', allroutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
