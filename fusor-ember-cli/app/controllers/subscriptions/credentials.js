import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin, {

  needs: ['deployment'],

  identification: null,
  password: null,
  buttonLoginTitle: 'Login',

  disableCredentialsNext: function() {
    return (Ember.isBlank(this.get('identification')) || Ember.isBlank(this.get('password')));
  }.property('username', 'password'),

  authenticator: 'authenticator:rhportal',

  actions: {

    authenticate: function() {
      var self = this;
      var deployment = this.get('controllers.deployment.model')
      // if (this.get('authType') == 'Basic') {
        return this._super().then(function() {
      //         var adapter = self.store.adapterFor('ApplicationAdapter');
      //         adapter.set('headers', { Authorization: 'Basic ' + self.get('session.basicAuthToken') });
               return self.transitionTo('subscriptions.management-application', deployment);
      //     }, function () {
      //           return self.set('errorMessage', "Your username or password is incorrect. Please try again.");
           });

      // } else {

      //     return this._super().then(function() {

      //         var adapter = self.store.adapterFor('ApplicationAdapter');
      //         // add token to adapter header
      //         adapter.set('headers', { Authorization: 'Bearer ' + self.get('session.access_token') });

      //         // add user to local storage session
      //         self.store.find('user', self.get('identification')).then(function(response) {
      //           self.get('session').set('authType', 'oAuth');
      //           self.get('session').set('currentUser', response);
      //           console.log('SESSION');
      //           console.log(self.get('session'));
      //           console.log(self.get('session.authType'));
      //           console.log(self.get('session.basicAuthToken'));
      //           return self.transitionTo('deployment-new.start');
      //         },
      //           function(response){
      //             alert('error oAuth')
      //           }
      //         );

      //       }, function() {
      //             return self.set('errorMessage', "Your username or password is incorrect. Please try again.");
      //     });
      }

    },


});
