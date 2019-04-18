module.exports = {
  getAll(req, res, next) {
    const dbInstance = req.app.get('db')
//what is dbInstance and why does it work like this? 
    dbInstance.read_products().then((response)=>{
      res.status(200).send(response)
    }).catch((err)=>console.log("YOU DONE MESSED UP A-A-RON", err))

    )

  },

  create() {
    const dbInstance = req.app.get('db')
  },

  getOne() {
    const dbInstance = req.app.get('db')
  },

  update() {
    const dbInstance = req.app.get('db')
  },

  delete() {
    const dbInstance = req.app.get('db')
  }

}