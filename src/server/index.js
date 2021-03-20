import express from 'express';
import path from 'path';
import helmet from 'helmet';
import cors from 'cors';
import compress from 'compression';

const app = express();
const root = path.join(__dirname, '../../');


app.use(helmet());
app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", "data:", "*.amazonaws.com"]
    }
}));
app.use(helmet.referrerPolicy({ policy: 'same-origin' }));
app.use(compress());
app.use(cors());



app.use('/', express.static(path.join(root, 'build/client')));
app.use('/uploads', express.static(path.join(root, 'uploads')));
app.get('/', (req, res, next) => {
    var random = Math.random() * (10 - 1) + 1
    res.sendFile(path.join(root, '/build/client/index.html'));
})
app.listen(8001, () => console.log('Listening on port 8001!'));