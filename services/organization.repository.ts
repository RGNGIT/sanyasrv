import {dbInstanse} from '../db';

export default class OrganizationRepository {
    public async addOrganization(name, addrKey, emailKey, domainKey, phoneKey, shName?) {
        return await dbInstanse.query(`INSERT INTO organization (name, sh_name, addr_key, email_key, domain_key, phone_key) VALUES ('${name}', '${shName}', ${addrKey}, ${emailKey}, ${domainKey}, ${phoneKey});`);
    }
    public async getOrganizationBuId(id) {
        return await dbInstanse.query(`SELECT * FROM organization WHERE id = ${id};`);
    }
}