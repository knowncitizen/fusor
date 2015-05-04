import Ember from 'ember';

export default Ember.Controller.extend({
  stepNumberSubscriptions: Ember.computed.alias("controllers.deployment.stepNumberSubscriptions"),
  aaa: '333333',
});
