import mongoose from "mongoose";

import React from 'react'

const URI = "mongodb://localhost:27017/";

const ConnectDB = async () => {
  await mongoose.connect(URI,{
    useNewurlParser:true,
    useUnifiedTopology:true,
    serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
    socketTimeoutMS: 45000,          // Increase socket timeout to 45 seconds
  })
  // console.log("DB Connected...");
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('MongoDB connection error:', err));
};

export default ConnectDB;