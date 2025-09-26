import express from 'express';
import router from './routers/auth.router.js';
import messageRouter from './routers/messege.Router.js';
const app = express();
const port =process.env.port||3000;
app.use('/login', router );
app.use('/message', messageRouter);
       
app.listen(port, () => {
    console.log(`http:// ${port}`);

});

export default app;