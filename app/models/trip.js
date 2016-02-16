import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  destination: DS.attr('string'),
  startDate: DS.attr('date'),
  endDate: DS.attr('date'),
  details: DS.hasMany('detail', { async: true }),
  user: DS.belongsTo('user', { async: true })
});
