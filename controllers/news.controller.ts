import NewsRepository from "../services/news.repository";
import PhysRepository from "../services/phys.repository";
import AttachmentRepository from "../services/attachment.repository";
import DictionaryRepository from "../services/dictionary.repository";

interface NewsEvent {
    name: string;
    dateOfCreation: Date;
    payload: string;
    dateOfPublish: Date;
    dateOfArchivation: Date;
    sizeOf: number;
    phys: {};
    type: {};
}

interface Attachment {
    name: string;
    sizeOf: number;
    shortDesc: string;
    type: {};
}

export default class NewsController {
    private app;

    constructor(app) {
        this.app = app;
    }

    public define() {
        this.app.post('/addNewsEvent', async (req, res) => {
            try {
                const newsRepo = new NewsRepository();
                const {name, dateOfCreation, payload, dateOfPublish, dateOfArchivation, sizeOf, physId, typeId} = req.body;
                await newsRepo.addNewNewsEvent(name, dateOfCreation, payload, dateOfPublish, dateOfArchivation, sizeOf, physId, typeId);
                res.send("Done");
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
        this.app.get('/newsEventById/:id', async (req, res) => {
            try {
                const newsRepo = new NewsRepository();
                const physRepo = new PhysRepository();
                const dickRepo = new DictionaryRepository();
                const {id} = req.params;
                const [newsEvents] = await newsRepo.getNewsEventById(id);
                const [users] = await physRepo.getUserById((newsEvents as {}[])[0]['phys_id']);
                const [types] = await dickRepo.getNewsTypeById((newsEvents as {}[])[0]['type_id']);
                res.json({
                    name: newsEvents[0]['name'],
                    dateOfCreation: newsEvents[0]['date_of_creation'],
                    payload: newsEvents[0]['payload'],
                    dateOfPublish: newsEvents[0]['date_of_publish'],
                    dateOfArchivation: newsEvents[0]['date_of_archivation'],
                    sizeOf: newsEvents[0]['sizeof'],
                    phys: users[0],
                    type: types[0]
                } as NewsEvent);
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
        this.app.get('/newsEvents', async (req, res) => {
            try {
                const newsRepo = new NewsRepository();
                const [newsEvents] = await newsRepo.getAllNewsEvents();
                res.json(newsEvents);
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
        this.app.delete('/deleteNewsEventById/:id', async (req, res) => {
            try {
                const newsRepo = new NewsRepository();
                const {id} = req.params;
                await newsRepo.deleteNewsEventById(id);
                res.send("Done");
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
        this.app.post('/addAttachment', async (req, res) => {
            try {
                const attachmentRepo = new AttachmentRepository();
                const {name, sizeOf, shortDesc, typeId} = req.body;
                await attachmentRepo.addAttachment(name, sizeOf, shortDesc, typeId);
                res.send("Done");
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
        this.app.get('/attachmentById/:id', async (req, res) => {
            try {
                const attachmentRepo = new AttachmentRepository();
                const dickRepo = new DictionaryRepository();
                const {id} = req.params;
                const [attachments] = await attachmentRepo.deleteAttachmentById(id);
                const [types] = await dickRepo.getAttachmentTypeById(attachments[0]['type_id']);
                res.json({
                    name: attachments[0]['name'],
                    sizeOf: attachments[0]['sizeof'],
                    shortDesc: attachments[0]['short_desc'],
                    type: types[0]
                } as Attachment);
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
        this.app.get('/attachments', async (req, res) => {
            try {
                const attachmentRepo = new AttachmentRepository();
                const [attachments] = await attachmentRepo.getAllAttachments();
                res.json(attachments);
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
        this.app.delete('/deleteAttachmentById/:id', async (req, res) => {
            try {
                const attachmentRepo = new AttachmentRepository();
                const {id} = req.params;
                await attachmentRepo.deleteAttachmentById(id);
                res.send("Done");
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
        this.app.patch('/connectAttachmentEvent', async (req, res) => {
            try {
                const attachmentRepo = new AttachmentRepository();
                const {attachmentId, eventId} = req.body;
                await attachmentRepo.connectAttachmentEvent(eventId, attachmentId);
                res.send("Done");
            } catch(e) {
                res.send('Oshibka: ' + e.message);
            }
        });
    }

};