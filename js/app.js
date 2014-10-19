var App = Ember.Application.create({
	LOG_TRANSITIONS: true
});

App.Router.map(function() {
	this.resource('products');
	this.resource('product', {path: '/:product_id'})
});

App.Product = DS.Model.extend({
  title: DS.attr('string')
});

App.ProductsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('product');
  }
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('products');
  }
});