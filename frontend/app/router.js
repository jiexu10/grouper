import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('players', function() {
    this.route('new');
    this.route('show', { path: '/:player_id' });
    this.route('edit', { path: '/:player_id/edit'});
  });
});

export default Router;
