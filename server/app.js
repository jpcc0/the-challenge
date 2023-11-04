const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const challengeRoutes = require('./routes/challengeRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB (replace <username>, <password>, and <dbname> with actual values)
mongoose.connect('mongodb://<username>:<password>@host:port/<dbname>', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/challenges', challengeRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
