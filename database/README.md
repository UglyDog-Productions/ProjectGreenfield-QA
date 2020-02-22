Useful mongoDB shell commands:

db.collection.renameCollection('newName')
db.collection.drop()
db.collection.find(query, projection).sort( { "helpful": -1 } ).pretty()
db.collection.insertOne(document)
db.collection.update( { "id": 1 }, { \$inc: { <field1>: <amount1>} })
db.collection.update( { "id": 1 }, { \$set: { <field1>: <amount1>} })
