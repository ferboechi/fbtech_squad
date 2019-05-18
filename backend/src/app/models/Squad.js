const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const SquadSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  description: {
    type: String,
    required: true
  },
  administrator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true
  },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      require: false
    }
  ],
  status: {
    type: Boolean,
    required: true,
    default: true
  },
  createAt: {
    type: Date,
    default: Date.now
  }
})

SquadSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Squad', SquadSchema)
