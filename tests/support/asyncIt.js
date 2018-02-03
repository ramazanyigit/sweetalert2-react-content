/* global it */

const asyncIt = (desc, fn) => {
  it(desc, done => fn().then(done, done.fail))
}

module.exports = {asyncIt}
