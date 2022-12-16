import {dbInstanse} from '../db';

export default class AttachmentRepository {
    public async addAttachment(name, sizeof, shortDesc, typeId) {
        return await dbInstanse.query(`INSERT INTO attachments (name, sizeof, short_desc, type_id) VALUES ('${name}', ${sizeof}, '${shortDesc}', ${typeId});`);
    }
    public async deleteAttachmentById(id) {
        return await dbInstanse.query(`DELETE FROM attachments WHERE id = ${id};`);
    }
    public async getAttachmentById(id) {
        return await dbInstanse.query(`SELECT * FROM attachments WHERE id = ${id};`);
    }
    public async getAllAttachments() {
        return await dbInstanse.query(`SELECT * FROM attachments;`);
    }
    public async connectAttachmentEvent(eventId, attachmentId) {
        return await dbInstanse.query(`INSERT INTO news_event_attachments (news_event_id, attachment_id) VALUES (${eventId}, ${attachmentId});`);
    }
}