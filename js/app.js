var app = app || {};

// sample data to populate the collection
$(function() {
  var books = [
    {title: 'some crap', author: 'idiot', releaseDate: '2002', keywords: 'dumby for dumbies'},
    {title: 'garbage', author: 'trash guy', releaseDate: '1999', keywords: 'trashy for trash'}
  ];
  // passes the sample data above into a new instance of app.LibraryView.
  // app.LibraryView invokes the render() method - all the books are displayed.
  new app.LibraryView(books);
});