var app = app || {};

app.LibraryView = Backbone.View.extend({
  el: '#books',
  events:{'click #add':'addBook'}, //when the #add button is clicked

  // preventDefault prevents the page reloading on updates
  addBook: function(e) {
    e.preventDefault();

    var formData = {};//form data for the book model can be stored in this object

    // iterates over all input elements. If there's no input value, the formData gets the element's inputed value
    // otherwise the default inputs will be used
    $('#addBook div').children('input').each(function(i, el) {
      if($(el).val() !== '') {
        formData[el.id] = $(el).val();
      }
    });
    this.collection.add(new app.Book(formData));
  },

  initialize: function(initialBooks) {
    this.collection = new app.Library(initialBooks);
    this.render();
    this.listenTo(this.collection, 'add', this.renderBook);//to make the view render again when there's a new model
  },

  // render each book in its collection
  render: function() {
    this.collection.each(function(item) {
      this.renderBook(item);
    }, this);
  },

  // render a book by creating a new app.BookView and appending the element it renders to the library's element. 
  renderBook: function(item) {
    var bookView = new app.BookView({
      model: item
    });
    this.$el.append(bookView.render().el);
  }
});