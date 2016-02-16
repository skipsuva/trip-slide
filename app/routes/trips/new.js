import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('trip');
  },
  // actions: {
  //   addTrip(){
  //     // debugger;
  //     let trip = this.get('model');
  //     trip.save();
  //     // this.transitionTo('trips.trip');
  //   }
  // }
});
