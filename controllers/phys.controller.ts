import PhysRepository from "../services/phys.repository";
import DictionaryRepository from "../services/dictionary.repository";
import OrganizationRepository from "../services/organization.repository";
import HashService from "../services/hash.service";

interface Phys {
    name: string;
    surname: string;
    patron: string;
    login: string;
    password: string;
    organization: {};
    occupation: {};
    status: {};
}

export default class PhysController {
    private app;

    constructor(app) {
        this.app = app;
    }

    public define() {
        this.app.post('/addPhys', async (req, res) => {
            try {
                const physRepo = new PhysRepository();
                const hashService = new HashService();
                const {name, surname, patron, login, password, occupId, orgId, statusId} = req.body;
                const passwordDigest = hashService.encrypt(password);
                await physRepo.addUser(name, surname, patron, login, passwordDigest, occupId, orgId, statusId);
                res.send("Done");
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
        this.app.get('/physById/:id', async (req, res) => {
            try {
                const orgRepo = new OrganizationRepository();
                const physRepo = new PhysRepository();
                const dickRepo = new DictionaryRepository();
                const {id} = req.params;
                const [phys] = await physRepo.getUserById(id);
                const [occups] = await dickRepo.getOccupationById((phys as {}[])[0]['occupation_id'] as number);
                const [orgs] = await orgRepo.getOrganizationBuId((phys as {}[])[0]['organization_id'] as number);
                const [statuses] = await dickRepo.getStatusById((phys as {}[])[0]['status_id'] as number);
                res.json({
                    name: (phys as {}[])[0]['name'],
                    surname: (phys as {}[])[0]['surname'],
                    patron: (phys as {}[])[0]['patron'],
                    login: (phys as {}[])[0]['login'],
                    password: (phys as {}[])[0]['password'],
                    occupation: (occups as {}[])[0],
                    organization: (orgs as {}[])[0],
                    status: (statuses as {}[])[0],
                } as Phys);
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
    }
}