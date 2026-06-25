const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const authRoutes = require("./routes/authRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
 
const app = express();
 
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
 
// app.use(express.static(path.join(__dirname, "views")));
 
app.use("/auth", authRoutes);
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/login.html'));
})
app.get("/dashboard", (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/admin.html'));
})
 
app.get("/dashboardd", (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/guest.html'));
})
 
 
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running di http://localhost:${PORT}`);
});
 
 
 