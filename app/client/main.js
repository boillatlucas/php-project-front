import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';

import './main.html';
import './methods.js';
import './router.js';

document.title = "LADQ Security";

Template.home.events({
  'submit form': function(event, template) {
        event.preventDefault();
        var repository = event.target.repository.value;
        var email = event.target.email.value;
        var branch = event.target.branch.value;

        createProject({
          repository: repository,
          email: email,
          branch: branch
        });
    },
    'change #repository': function(event, template) {
      var repository = event.target.value;

      testRepo({
        repository: repository
      });
    }
});

Template.projet.onRendered(function(){

    let slug = $(location).attr('pathname').split('/');
    run_every_sec = setInterval(function (){
        getProject({slug: slug[2],run_every_sec: run_every_sec},function(error, result) {

          });
   } , 3000);
    getCVE();
});

Template.projet.destroyed = function() {
    Meteor.clearInterval(run_every_sec);
};

Template.projet.events({
  "click .buttonExpand":function(event, template){
    var button = $(event.target).closest('.buttonExpand');
    var zone = template.$(event.target).closest('.card').find('.collapse');
    if(zone.is(":visible")){
      zone.hide();
      button.html('<i class="fa fa-angle-down" aria-hidden="true"></i>');
    }
    else {
      zone.show();
      button.html('<i class="fa fa-angle-up" aria-hidden="true"></i>');
    }
  }
});

Template.signin.events({
  'submit form': function(event, template) {
        event.preventDefault();
        var password = event.target.password.value;
        var email = event.target.email.value;

        signIn({
          email: email,
          password: password
        });
    }
});

Template.signup.events({
  'submit form': function(event, template) {
        event.preventDefault();
        var password = event.target.password.value;
        var email = event.target.email.value;
        var name = event.target.name.value;
        var c_password = event.target.c_password.value;

        signUp({
          name: name,
          email: email,
          password: password,
          c_password: c_password
        });
    }
});

Template.contact.onRendered(function(){

    $('.alert').hide();
});

Template.contact.events({
  "click #send":function(event, template){
    event.preventDefault();
    $('.alert').hide();
    var name =  document.getElementById('name').value;
    if (name == "") {

        $('#Aname').fadeIn('fast');
        return false;
    }
    var email =  document.getElementById('email').value;
    if (email == "") {

        $('#Aemail').fadeIn('fast');
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){

            $('#Aemailformat').fadeIn('fast');
            return false;
        }
    }
    var subject =  document.getElementById('subject').value;
    if (subject == "") {

        $('#Asubject').fadeIn('fast');
        return false;
    }
    var message =  document.getElementById('message').value;
    if (message == "") {

        $('#Amessage').fadeIn('fast');
        return false;
    }



      contact({
          fullname: name,
          email: email,
          sujet: subject,
          message: message
        });

    //document.getElementById('contact-form').submit();
     //$('.alert').addClass('alert-danger').text('Une erreur s\'est produite pendant la mise à jour du stock.').fadeIn('fast');
  }
});


Template.home.onRendered(function(){
    displayLogin();

    var headers = getHeaders();

    if(headers.Authorization != null)
    {
      HTTP.call( 'POST', 'http://localhost:8888/api/get-details/',{
          data: {},
          headers: headers
      }, function( error, response ) {
          if ( error ) {
              console.error(error);
          } else {
            if(response.data != null)
            {
              $('#email').val(response.data.success.email);
              $('#labelEmail').addClass('active');
            }
          }
      });
    }

    var url = new URL(window.location.href);
    if(url.searchParams.get("successLogout") == "")
      $('#successLogout').show();
    if(url.searchParams.get("successLogIn") == "")
      $('#successLogIn').show();
    if(url.searchParams.get("successSignUp") == "")
      $('#successSignUp').show();

});
Template.about.onRendered(function(){
    displayLogin();
});
Template.contact.onRendered(function(){
    displayLogin();
});
Template.donate.onRendered(function(){
    displayLogin();
});
Template.legal.onRendered(function(){
    displayLogin();
});
Template.projet.onRendered(function(){
    displayLogin();
});
Template.signin.onRendered(function(){
    displayLogin();

    var url = new URL(window.location.href);
    if(url.searchParams.get("errorEmailExist") == "")
      $('#errorEmailExist').show();
    $('#email').val(url.searchParams.get("email"));
});
Template.signup.onRendered(function(){
    displayLogin();
});
Template.myprojects.onRendered(function(){
    displayLogin();
});
