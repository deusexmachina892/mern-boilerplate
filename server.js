const express = require('express');

const app = express();

//Production Setup
if(process.env.NODE_ENV === "production"){
    //for serving production assets
    app.use(express.static('client/build'));

    //for serving index.html, if route called is not recognized
    const path = require('path');
    app.get('*', (req, res)=>{
        res.sendFile(path.resolve('client', 'build', 'index.html'));
    })
}

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server is running on port ${port}`));