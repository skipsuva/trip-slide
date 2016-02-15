import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  trips: DS.hasMany('trip', { async: true }),
  details: DS.hasMany('detail', { async: true })
});
