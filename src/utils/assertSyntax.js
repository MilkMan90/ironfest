const AssertCode = [
  {
    name: 'assert',
    doc: `assert(expression, [message])`,
    desc: 'Write your own test expression',
    code: `assert('foo' !== 'bar', 'foo is not bar')`
  },
  {
    name: 'isOk',
    doc: `isOk(object, [message])`,
    desc: 'Asserts that object is truthy',
    code: `assert.isOk('everything', 'everything is ok will pass');`
  },
  {
    name: 'isNotOk',
    doc: `isNotOk(object, [message])`,
    desc: 'Asserts that object is falsey',
    code: `assert.isNotOk('everything', 'this will fail');`
  },
  {
    name: 'equal',
    doc: `equal(acutal, expected, [message])`,
    desc: 'Asserts non-strict equality (==) of actual and expected',
    code: `assert.equal(3, '3', '== coerces values to strings');`
  },
  {
    name: 'notEqual',
    doc: `notEqual(actual, expected, [message])`,
    desc: 'Asserts non-strict inequality (!=) of actual and expected.',
    code: `assert.notEqual(3, 4, 'these numbers are not equal');`
  },
  {
    name: 'strictEqual',
    doc: `strictEqual(actual, expected, [message])`,
    desc: 'Asserts strict equality (===) of actual and expected.',
    code: `assert.strictEqual(true, true, 'these booleans are strictly equal');`
  },
  {
    name: 'notStrictEqual',
    doc: `notStrictEqual(actual, expected, [message])`,
    desc: 'Asserts strict inequality (!==) of actual and expected.',
    code: `assert.notStrictEqual(3, '3', 'no coercion for strict equality');`
  },
  {
    name: 'deepEqual',
    doc: `deepEqual(actual, expected, [message])`,
    desc: 'Asserts that actual is deeply equal to expected.',
    code: `assert.deepEqual({ tea: 'green' }, { tea: 'green' });`
  },
  {
    name: 'notDeepEqual',
    doc: `notDeepEqual(actual, expected, [message])`,
    desc: 'Assert that actual is not deeply equal to expected.',
    code: `assert.notDeepEqual({ tea: 'green' }, { tea: 'jasmine' });`
  },
  {
    name: 'isAbove',
    doc: `isAbove(valueToCheck, valueToBeAbove, [message])`,
    desc: 'Asserts valueToCheck is strictly greater than (>) valueToBeAbove',
    code: `assert.isAbove(5, 2, '5 is strictly greater than 2');`
  },
  {
    name: 'isAtLeast',
    doc: `isAtLeast(valueToCheck, valueToBeAtLeast, [message])`,
    desc: 'Asserts valueToCheck is greater than or equal to (>=) valueToBeAtLeast',
    code: `assert.isAtLeast(5, 2, '5 is greater or equal to 2');`
  },
  {
    name: 'isBelow',
    doc: `isBelow(valueToCheck, valueToBeBelow, [message])`,
    desc: 'Asserts valueToCheck is strictly less than (<) valueToBeBelow',
    code: `assert.isBelow(3, 6, '3 is strictly less than 6');`
  },
  {
    name: 'isAtMost',
    doc: `isAtMost(valueToCheck, valueToBeAtMost, [message])`,
    desc: 'Asserts valueToCheck is less than or equal to (<=) valueToBeAtMost',
    code: `assert.isAtMost(3, 6, '3 is less than or equal to 6');`
  },
  {
    name: 'isTrue',
    doc: `isTrue(value, [message])`,
    desc: 'Asserts that value is true.',
    code: `assert.isTrue(teaServed, 'the tea has been served');`
  },
  {
    name: 'isNotTrue',
    doc: `isNotTrue(value, [message])`,
    desc: 'Asserts that value is not true.',
    code: `assert.isNotTrue(tea, 'great, time for tea!');`
  },
  {
    name: 'isFalse',
    doc: `isFalse(value, [message])`,
    desc: 'Asserts that value is false.',
    code: `assert.isFalse(teaServed, 'no tea yet? hmm...');`
  },
  {
    name: 'isNotFalse',
    doc: `isNotFalse(value, [message])`,
    desc: 'Asserts that value is not false.',
    code: `assert.isNotFalse(tea, 'great, time for tea!');`
  },
  {
    name: 'isNull',
    doc: `isNull(value, [message])`,
    desc: 'Asserts that value is null.',
    code: `assert.isNull(err, 'there was no error');`
  },
  {
    name: 'isNotNull',
    doc: `isNotNull(value, [message])`,
    desc: 'Asserts that value is not null.',
    code: `assert.isNotNull(tea, 'great, time for tea!');`
  },
  {
    name: 'isNaN',
    doc: `isNaN`,
    desc: 'Asserts that value is NaN',
    code: `assert.isNaN(‘foo’, ‘foo is NaN’);`
  },
  {
    name: 'isNotNaN',
    doc: `isNotNaN`,
    desc: 'Asserts that value is not NaN',
    code: `assert.isNotNaN(4, ‘4 is not NaN’);`
  },
  {
    name: 'isUndefined',
    doc: `isUndefined(value, [message])`,
    desc: 'Asserts that value is undefined.',
    code: `assert.isUndefined(tea, 'no tea defined');`
  },
  {
    name: 'isDefined',
    doc: `isDefined(value, [message])`,
    desc: 'Asserts that value is not undefined.',
    code: `assert.isDefined(tea, 'tea has been defined');`
  },
  {
    name: 'isFunction',
    doc: `isFunction(value, [message])`,
    desc: 'Asserts that value is a function.',
    code: `assert.isFunction(serveTea, 'great, we can have tea now');`
  },
  {
    name: 'isNotFunction',
    doc: `isNotFunction(value, [message])`,
    desc: 'Asserts that value is not a function.',
    code: `assert.isNotFunction(serveTea, 'great, we have listed the steps');`
  },
  {
    name: 'isObject',
    doc: `isObject(value, [message])`,
    desc: 'Asserts that value is an object of type ‘Object’ (as revealed by Object.prototype.toString). The assertion does not match subclassed objects.',
    code: `assert.isObject(selection, 'tea selection is an object');`
  },
  {
    name: 'isNotObject',
    doc: `isNotObject(value, [message])`,
    desc: 'Asserts that value is not an object of type ‘Object’ (as revealed by Object.prototype.toString).',
    code: `assert.isNotObject(selection, 'tea selection is not an object');`
  },
  {
    name: 'isArray',
    doc: `isArray(value, [message])`,
    desc: 'Asserts that value is an array.',
    code: `assert.isArray(menu, 'what kind of tea do we want?');`
  },
  {
    name: 'isNotArray',
    doc: `isNotArray(value, [message])`,
    desc: 'Asserts that value is not an array.',
    code: `assert.isNotArray(menu, 'what kind of tea do we want?');`
  },
  {
    name: 'isString',
    doc: `isString(value, [message])`,
    desc: 'Asserts that value is a string.',
    code: `assert.isString(teaOrder, 'order placed');`
  },
  {
    name: 'isNotString',
    doc: `isNotString(value, [message])`,
    desc: 'Asserts that value is not a string.',
    code: `assert.isNotString(teaOrder, 'order placed');`
  },
  {
    name: 'isNumber',
    doc: `isNumber(value, [message])`,
    desc: 'Asserts that value is a number.',
    code: `assert.isNumber(cups, 'how many cups');`
  },
  {
    name: 'isNotNumber',
    doc: `isNotNumber(value, [message])`,
    desc: 'Asserts that value is not a number.',
    code: `assert.isNotNumber(cups, 'how many cups');`
  },
  {
    name: 'isBoolean',
    doc: `isBoolean(value, [message])`,
    desc: 'Asserts that value is a boolean.',
    code: `assert.isBoolean(teaReady, 'is the tea ready');`
  },
  {
    name: 'isNotBoolean',
    doc: `isNotBoolean(value, [message])`,
    desc: 'Asserts that value is not a boolean.',
    code: `assert.isNotBoolean(teaReady, 'is the tea ready');`
  },
  {
    name: 'typeOf',
    doc: `typeOf(value, name, [message])`,
    desc: 'Asserts that value’s type is name, as determined by Object.prototype.toString.',
    code: `assert.typeOf('tea', 'string', 'we have a string');`
  },
  {
    name: 'notTypeOf',
    doc: `notTypeOf(value, name, [message])`,
    desc: 'Asserts that value’s type is not name, as determined by Object.prototype.toString.',
    code: `assert.notTypeOf('tea', 'number', 'strings are not numbers');`
  },
  {
    name: 'instanceOf',
    doc: `instanceOf(object, constructor, [message])`,
    desc: 'Asserts that value is an instance of constructor.',
    code: `assert.instanceOf(chai, Tea, 'chai is an instance of tea');`
  },
  {
    name: 'notInstanceOf',
    doc: `notInstanceOf(object, constructor, [message])`,
    desc: 'Asserts value is not an instance of constructor.',
    code: `assert.notInstanceOf(chai, Tea, 'chai is not an instance of tea');`
  },
  {
    name: 'include',
    doc: `include(haystack, needle, [message])`,
    desc: 'Asserts that haystack includes needle. Works for strings and arrays.',
    code: `assert.include([ 1, 2, 3 ], 3, 'array contains value');`
  },
  {
    name: 'match',
    doc: `match(value, regexp, [message])`,
    desc: 'Asserts that value matches the regular expression regexp.',
    code: `assert.match('foobar', /^foo/, 'regexp matches');`
  },
  {
    name: 'notMatch',
    doc: `notMatch(value, regexp, [message])`,
    desc: 'Asserts that value does not match the regular expression regexp.',
    code: `assert.notMatch('foobar', /^foo/, 'regexp does not match');`
  },
  {
    name: 'property',
    doc: `property(object, property, [message])`,
    desc: 'Asserts that object has a property named by property.',
    code: `assert.property({ tea: { green: 'matcha' }}, 'tea');`
  },
  {
    name: 'notProperty',
    doc: `notProperty(object, property, [message])`,
    desc: 'Asserts that object does not have a property named by property.',
    code: `assert.notProperty({ tea: { green: 'matcha' }}, 'coffee');`
  },
  {
    name: 'deepProperty',
    doc: `deepProperty(object, property, [message])`,
    desc: 'Asserts that object has a property named by property, which can be a string using dot- and bracket-notation for deep reference.',
    code: `assert.deepProperty({ tea: { green: 'matcha' }}, 'tea.green');`
  },
  {
    name: 'notDeepProperty',
    doc: `notDeepProperty(object, property, [message])`,
    desc: 'Asserts that object does not have a property named by property, which can be a string using dot- and bracket-notation for deep reference.',
    code: `assert.notDeepProperty({ tea: { green: 'matcha' }}, 'tea.oolong');`
  },
  {
    name: 'propertyVal',
    doc: `propertyVal(object, property, value, [message])`,
    desc: 'Asserts that object has a property named by property with value given by value.',
    code: `assert.propertyVal({ tea: 'is good' }, 'tea', 'is good');`
  },
  {
    name: 'propertyNotVal',
    doc: `propertyNotVal(object, property, value, [message])`,
    desc: 'Asserts that object has a property named by property, but with a value different from that given by value.',
    code: `assert.propertyNotVal({ tea: 'is good' }, 'tea', 'is bad');`
  },
  {
    name: 'deepPropertyVal',
    doc: `deepPropertyVal(object, property, value, [message])`,
    desc: 'Asserts that object has a property named by property with value given by value. property can use dot- and bracket-notation for deep reference.',
    code: `assert.deepPropertyVal({ tea: { green: 'matcha' }}, 'tea.green', 'matcha');`
  },
  {
    name: 'deepPropertyNotVal',
    doc: `deepPropertyNotVal(object, property, value, [message])`,
    desc: 'Asserts that object has a property named by property, but with a value different from that given by value. property can use dot- and bracket-notation for deep reference.',
    code: `assert.deepPropertyNotVal({ tea: { green: 'matcha' }}, 'tea.green', 'konacha');`
  },
  {
    name: 'lengthOf',
    doc: `lengthOf(object, length, [message])`,
    desc: 'Asserts that object has a length property with the expected value.',
    code: `assert.lengthOf('foobar', 6, 'string has length of 6');`
  },
  {
    name: 'operator',
    doc: `operator(val1, operator, val2, [message])`,
    desc: 'Compares two values using operator.',
    code: `assert.operator(1, '<', 2, 'everything is ok');`
  },
  {
    name: 'closeTo',
    doc: `closeTo(actual, expected, delta, [message])`,
    desc: 'Asserts that the target is equal expected, to within a +/- delta range.',
    code: `assert.closeTo(1.5, 1, 0.5, 'numbers are close');`
  },
  {
    name: 'sameMembers',
    doc: `sameMembers(set1, set2, [message])`,
    desc: 'Asserts that set1 and set2 have the same members. Order is not taken into account.',
    code: `assert.sameMembers([ 1, 2, 3 ], [ 2, 1, 3 ], 'same members');`
  },
  {
    name: 'sameDeepMembers',
    doc: `sameDeepMembers(set1, set2, [message])`,
    desc: 'Asserts that set1 and set2 have the same members - using a deep equality checking. Order is not taken into account.',
    code: `assert.sameDeepMembers([ {b: 3}, {a: 2}, {c: 5} ], [ {c: 5}, {b: 3}, {a: 2} ], 'same deep members');`
  },
  {
    name: 'includeMembers',
    doc: `.includeMembers(superset, subset, [message])`,
    desc: 'Asserts that subset is included in superset. Order is not taken into account.',
    code: `assert.includeMembers([ 1, 2, 3 ], [ 2, 1 ], 'include members');`
  },
  {
    name: 'includeDeepMembers',
    doc: `.includeDeepMembers(superset, subset, [message])`,
    desc: 'Asserts that subset is included in superset - using deep equality checking. Order is not taken into account. Duplicates are ignored.',
    code: `assert.includeDeepMembers([ {a: 1}, {b: 2}, {c: 3} ], [ {b: 2}, {a: 1}, {b: 2} ], 'include deep members');`
  },
]

export default AssertCode;
