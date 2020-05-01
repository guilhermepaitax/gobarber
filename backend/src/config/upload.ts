import path from 'path';
import crypto from 'crypto';
import multer from 'multer';

const tmpFloder = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  directory: tmpFloder,

  storage: multer.diskStorage({
    destination: tmpFloder,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('HEX');
      const filename = `${fileHash}-${file.originalname}`;

      return callback(null, filename);
    },
  }),
};
