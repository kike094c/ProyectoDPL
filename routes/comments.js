module.exports = {
  getComments(req, res, store) {
    res.status(200).send(store.dishes[req.params.dishesid].comments)
  },
  addComment(req, res, store) {
      let newComment = req.body
      let commentid = store.dishes[req.params.dishesid].comments.length
      store.dishes[req.params.dishesid].comments.push(newComment)
      res.status(201).send({dishesid: dishesid})
  },
  updateComment(req, res, store) {
      store.dishes[req.params.dishesid].comments[req.params.commentid] = req.body
      res.status(200).send(store.dishes[req.params.dishesid].comments[req.params.commentid])
  },
  removeComment(req, res, store) {
      store.dishes[req.params.dishesid].comments.splice(req.params.commentid,1)
      res.status(204).send()
  }
}