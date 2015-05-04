import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['deployment'],

  stepNumberSubscriptions: Ember.computed.alias("controllers.deployment.stepNumberSubscriptions"),

  disableTabManagementApplication: false, //true,

  disableTabSelectSubsciptions: false, //true

});
