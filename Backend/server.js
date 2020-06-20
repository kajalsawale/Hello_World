const express = require('express');
const axios = require('axios');
var app = express();


//api to get all states data
app.get('/stats',(req,res) => {
    axios.get('http://covid19-india-adhikansh.herokuapp.com/states').then((response)=>{
        res.send(response.data);
    },(error)=>{
        res.send('Error');
    })
});


//api to get a particular state data
app.get('/stats/:state',(req,res) => {
   
    let state = req.params.state;
    axios.get("http://covid19-india-adhikansh.herokuapp.com/state/"+state).then((response) => {
        res.send(response.data);
        console.log(response);
    },(errorMessage) => {
        res.send('Error');

    })
})

app.get('/about',(req,res) => {
    res.send('About Page');
});

app.get('/bad',(req,res) => {
    res.send({
        errorMessage:'Unable to get Data'
    });
})
app.listen(3001);