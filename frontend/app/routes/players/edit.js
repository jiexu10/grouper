import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('player', params.player_id);
  },

  actions: {
    savePlayer(newPlayer) {
      newPlayer.save().then(() => this.transitionTo('players'));
    },

    willTransition(transition) {
      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't saved.  Leave form?");

        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
})
