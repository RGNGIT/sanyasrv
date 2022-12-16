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
        this.app.get('/phones', async (req, res) => {
            try {
                const dickRepo = new DictionaryRepository();
                const [phones] = await dickRepo.getAllPhones();
                res.json(phones);
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
        this.app.delete('/deletePhone/:id', async (req, res) => {
            try {
                const dickRepo = new DictionaryRepository();
                const {id} = req.params;
                await dickRepo.deletePhoneById(id);
                res.send("Done");
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
        this.app.get('/emails', async (req, res) => {
            try {
                const dickRepo = new DictionaryRepository();
                const [emails] = await dickRepo.getAllEmails();
                res.json(emails);
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
        this.app.delete('/deleteEmail/:id', async (req, res) => {
            try {
                const dickRepo = new DictionaryRepository();
                const {id} = req.params;
                await dickRepo.deleteEmailById(id);
                res.send("Done");
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
        this.app.get('/addresses', async (req, res) => {
            try {
                const dickRepo = new DictionaryRepository();
                const [addrs] = await dickRepo.getAllAddresses();
                res.json(addrs);
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
        this.app.delete('/deleteAddress/:id', async (req, res) => {
            try {
                const dickRepo = new DictionaryRepository();
                const {id} = req.params;
                await dickRepo.deleteAddressById(id);
                res.send("Done");
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
        this.app.get('/domains', async (req, res) => {
            try {
                const dickRepo = new DictionaryRepository();
                const [domains] = await dickRepo.getAllDomains();
                res.json(domains);
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
        this.app.delete('/deleteDomain/:id', async (req, res) => {
            try {
                const dickRepo = new DictionaryRepository();
                const {id} = req.params;
                await dickRepo.deleteDomainById(id);
                res.send("Done");
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
        this.app.get('/statuses', async (req, res) => {
            try {
                const dickRepo = new DictionaryRepository();
                const [statuses] = await dickRepo.getAllStatuses();
                res.json(statuses);
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
        this.app.delete('/deleteStatus/:id', async (req, res) => {
            try {
                const dickRepo = new DictionaryRepository();
                const {id} = req.params;
                await dickRepo.deleteStatusById(id);
                res.send("Done");
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
        this.app.get('/occupations', async (req, res) => {
            try {
                const dickRepo = new DictionaryRepository();
                const [occups] = await dickRepo.getAllOccupations();
                res.json(occups);
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
        this.app.delete('/deleteOccupation/:id', async (req, res) => {
            try {
                const dickRepo = new DictionaryRepository();
                const {id} = req.params;
                await dickRepo.deleteOccupationById(id);
                res.send("Done");
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
        this.app.post('/addNewsEventType', async (req, res) => {
            try {
                const dickRepo = new DictionaryRepository();
                const {newsEvent} = req.body;
                await dickRepo.addNewsType(newsEvent);
                res.send('Done');
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
        this.app.get('/newsEventTypeById/:id', async (req, res) => {
            try {
                const dickRepo = new DictionaryRepository();
                const {id} = req.params;
                const [newsTypes] = await dickRepo.getNewsTypeById(id);
                res.json(newsTypes[0]);
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
        this.app.get('/newsEventsTypes', async (req, res) => {
            try {
                const dickRepo = new DictionaryRepository();
                const [newsTypes] = await dickRepo.getAllNewsTypes();
                res.json(newsTypes);
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
        this.app.delete('/deleteNewsEventsType/:id', async (req, res) => {
            try {
                const dickRepo = new DictionaryRepository();
                const {id} = req.params;
                await dickRepo.deleteNewsTypeById(id);
                res.send("Done");
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
        this.app.get('/attachmentTypes', async (req, res) => {
            try {
                const dickRepo = new DictionaryRepository();
                const [attType] = await dickRepo.getAllAttachmentTypes();
                res.json(attType);
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
        this.app.delete('/deleteAttachmentType/:id', async (req, res) => {
            try {
                const dickRepo = new DictionaryRepository();
                const {id} = req.params;
                await dickRepo.deleteAttachmentTypeById(id);
                res.send("Done");
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
    }
}