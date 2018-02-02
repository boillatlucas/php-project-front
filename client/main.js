import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';

import './main.html';
import './methods.js';
import './router.js';


Template.home.events({
  'submit form': function(event, template) {
        event.preventDefault();
        var repository = event.target.repository.value;
        var email = event.target.email.value;

        Meteor.call('createProject', {
          repository: repository,
          email: email
        });
    }
});
 

Template.projet.onRendered(function(){
    
    let slug = $(location).attr('pathname').split('/');
    //console.log(slug[2]);
    run_every_sec = setInterval(function (){ 
          Meteor.call('getProject', {slug: slug[2],run_every_sec: run_every_sec},function(error, result) {
               
          });
   } , 1000);
    //console.log(run_every_sec);   
});


Template.projet.destroyed = function() {
    Meteor.clearInterval(run_every_sec);
};

Template.projet.events({
  "click .buttonExpand":function(event, template){
    //jQ(event.target);
    //console.log(template);
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
    
      $('#Astatus').fadeIn('fast');
    //document.getElementById('contact-form').submit();
     //$('.alert').addClass('alert-danger').text('Une erreur s\'est produite pendant la mise à jour du stock.').fadeIn('fast');
  }
});



