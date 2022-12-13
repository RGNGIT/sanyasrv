import DictionaryRepository from "../services/dictionary.repository";

export default class DictionaryController {
    private app;

    constructor(app) {
        this.app = app;
    }

    public define() {
        this.app.post('/addPhone', async (req, res) => {
            try {
                const dickRepo = new DictionaryRepository();
                const {phone} = req.body;
                await dickRepo.addPhone(phone);
                res.send('Done');
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
        this.app.get('/phoneById/:id', async (req, res) => {
            try {
                const dickRepo = new DictionaryRepository();
                const {id} = req.params;
                const [phones] = await dickRepo.getPhoneById(id);
                res.json(phones[0]);
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
        this.app.post('/addEmail', async (req, res) => {
            try {
                const dickRepo = new DictionaryRepository();
                const {email} = req.body;
                await dickRepo.addEmail(email);
                res.send('Done');
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
        this.app.get('/emailById/:id', async (req, res) => {
            try {
                const dickRepo = new DictionaryRepository();
                const {id} = req.params;
                const [emails] = await dickRepo.getEmailById(id);
                res.json(emails[0]);
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
        this.app.post('/addAddress', async (req, res) => {
            try {
                const dickRepo = new DictionaryRepository();
                const {address} = req.body;
                await dickRepo.addAddress(address);
                res.send('Done');
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
        this.app.get('/addressById/:id', async (req, res) => {
            try {
                const dickRepo = new DictionaryRepository();
                const {id} = req.params;
                const [addrs] = await dickRepo.getAddressById(id);
                res.json(addrs[0]);
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
        this.app.post('/addDomain', async (req, res) => {
            try {
                const dickRepo = new DictionaryRepository();
                const {domain} = req.body;
                await dickRepo.addDomain(domain);
                res.send('Done');
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
        this.app.get('/domainById/:id', async (req, res) => {
            try {
                const dickRepo = new DictionaryRepository();
                const {id} = req.params;
                const [domains] = await dickRepo.getDomainById(id);
                res.json(domains[0]);
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
        this.app.post('/addStatus', async (req, res) => {
            try {
                const dickRepo = new DictionaryRepository();
                const {status} = req.body;
                await dickRepo.addStatus(status);
                res.send('Done');
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
        this.app.get('/statusById/:id', async (req, res) => {
            try {
                const dickRepo = new DictionaryRepository();
                const {id} = req.params;
                const [statuses] = await dickRepo.getStatusById(id);
                res.json(statuses[0]);
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
        this.app.post('/addOccupation', async (req, res) => {
            try {
                const dickRepo = new DictionaryRepository();
                const {occupation} = req.body;
                await dickRepo.addOccupation(occupation);
                res.send('Done');
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
        this.app.get('/occupationById/:id', async (req, res) => {
            try {
                const dickRepo = new DictionaryRepository();
                const {id} = req.params;
                const [occups] = await dickRepo.getOccupationById(id);
                res.json(occups[0]);
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
        this.app.post('/addNewsEvent', async (req, res) => {
            try {
                const dickRepo = new DictionaryRepository();
                const {newsEvent} = req.body;
                await dickRepo.addNewsType(newsEvent);
                res.send('Done');
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
        this.app.get('/newsEventById/:id', async (req, res) => {
            try {
                const dickRepo = new DictionaryRepository();
                const {id} = req.params;
                const [newsTypes] = await dickRepo.getNewsTypeById(id);
                res.json(newsTypes[0]);
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
        this.app.post('/addAttachmentType', async (req, res) => {
            try {
                const dickRepo = new DictionaryRepository();
                const {attachmentType} = req.body;
                await dickRepo.addAttachmentType(attachmentType);
                res.send('Done');
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
        this.app.get('/attachmentTypeById/:id', async (req, res) => {
            try {
                const dickRepo = new DictionaryRepository();
                const {id} = req.params;
                const [attachmentTypes] = await dickRepo.getAttachmentTypeById(id);
                res.json(attachmentTypes[0]);
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
    }
}