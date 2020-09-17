const { OperatorsDB } = require('.././../../repository/mongoAtlas/OperatorsDB')



module.exports = app => {

    app.get('/user', async (req, res) => {
        try {
            const operator = new OperatorsDB();
            const user = await operator.find('users', {});
            res.send(user)
        } catch (fail) {
            console.log('FindAll', fail)
        }
    })

    app.get('/user/id/:id', async (req, res) => {
        try {
            const operator = new OperatorsDB();
            const user = await operator.findById('users', req.params.id)
            res.send(user)
        } catch (fail) {
            console.log('findId', fail)
        }
    })

    app.get('/user/name/:name', async (req, res) => {
        try {
            const operator = new OperatorsDB();
            const user = await operator.findByName('users', req.params.name)
            res.send(user)
        } catch (fail) {
            console.log('findName', fail)
        }
        
        
    })

    app.post('/user', async (req, res) =>  {
        try {
            const operator = new OperatorsDB();
            const user = await operator.save('users', req.body)
            res.send(user)
        } catch (fail) {
            console.log('CreateUser', fail)
        }
    })
    

    app.put('/user', async (req, res) =>  {
       try {
        const operator = new OperatorsDB();
        const user = await operator.editById('users', req.body)
        res.send(user)
    } catch (fail) {
        console.log('edit', fail)
    }      
    })


    app.delete('/user/:id', async (req, res) =>  {
        try {
            const operator = new OperatorsDB();
            const user = await operator.deleteById('users', req.params.id)
            res.send(user)
        } catch (fail) {
            console.log('Deleteid', fail)
        }
       
    })



}