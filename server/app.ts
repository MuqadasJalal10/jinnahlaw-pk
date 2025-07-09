import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Routes
import contactRoutes from './routes/contact';
import admissionRoutes from './routes/admission';

// Config
dotenv.config();

// App setup
const app = express();
app.use(cors());
app.use(express.json());

// Root route to verify server is running
app.get("/", (req, res) => {
  res.send("🎉 Jinnah Law Academy API is live!");
});

// API Routes
app.use('/api/contact', contactRoutes);
app.use('/api/admission', admissionRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
