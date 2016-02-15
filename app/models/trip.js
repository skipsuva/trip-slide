import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  destination: DS.attr('string'),
  startDate: DS.attr('date')
});
