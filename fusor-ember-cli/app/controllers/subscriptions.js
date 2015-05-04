import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['deployment'],

  stepNumberSubscriptions: Ember.computed.alias("controllers.deployment.stepNumberSubscriptions"),

  disableTabManagementApplication: true,

  disableTabSelectSubsciptions: true

});
