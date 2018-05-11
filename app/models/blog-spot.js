import DS from 'ember-data';

export default DS.Model.extend({

    tittle: DS.attr('string'),
    datePublished: DS.attr('date'),
    content: DS.attr('string'),
    author: DS.belongsTo('author')
});
