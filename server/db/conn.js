const mongoose = require('mongoose');

const DB = "mongodb+srv://yashsavaniit22:yash123456@cluster0.oqqwo.mongodb.net/mernstack?retryWrites=true&w=majority&appName=Cluster0"


mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('MongoDB Connected...')).catch((err) => console.log(err.message));