const { ObjectID } = require('mongodb')
const { Connection } = require('./Connection')


class OperatorsDB extends Connection {

    async save(collection, data) {
        try {
            const { client, db } = await this.getClienteMongoDB()
            console.log('db', db, 'client', client)
            await db.collection(collection).insertOne(data)
            client.close()
            return data
        } catch (error) {
            console.log('Operators.save', error)
        }
    }

    async find(collection, query) {
        try {
            const { client, db } = await this.getClienteMongoDB()
            const cursor = await db.collection(collection).find(query)
            const allElements = []
            await cursor.forEach(element => allElements.push(element))
            client.close()
            return allElements
        } catch (error) {
            console.log('Operators.find', error)
        }
    }

    async findById(collection, id) {
        try {

            const query = {_id: this.getObjectId(id)}
            const { client, db } = await this.getClienteMongoDB()
            const user = await db.collection(collection).findOne(query)
            client.close()
            return user
        } catch (error) {
            console.log('Operators.findById', error)
        }
    }

    async findByName(collection, name) {
        try {

            const query = {"nome": name}
            const { client, db } = await this.getClienteMongoDB()
            const user = await db.collection(collection).findOne(query)
            console.log(user)
            client.close()
            return user
        } catch (error) {
            console.log('Operators.findByName', error)
        }
    }

    async deleteById(collection, id) {
        try {

            const query = {_id: this.getObjectId(id)}
            const { client, db } = await this.getClienteMongoDB()
            const user = await db.collection(collection).deleteOne(query)
            client.close()
            return user
        } catch (error) {
            console.log('Operators.DeleteById', error)
        }
    }

    async editById(collection, body) {
        try {
            console.log("aqui", body)
            const query = {_id: ObjectID(body.id)}
            const newvalues = { $set: {idade: body.idade} };
            const { client, db } = await this.getClienteMongoDB()
            const user = await db.collection(collection).updateOne(query,newvalues, function(err, res) {
                if (err) throw err;
                console.log("O id", body.id, " foi atualizado");
              });
            client.close()
            return user
        } catch (error) {
            console.log('Operators.DeleteById', error)
        }
    }
}

module.exports = { OperatorsDB }