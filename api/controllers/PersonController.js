/**
 * PersonController
 *
 * @description :: Server-side logic for managing people
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res){
	    res.view('person/index', {title:'David'});
    },
	name: function(req, res){
		res.view('person/index', {title:req.params.name});
	}
};

