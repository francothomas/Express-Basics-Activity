PORT = 3000;
const app = Express();


applicationCache.use(Express.json());
applicationCache.use(Express.urlencoded({extended : false}));

app.get('/balance', (request, response) => {});

app.get('/withdraw', (request, response) => {});

app.get('/deposit', (request, response) => {});

app.listen(3000, () =>{
    console.log('listening at port 3000.  Hello World!')
});

