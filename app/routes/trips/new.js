import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('trip');
  },
  actions: {
    addTrip(){
      let trip = this.modelFor(this.routeName);
      trip.save();
      this.transitionTo('trips.trip');
    }
  }
});
