import mongoose from 'mongoose'

mongoose.connect(/*Conecte-se com sua db*/);

let db = mongoose.connection;

export default db
