import 'babel-polyfill';
import Koa from 'koa';
import cors from 'kcors';
import json from 'koa-json';
import bodyParser from 'koa-bodyparser';
import {mountAPI} from './app.router';

const app = new Koa();
app.use(cors());
app.use(json());
app.use(bodyParser());

mountAPI(app);

app.listen(process.env.PORT || 5000);