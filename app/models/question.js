import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  content: DS.attr(),
  note: DS.attr(),
  point: DS.attr(),
  answers: DS.hasMany('answer', { async: true})
});
