import {dbInstanse} from '../db';

export default class NewsRepository {
    public async addNewNewsEvent(name, dateOfCreation, payload, dateOfPublish, dateOfArchivation, sizeOf, physId, newsEventTypeId) {
        return await dbInstanse.query(`INSERT INTO news_event (name, date_of_creation, payload, date_of_publish, date_of_archivation, sizeof, phys_id, type_id) VALUES ('${name}', '${dateOfCreation}', '${payload}', '${dateOfPublish}', '${dateOfArchivation}', ${sizeOf}, ${physId}, ${newsEventTypeId});`);
    }
    public async getNewsEventById(id) {
        return await dbInstanse.query(`SELECT * FROM news_event WHERE id = ${id};`);
    }
    public async getAllNewsEvents() {
        return await dbInstanse.query(`SELECT * FROM news_event;`);
    }
    public async deleteNewsEventById(id) {
        return await dbInstanse.query(`DELETE FROM news_event WHERE id = ${id};`);
    }
};