const Squad = require('../models/Squad')

class SquadController {
  async show (req, res) {
    const squad = await Squad.findById(req.params.id)

    return res.json(squad)
  }

  async update (req, res) {
    const squad = await Squad.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })

    return res.json(squad)
  }

  async destroy (req, res) {
    await Squad.findByIdAndDelete(req.params.id)

    return res.send()
  }
  async store (req, res) {
    const squad = await Squad.create({ ...req.body, administrator: req.userId })

    return res.json(squad)
  }

  async index (req, res) {
    const filters = {}

    if (req.query.status) {
      filters.status = req.query.status
    }

    const squad = await Squad.paginate(filters, {
      page: parseInt(req.query.page) || 1,
      limit: parseInt(req.query.limit) || 10,
      populate: ['administrator']
    })

    return res.json(squad)
  }
}

module.exports = new SquadController()
