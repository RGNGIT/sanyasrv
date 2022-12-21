import {dbInstanse} from '../db';

export default class TaskController {
    private app;

    constructor(app) {
        this.app = app;
    }

    public define() {
        this.app.get('/task1', async (req, res) => {
            try {
                const {from, to, statusKey} = req.query;
                const [result] = await dbInstanse.query(
                    `SELECT phys_emp.name, phys_emp.surname, phys_emp.patron 
                    FROM phys_emp, news_event 
                    WHERE phys_emp.status_id = ${statusKey} AND 
                    news_event.phys_id = phys_emp.id AND 
                    news_event.date_of_publish between '${from}' and '${to}';`);
                res.json(result);
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
        this.app.get('/task2', async (req, res) => {
            try {
                const {from, to} = req.query;
                const [result] = await dbInstanse.query(
                    `SELECT news_event_type_dict.name, news_event.date_of_publish 
                    FROM news_event_type_dict, news_event 
                    WHERE news_event.type_id = news_event_type_dict.id AND 
                    news_event.date_of_publish between '${from}' and '${to}';`);
                res.json(result);
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
        this.app.get('/task3', async (req, res) => {
            try {
                const {from, to} = req.query;
                const [result] = await dbInstanse.query(
                    `SELECT name, news_event.date_of_publish
                    FROM news_event 
                    WHERE news_event.date_of_publish between '${from}' and '${to}';`);
                let dateIterator = new Date(from).toISOString();
                let dynamics = {};
                while(new Date(dateIterator) < new Date(to)) {
                    for(const record of result) {
                        if(new Date(record['date_of_publish']).getFullYear() == new Date(dateIterator).getFullYear() && new Date(record['date_of_publish']).getMonth() == new Date(dateIterator).getMonth()) {
                            if(dynamics.hasOwnProperty(record['date_of_publish'])) {
                                dynamics[record['date_of_publish']]++;
                            } else {
                                dynamics[record['date_of_publish']] = 1;
                            }
                        }
                    }
                    let temp = new Date(dateIterator);
                    dateIterator = new Date(temp.setMonth(temp.getMonth() + 1)).toISOString();
                }
                res.json(dynamics);
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
    }
};