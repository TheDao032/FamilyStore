exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('').del()
      .then(function () {
        // Inserts seed entries
        return knex('').insert([])
      })
  }