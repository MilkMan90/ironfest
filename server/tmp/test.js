function example(){
	return 'taylor rocks'
} ; var { assert } = require('../chai');describe('Example Test', function() {
  it('should be a function', function() {
    assert.isFunction(example)
  })
  it('should return taylor rocks', function() {
    assert.isFunction(example)
    assert.isNotOk('everything', 'this will fail');
  })
   it('should return taylor rocks', function() {
    assert.isFunction(examdple)
    assert.isNotOk('everything', 'this will fail');
  })
})


