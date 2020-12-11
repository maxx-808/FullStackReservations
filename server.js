const express = require("express");
const app = express();
const PORT = 6500;

const apiRoutes = require("./routes/apiRoutes");
const clientRoutes = require("./routes/clientRoutes");

app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);
app.use("/", clientRoutes);

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
