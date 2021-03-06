module.exports = {
  getAll(req, res, next) {
    const dbInstance = req.app.get('db')
    
    //what is dbInstance and why does it work like this? 
    dbInstance.read_products()
    .then((response) => {
      res.status(200).send(response)
    })
    .catch((err) => console.log("YOU DONE MESSED UP A-A-RON", err))



  },

  create(req, res) {
    
    const dbInstance = req.app.get('db')
    let { name, description, price, imageUrl } = req.query

    dbInstance.create_product([name, description, +price, imageUrl])
    .then((response) => res.status(200).send(response))
    
    .catch((err) => console.log("create failure", err))
  },

  getOne(req, res) {
    const dbInstance = req.app.get('db')
    dbInstance.read_product([req.params.id]).then(
      (response) => res.status(200).send(response)
    ).catch((err) => console.log(500, err, "getOne failed"))
  },

  update(req, res) {
    const dbInstance = req.app.get('db')
    
    dbInstance.update_product([req.query.description, req.params.id])
    .then((response)=>res.status(200).send(response))
    .catch((err)=res.status('update failed'))
  },

  delete(req, res) {
    const dbInstance = req.app.get('db')
    dbInstance.delete_product([req.params.id])
    .then((response)=> res.status(200).send(response))
    .catch((err)=> res.status(500).send(err))
  }

}