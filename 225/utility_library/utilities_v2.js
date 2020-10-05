function _(element) {
  return {
    first: function() {
      return element[0];
    },

    last: function() {
      return element[element.length - 1];
    },

    without: function(...values) {
      return element.filter(function(num) {
        return !values.includes(num);
      });
    },

    lastIndexOf: function(targetValue) {
      let index = -1;
      element.forEach(function (value, i) {
        if (value === targetValue) {
          index = i;
        }
      });
      return index;
    },

    sample: function(quantity) {
      let elementCopy = element.slice();

      if (!quantity) {
        quantity = 1;
      }

      let result = [];
      let randomValue;
      let randomValueIndex;

      while (result.length < quantity) {
        randomValue = elementCopy[Math.floor(Math.random() * elementCopy.length)];
        randomValueIndex = elementCopy.indexOf(randomValue);
        result.push(randomValue);
        elementCopy.splice(randomValueIndex, 1);
      }

      return result = result.length === 1 ? result[0] : result;
    },

    findWhere: function(props) {
      let allMatch;
      let matchingObj;

      element.some(function(obj) {
        for (let prop in props) {
          if (obj[prop] === props[prop]) {
            allMatch = true;
          } else {
            allMatch = false;
          }

          if (!allMatch) {
            break;
          }
        }

        if (allMatch) {
          matchingObj = obj;
          return true;
        }
      });

      return matchingObj;
    },

    where: function(props) {
      let allMatch;
      let matchingObjects = [];

      element.forEach(function(obj) {
        for (let prop in props) {
          if (obj[prop] === props[prop]) {
            allMatch = true;
          } else {
            allMatch = false;
          }

          if (allMatch === false) {
            return;
          }
        }

        if (allMatch) {
          matchingObjects.push(obj);
        }
      });

      return matchingObjects;
    },

    pluck: function(query) {
      let values = [];

      element.forEach(function(obj) {
        if (obj[query]) {
          values.push(obj[query]);
        }
      });

      return values;
    },

    keys: function() {
      return Object.keys(element);
    },

    values: function() {
      return Object.values(element);
    },

    pick: function(...props) {
      let newObj = {};
      props.forEach(prop => {
        newObj[prop] = element[prop];
      });

      return newObj;
    },

    omit: function(...props) {
      let newObj = {};
      for (var prop in element) {
        if (!props.includes(prop)) {
          newObj[prop] = element[prop];
        }
      }

      return newObj;
    },

    has: function(prop) {
      return element[prop];
    },

    isArray: function(value) {
      return Array.isArray(value);
    },

    isObject: function(value) {
      return typeof(value) === 'object' || typeof(value) === 'function';
    },

    isFunction: function(value) {
      return typeof(value) === 'function';
    },

    isBoolean: function(value) {
      if (typeof(value) === 'object') {
        return typeof(!!value) === 'boolean';
      }
      return typeof(value) === 'boolean';
    },

    isString: function(value) {
      if (typeof(value) === 'object') {
        return typeof(!!value) === 'boolean';
      }
      return typeof(value) === 'string';
    }
  };
};

_.range = function(value1, value2) {
            let arr = [];
            if (!value2) {
              value2 = value1;
              value1 = 0;
            }
            let i;
            for (i = value1; i < value2; i += 1) {
              arr.push(i);
            }
            return arr;
          };

_.extend = function(extendingObj, ...objs) {
             objs.reverse();
             objs.forEach(function(obj) {
               for (let prop in obj) {
                extendingObj[prop] = obj[prop];
             }
            });

             return extendingObj;
           };

_.isArray = function(value) {
              return Array.isArray(value);
            };

_.isObject = function(value) {
               return typeof(value) === 'object' || typeof(value) === 'function';
             };

_.isFunction = function(value) {
              return typeof(value) === 'function';
            };

_.isBoolean = function(value) {
              if (typeof(value) === 'object') {
                return typeof(!!value) === 'boolean';
              }
              return typeof(value) === 'boolean';
            };

_.isString = function(value) {
              return typeof(value) === 'string';
            };
