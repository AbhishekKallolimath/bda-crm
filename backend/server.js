const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/leads', require('./routes/leads'));

// Hardcoded MongoDB URI (replace with your correct one)
const mongoURI = "mongodb://abhishek_k:Abhishek%407676@ac-czfuntp-shard-00-00.1ktozxy.mongodb.net:27017,ac-czfuntp-shard-00-01.1ktozxy.mongodb.net:27017,ac-czfuntp-shard-00-02.1ktozxy.mongodb.net:27017/bda-crm?ssl=true&replicaSet=atlas-gg2vnf-shard-0&authSource=admin&appName=bda-crm-cluster";
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB error:', err.message));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));