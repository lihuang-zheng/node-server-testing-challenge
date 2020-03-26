exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex("hobbits")
    .truncate()
    .then(function() {
      return knex("hobbits").insert([
        { name: "organize" },
        { name: "dual-n-back" },
        { name: "reading" },
        { name: "jogging" }
      ]);
    });
};
