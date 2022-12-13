import crypto from 'crypto';

require('dotenv').config();
const {SECRET} = process.env;

export default class HashService {
    public encrypt(target) {
        return crypto.createHash('sha1').update(target).digest('hex');
    }
}