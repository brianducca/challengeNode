const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoute');
const policieRoutes = require('./routes/policieRoute');
const errorHandler = require("./middleware/errorHandler");
const app = express();
const PORT = 3000;



app.use(express.json());

//Routes
app.use("/api/user", userRoutes);
app.use("/api/policie", policieRoutes);

// CORS Handling
app.use(cors());

//Error Handling middleware
app.use(errorHandler);

app.listen(PORT, function(req, res) {
    console.log("API running on port:" + PORT);
});