import Ember from 'ember';

export default Ember.Mixin.create({

  needs: ['application', 'deployment'],

  selectedOrganization: Ember.computed.alias("model"),

  fields_org: {},

  showAlertMessage: false,

  // default Organization name for New Organizations
  defaultOrgName: function () {
    return this.getWithDefault('defaultOrg', this.get('deploymentName'));
  }.property(),

  orgLabelName: function() {
    if(this.get('fields_org.name')) {
      return this.get('defaultOrgName').underscore();
    }
  }.property('defaultOrgName'),

  actions: {
    createOrganization: function() {
        var self = this;
        this.set('fields_org.name', this.get('defaultOrgName'));
        var organization = this.store.createRecord('organization', this.get('fields_org'));
        self.set('fields_org',{});
        self.set('defaultOrgName', null);
        self.set('selectedOrganization', organization);
        organization.save().then(function(org) {
          //success
          self.set('organization', org);
          return self.set('showAlertMessage', true);
        }, function(error) {
          self.get('controllers.deployment').set('errorMsg', 'error saving organization' + error);
        });
    }
  }

});
