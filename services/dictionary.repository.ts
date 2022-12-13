import {dbInstanse} from '../db';

export default class DictionaryRepository {
    public async addPhone(phone) {
        return await dbInstanse.query(`INSERT INTO phones_dict (phone) VALUES ('${phone}');`);
    }
    public async getPhoneById(id) {
        return await dbInstanse.query(`SELECT * FROM phones_dict WHERE id = ${id};`);
    }
    public async addEmail(email) {
        return await dbInstanse.query(`INSERT INTO email_dict (email) VALUES ('${email}');`);
    }
    public async getEmailById(id) {
        return await dbInstanse.query(`SELECT * FROM email_dict WHERE id = ${id};`);
    }
    public async addAddress(address) {
        return await dbInstanse.query(`INSERT INTO addr_dict (address) VALUES ('${address}');`);
    }
    public async getAddressById(id) {
        return await dbInstanse.query(`SELECT * FROM addr_dict WHERE id = ${id};`);
    }
    public async addDomain(domain) {
        return await dbInstanse.query(`INSERT INTO domain_dict (domain) VALUES ('${domain}');`);
    }
    public async getDomainById(id) {
        return await dbInstanse.query(`SELECT * FROM domain_dict WHERE id = ${id};`);
    }
    public async addStatus(status) {
        return await dbInstanse.query(`INSERT INTO status_dict (name) VALUES ('${status}');`);
    }
    public async getStatusById(id) {
        return await dbInstanse.query(`SELECT * FROM status_dict WHERE id = ${id};`);
    }
    public async addOccupation(occupation) {
        return await dbInstanse.query(`INSERT INTO occupation_dict (name) VALUES ('${occupation}');`);
    }
    public async getOccupationById(id) {
        return await dbInstanse.query(`SELECT * FROM occupation_dict WHERE id = ${id};`);
    }
    public async addNewsType(newsType) {
        return await dbInstanse.query(`INSERT INTO news_event_type_dict (name) VALUES ('${newsType}');`);
    }
    public async getNewsTypeById(id) {
        return await dbInstanse.query(`SELECT * FROM news_event_type_dict WHERE id = ${id};`);
    }
    public async addAttachmentType(attachmentType) {
        return await dbInstanse.query(`INSERT INTO attachment_type_dict (name) VALUES ('${attachmentType}');`);
    }
    public async getAttachmentTypeById(id) {
        return await dbInstanse.query(`SELECT * FROM attachment_type_dict WHERE id = ${id};`);
    }
}