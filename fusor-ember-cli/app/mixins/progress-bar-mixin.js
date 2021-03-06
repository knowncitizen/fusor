import Ember from 'ember';

export default Ember.Mixin.create({

  intervalPolling: function() {
    return 5000; // Time between refreshing (in ms)
  }.property().readOnly(),

  scheduleNextRefresh: function(f) {
    return Ember.run.later(this, function() {
      f.apply(this);
      this.set('timer', this.scheduleNextRefresh(f));
    }, this.get('intervalPolling'));
  },

  // executes `refreshModelOnRoute` for every intervalPolling.
  startPolling: function() {
    this.set('timer', this.scheduleNextRefresh(this.get('refreshModelOnRoute'))); //and then repeats
  },

  stopPolling: function() {
    Ember.run.cancel(this.get('timer'));
  },

  refreshModelOnRoute: function(){
    return this.send('refreshModelOnOverviewRoute');
  }

});
