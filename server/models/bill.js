/* 
 * This is the model representation for a single .
 */

var Bookshelf = db;

var PaymentModel = require("./payment").model;
var ApartmentModel = require("./apartment").model;

exports.model = Bookshelf.Model.extend({
	tableName: "bills",
	payment: function() {
		return this.hasMany(PaymentModel);
	},
	apartment: function() {
		return this.belongsToOne(ApartmentModel);
	},
});