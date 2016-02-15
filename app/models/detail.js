import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.attr('string'),
  travelDate: DS.attr('date'),
  notes: DS.attr('string'),
  trip: DS.belongsTo('trip', { async: true }),
  user: DS.belongsTo('user', { async: true })
});
