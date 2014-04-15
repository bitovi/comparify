var util = require('./util');

var comparify = module.exports = function(object, criteria) {
  if(Array.isArray(criteria)) {
  	for(var i = 0; i < criteria.length; i++) {
  		var crit = util.getKey(criteria, i);
        var value = util.getKey(object, i);
        if (util.isObject(crit) && value) {
            if (!comparify(value, crit)) return false;
        } else {
            if (value !== criteria[key]) return false;
        }
  	}
  } else {
  	for (var key in criteria) {
      if (criteria.hasOwnProperty(key)) {

        // Check for values
        var crit = util.getKey(criteria, key);
        var value = util.getKey(object, key);

        if (util.isObject(crit) && value) {
            if (!comparify(value, crit)) return false;
        } else {
            if (value !== criteria[key]) return false;
        }
      }
    }
  }
  
  return true;
};
