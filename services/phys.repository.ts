import {dbInstanse} from '../db';

export default class PhysRepository {
    public async addUser(name, surname, patron, login, password, occupId, orgId, statusId) {
        return await dbInstanse.query(`INSERT INTO phys_emp (name, surname, patron, login, password, occupation_id, organization_id, status_id) VALUES ('${name}', '${surname}', '${patron}', '${login}', '${password}', ${occupId}, ${orgId}, ${statusId});`);
    }
    public async getUserById(id) {
        return await dbInstanse.query(`SELECT * FROM phys_emp WHERE id = ${id};`);
    }
    public async deleteUserById(id) {
        return await dbInstanse.query(`DELETE DROM phys_emp WHERE id = ${id};`);
    }
    public async getAllUsers() {
        return await dbInstanse.query(`SELECT * FROM phys_emp;`);
    }
}