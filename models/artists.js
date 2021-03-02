const ObjectID = require('mongodb').ObjectID;
let db = require('../db')

exports.all = (cb) => db.get().collection('artists').find().toArray((err, docs) => {
    cb(err, docs);
})

exports.findById = (id, cb) => db.get().collection('artists').findOne({_id: new ObjectID(id)}, (err, docs) => {
    cb(err, docs);
})

exports.create = (artist, cb) => db.get().collection('artists').insert(artist, (err, result) => {
    cb(err, result);
})

exports.update = (id, newData, cb) => db.get().collection('artists').updateOne({_id: new ObjectID(id)}, newData, (err, result) => cb(err, result))

exports.delete = (id, cb) => db.get().collection('artists').deleteOne({_id: new ObjectID(id)}, (err, result) => cb(err, result))