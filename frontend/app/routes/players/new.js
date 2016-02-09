import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('player');
  },

  isDisabled: Ember.computed.empty('model.username'),

  actions: {
    addUser(newUser) {
      newUser.save().then(() => this.transitionTo('players'));
    },

    willTransition() {
      let model = this.controller.get('model');

      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
});
