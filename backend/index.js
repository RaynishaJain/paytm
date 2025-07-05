const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
const mainRouter = require("./routes/index");

app.use("/api/v1", mainRouter);

// Change port to 3000 to avoid conflict with frontend
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});

// Routes
// /api/v1/user/signup
// /api/v1/user/signin
// /api/v1/user/changePassword
// /api/v1/account/transferMoney
// /api/v1/account/balance
