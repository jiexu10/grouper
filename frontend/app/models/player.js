import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),

  isValid: Ember.computed.notEmpty('username')
});
