import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
      return {
	  nodes: [1,2],
	  profiles: this.store.find('flavor')
      };
  },

  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('showAlertMessage', false);
  },

  deactivate: function() {
    return this.send('saveDeployment', null);
  }

});
