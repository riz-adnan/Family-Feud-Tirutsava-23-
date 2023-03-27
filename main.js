
const express= require('express');
const path= require('path');

const app=express();
const port=80;
app.use('/static',express.static('static'));
app.use(express.urlencoded());
app.engine('pug', require('pug').__express);
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'pug');

app.get('/',(req,res)=>{
    
    res.status(200).render('home.pug')
});
app.get('/round1',(req,res)=>{
    
    res.status(200).render('round1.pug')
});
app.get('/round2',(req,res)=>{
    
    res.status(200).render('round2.pug')
});
app.listen(port,()=>{
    console.log(`the site is getting hosted on ${port}`);
});

