var app = app || {};

app.BookView = Backbone.View.extend({
  tagName: 'div',
  className: 'bookContainer',
  template: _.template($('#bookTemplate').html()),
  events: {'click .delete': 'deleteBook'},
  
  deleteBook: function() {
    this.model.destroy();//delete the model
    this.remove();//delete the view
  },

  // this.el is defined in tagName, $el gives us access through jquery
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});