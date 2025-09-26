import express from 'express';
import router from './routers/auth.router.js';
import messageRouter from './routers/messege.Router.js';
import path from 'path';
const app = express();
const port =process.env.port||3000;
app.use('/login', router );
app.use('/message', messageRouter);
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '../frontend/build')));
app.get('*', (req , res) => {
    res.sendFile(path.join(__dirname, '../frontend','dist', 'index.html'));
});
    
app.listen(port, () => {
    console.log(`http:// ${port}`);

});

export default app;