var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    timestamps = require('../lib/mongoose-timestamps');


//=====================================================================================
// SCHEMA
//=====================================================================================

var GroupSchema = new Schema({

  _id: { type: String },
  en: { type: Schema.Types.Mixed },
  zh: { type: Schema.Types.Mixed }

});

GroupSchema.plugin(timestamps);

module.exports = mongoose.model('Group', GroupSchema);
