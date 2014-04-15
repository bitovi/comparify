var util = require('./util'),
	assert = require("assert");

var comparify = module.exports = function(object, criteria, fail, path) {
	path = path || "";
  if(Array.isArray(criteria)) {
  	for(var i = 0; i < criteria.length; i++) {
  		var crit = util.getKey(criteria, i);
        var value = util.getKey(object, i);
        if (util.isObject(crit) && value) {
            if (!comparify(value, crit, fail, path+"."+i)) return false;
        } else {
            if (value !== criteria[i]) {
            	fail && assert.equal(value, criteria[i], "at "+path+"."+i)
            	return false;
        	}
        }
  	}
  } else {
  	for (var key in criteria) {
      if (criteria.hasOwnProperty(key)) {

        // Check for values
        var crit = util.getKey(criteria, key);
        var value = util.getKey(object, key);

        if (util.isObject(crit) && value) {
            if (!comparify(value, crit, fail, path+"."+key)) return false;
        } else {
            if (value !== criteria[key]) {
            	fail && assert.equal(value, criteria[key], "at "+path+"."+key)
            	return false;
        	}
        }
      }
    }
  }
  
  return true;
};
