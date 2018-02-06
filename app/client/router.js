Router.configure({
    layoutTemplate: 'mainLayout'
});

Router.route('/', {
    name: 'home'
});

Router.route('/project/:_id', {
    name: "projet",
    data: function(){
        Meteor.call('getProject', {slug: this.params._id});
    }
});

Router.route('/contact', {
    name: 'contact'
});

Router.route('/about', {
    name: 'about'
});

Router.route('/legal', {
    name: 'legal'
});

Router.route('/donate', {
    name: 'donate'
});