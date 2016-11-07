var app = app || {};

// the collection of books in the library
app.Library = Backbone.Collection.extend({
  model: app.Book
});