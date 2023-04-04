const express = require('express');
const app = express();
const cors = require("cors");
const corsOptions = {
   origin:'*', 
   credentials:true,
   optionSuccessStatus:200,
}

app.use(cors(corsOptions));

app.listen(5000);
