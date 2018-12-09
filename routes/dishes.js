module.exports = {
	    getDishes(req, res, store) {
	        res.status(200).send(store.dishes)
	    },
	    addDishes(req, res, store) {
	        let newDishe = req.body
	        let dishesid = store.dishes.length
	        store.dishes.push(newDishe)
	        res.status(201).send({dishesid: dishesid})
	    },
	    updateDishes(req, res, store) {
	        store.dishes[req.params.dishesid] = req.body
	        res.status(200).send(store.dishes[req.params.dishesid])
	    },
	    removeDishes(req, res, store) {
	        store.dishes.splice(req.params.dishesid,1)
	        res.status(204).send()
	    }
	}