import Ember from 'ember';

export default Ember.Controller.extend({

  username: null,
  password: null,
  buttonLoginTitle: 'Login',

  disableCredentialsNext: function() {
    return (Ember.isBlank(this.get('username')) || Ember.isBlank(this.get('password')));
  }.property('username', 'password')

});
