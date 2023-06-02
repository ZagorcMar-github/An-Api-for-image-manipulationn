const app= require('./app');
const objectDetection = require('./services/objectDetection')
const port =3000;

app.get('/',(req,res)=>{
    res.send("<h1>Welcome to my server </h1><br> no hack pls")
})
app.listen(port,()=>{//funkcija za zagon srverja
    console.log(`Server posluša port http//:localhost:${port}`)

})