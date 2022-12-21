import {dbInstanse} from '../db';

export default class TaskController {
    private app;

    constructor(app) {
        this.app = app;
    }

    public define() {
        this.app.get('/task1', async (req, res) => {
            try {
                const {from, to, statusId} = req.params;
                const [result] = await dbInstanse.query(
                    `SELECT phys_emp.name, phys_emp.surname, phys_emp.patron 
                    FROM phys_emp, news_event 
                    WHERE phys_emp.status_id = ${statusId} AND 
                    news_event.phys_id = phys_emp.id AND 
                    news_event.date_of_publish between '${from}' and '${to}';`);
                res.json(result);
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
        this.app.get('/task2', async (req, res) => {
            try {
                const {from, to, statusId} = req.params;
                
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
    }
};