import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('trips', function() {
    this.route('trip', {path: "/:trip_id"});
  });
});

export default Router;
