import DS from 'ember-data';

export default DS.Model.extend({
	firstName: DS.attr('string'),
	lastName: DS.attr('string'),
	gamerTag: DS.attr('string'),
	age: DS.attr('number'),
	prestige_level: DS.attr('number'),
	location: DS.attr('string'),
	photoUrl: DS.attr('string'),
	verified: DS.attr('boolean', { defaultValue: false }),
  createdAt: DS.attr('date', {
    defaultValue() { return new Date(); }
  }),

  /*
	fullName: Ember.computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  })*/

});
