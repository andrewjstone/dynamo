function Table(){}

Table.protoype = {
  request: function(target, data, cb) {
    data.TableName = this.name

    this.database.request(target, data, function(err, data) {
      err ? cb(err) : cb(null, (new Table).parse(data))
    })

    return this
  },

  destroy: function(cb) {
    return this.request("DeleteTable", {}, cb)
  },

  fetch: function(cb) {
    return this.request("DescribeTable", {}, cb)
  },

  update: function(opts, cb) {
    return this.request("DescribeTable", {}, cb)
  }
}

module.exports = Table