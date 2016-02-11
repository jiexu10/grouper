import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('player');
  },

  actions: {
    deletePlayer(player) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        player.destroyRecord();
      }
    }
  }
});
