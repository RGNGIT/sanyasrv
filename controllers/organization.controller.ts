import OrganizationRepository from "../services/organization.repository";
import DictionaryRepository from "../services/dictionary.repository";

interface Organization {
    id: number;
    name: string;
    shName?: string;
    addr: {};
    email: {};
    domain: {};
    phone: {};
} 

export default class OrganizationController {
    private app;

    constructor(app) {
        this.app = app;
    }

    public define() {
        this.app.post('/addOrganization', async (req, res) => {
            try {
                const orgRepo = new OrganizationRepository();
                const {name, shName, addrKey, emailKey, domainKey, phoneKey} = req.body;
                await orgRepo.addOrganization(name, addrKey, emailKey, domainKey, phoneKey, shName);
                res.send("Done");
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
        this.app.get('/organizationById/:id', async (req, res) => {
            try {
                const orgRepo = new OrganizationRepository();
                const dickRepo = new DictionaryRepository();
                const {id} = req.params;
                const [organizations] = await orgRepo.getOrganizationBuId(id);
                const [addrs] = await dickRepo.getAddressById((organizations as {}[])[0]['addr_key']);
                const [emails] = await dickRepo.getEmailById((organizations as {}[])[0]['email_key']);
                const [domains] = await dickRepo.getDomainById((organizations as {}[])[0]['domain_key']);
                const [phones] = await dickRepo.getPhoneById((organizations as {}[])[0]['phone_key']);
                res.json({
                    id: (organizations as {}[])[0]['id'] as number,
                    name: (organizations as {}[])[0]['name'] as string,
                    shName: (organizations as {}[])[0]['sh_name'] as string,
                    addr: addrs[0],
                    email: emails[0],
                    domain: domains[0],
                    phone: phones[0]
                } as Organization);
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
        this.app.get('/organizations', async (req, res) => {
            try {
                const orgRepo = new OrganizationRepository();
                const [orgs] = await orgRepo.getAllOrganizations();
                res.json(orgs);
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
        this.app.delete('/organization/:id', async (req, res) => {
            try {
                const orgRepo = new OrganizationRepository();
                const {id} = req.params;
                await orgRepo.deleteOrganizationById(id);
                res.send("Done");
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
    }
}