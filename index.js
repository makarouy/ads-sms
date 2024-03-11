require('dotenv').config({ path: './api.env' }); // Load environment variables from api.env file
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('SMSPool API Integration Server is running!');
});

app.post('/api/balance', async (req, res) => {
  try {
    const apiResponse = await axios.post('https://api.smspool.net/request/balance', {}, {
      headers: {
        'Authorization': `Bearer ${process.env.SMSPool_API_KEY}`
      }
    });
    res.json(apiResponse.data);
  } catch (error) {
    console.error('Error fetching balance:', error);
    res.status(500).json({ message: 'Failed to fetch balance' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
