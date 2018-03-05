var schema = new Schema({
    adminurl: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['yes', 'no']
    },
    server: {
        type: String
    },
    port: {
        type: String
    }
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Project', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);