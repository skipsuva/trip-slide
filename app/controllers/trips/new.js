import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addTrip: function() {
      var newTrip = this.store.createRecord('trip', {
        name: this.get('name'),
        destination: this.get('destination'),
        startDate: this.get('startDate'),
        endDate: this.get('endDate')
      });
      newTrip.save();
    }
  }
});
