import express from 'express';
import DictionaryController from './controllers/dictionary.controller';
import OrganizationController from './controllers/organization.controller';
import PhysController from './controllers/phys.controller';
import NewsController from './controllers/news.controller';
import TaskController from './controllers/task.controller';
import bodyParser from 'body-parser';
import cors from "cors";

require('dotenv').config();

const corsOpt = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
};

const app = express();
app.use(cors(corsOpt));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

new DictionaryController(app).define();
new OrganizationController(app).define();
new PhysController(app).define();
new NewsController(app).define();
new TaskController(app).define();

(function() {
    app.listen(process.env.APP_PORT, () => {
        console.log('Высер на ' + process.env.APP_PORT);
    });
})();