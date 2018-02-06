Router.configure({
    layoutTemplate: 'mainLayout'
});

Router.route('/', {
    name: 'home'
});

Router.route('/project/:_id', {
    name: "projet",
    data: function(){
        getProject({slug: this.params._id});
    }
});

Router.route('/disconnect', {
    data: function(){
        disconnect();
        sessionStorage.removeItem('name');
        sessionStorage.removeItem('token');
        Router.go('/?successLogout');
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

Router.route('/sign-in', {
    name: 'signin'
});

Router.route('/sign-up', {
    name: 'signup'
});

Router.route('/my-projects', {
    name: 'myprojects',
    data: function(){
      listMyProjects();
    }
});
