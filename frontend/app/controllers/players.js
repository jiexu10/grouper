import Ember from 'ember';

export default Ember.Controller.extend({
  username: '',

  isDisabled: Ember.computed.empty('username'),

  usernameChanged: Ember.observer('username', function() {
    this.get('username');
  }),

  actions: {
    addUser() {
      const newUsername = this.get('username');
      const newUser = this.store.createRecord('player', { username: newUsername });
      newUser.save();

      this.set('responseMessage', `User "${this.get('username')}" added.`)
      this.set('username', '');
    },

    changeUsername() {
      alert(`new name: ${this.get('username')}`);
      this.set('responseMessage', `Username changed to "${this.get('username')}".`)
      this.set('username', '');
    }
  }
});
