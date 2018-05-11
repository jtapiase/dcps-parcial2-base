import DS from 'ember-data';

export default DS.Model.extend({
   // id: DS.attr('string'),
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    username: DS.attr('string'),
    email: DS.attr('string'),
    BLogPost: DS.hasMany('blog-spot'),


});
