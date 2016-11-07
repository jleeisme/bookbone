var app = app || {};

// each book will have these as its layout
app.Book = Backbone.Model.extend({
  defaults: {
    coverImage: 'img/placeholder.png',
    title: 'No title',
    author: 'Unknown',
    releaseDate: 'Unknown',
    keywords: 'None'
  }
});
