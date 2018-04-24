import mongoose = require('mongoose');
import { dbHost, dbName, dbUser, dbPass } from '../config';

export const db = process.env.MONGODB_URI ? mongoose.connect(process.env.MONGODB_URI as string) :
  mongoose.connect(`mongodb://${dbHost}/${dbName}`, {
    user: dbUser,
    pass: dbPass
  });
