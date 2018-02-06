urlApi = 'http://localhost:8888';

Meteor.methods({
    'getProject': function(data){
      var headers = getHeaders();

      HTTP.call( 'GET', urlApi+'/api/project/'+data.slug, {
        params: {},
        headers: headers
      }, function( error, response ) {
          //var analized = [];
          //let tools = ['PHPParallelLint','PHPLoc','PHPCPD','PHPCodeFixer'];
        if ( error ) {
          console.log( error );
        } else {
            if(response.data.return_code == "FAILED"){
                alert('FAILED ! ');
            } else if(response.data.return_code == "OK"){

                  if(response.data.return.project.analyzed !== null){

                      console.log('fini');
                      clearInterval(data.run_every_sec);

                      //$('#response').append(response.content);

                      var rlog = response.data.return.project.logs;

                      $('.loader-container').addClass('done');
                      $('.progress_loader').addClass('done');
                      $('.loader-container').hide();
                      $('.pageProject').show();

                      $('#collapseSucess > table > tbody').empty();
                      $('#collapseStats  > table > tbody').empty();
                      for (var i = 0; i < Object.keys(rlog.SUCCESS).length; i++) {
                          console.log(rlog.SUCCESS[i].final_output);
                          $('#collapseSucess > table > tbody').append('<tr><td>'+rlog.SUCCESS[i].final_output+'</td></tr>')
                        }
//                      for (var i = 0; i < Object.keys(rlog.STATS).length; i++) {
//                          console.log(rlog.STATS[i].final_output);
//                          $('#collapseStats > table > tbody').append('<tr><td>'+rlog.STATS[i].final_output+'</td></tr>')
//                        }

                  }else{
                    $('.loader-container').show();
                  }
            }
        }
      });
    },

    'createProject': function(data){
        //console.log(data);
        var headers = getHeaders();

        HTTP.call( 'POST', urlApi+'/api/project', {
            data: { repository: data.repository, email: data.email },
            headers: headers
        }, function( error, response ) {
            if ( error ) {
                console.log( error );
            } else {
                //console.log(response.data);
                if(response.data.return_code == "OK"){
                    Router.go("/project/"+response.data.return.project_saved.slug);
                }else if(response.data.return_code == "FAILED"){
                    alert('error ! ');
                }

            }
        });
    }
});

signUp = function(data){
    //console.log(data);
    HTTP.call( 'POST', urlApi+'/api/register/', {
        data: { name: data.name, email: data.email, password: data.password, c_password: data.c_password }
    }, function( error, response ) {
        if ( error ) {
            var textError = "";
            console.log(response.data);
            for(var error in response.data.error){

              textError += "<p>"+response.data.error[error]+"</p>";
            };
            $('.error').html(textError);
            $('.error').show();
        } else {
            sessionStorage.setItem("name","vert");
            sessionStorage.setItem("token",response.data.success.token);
            Router.go('home');
        }
    });
},

signIn = function(data){
    //console.log(data);
    HTTP.call( 'POST', urlApi+'/api/login/', {
        data: { email: data.email, password: data.password }
    }, function( error, response ) {
        if ( error ) {
            $('#okCredentials').hide();
            $('#errorCredentials').show();
            $('#password').val('');
        } else {
            sessionStorage.setItem("name","vert");
            sessionStorage.setItem("token",response.data.success.token);
            displayLogin();
            Router.go('/?successLogIn')
        }
    });
}

getHeaders = function(){
    var name = sessionStorage.getItem("name");
    var token = sessionStorage.getItem("token");
    var headers = {};

    if(token != null) {
        headers = {
          "Accept": 'application/json',
          "Authorization": 'Bearer '+token
        }
    }

    return headers;
}

disconnect = function(){
  var headers = getHeaders();

  HTTP.call( 'POST', urlApi+'/api/logout/', {
      headers: headers
  }, function( error, response ) {
      if ( error ) {
          sessionStorage.removeItem('name');
          sessionStorage.removeItem('token');
      } else {
          sessionStorage.removeItem('name');
          sessionStorage.removeItem('token');
      }
  });
}

displayLogin = function(){
  var name = sessionStorage.getItem("name");
  var token = sessionStorage.getItem("token");

  if(name == null) {
    $('#login').html('<a class="btn btn-primary" href="/sign-in">Sign in</a> <a class="btn btn-primary" href="/sign-up">Sign up</a>');
    $('#myProjects').hide();
  }
  else {
    $('#login').html(name+'<a class="btn btn-primary" href="/disconnect">Disconnect</a>');
    $('#myProjects').show();
  }
}

listMyProjects = function(){
  var headers = getHeaders();

  console.log(headers);

  HTTP.call( 'GET', urlApi+'/api/user-projects/',{
      data: {},
      headers: headers
  }, function( error, response ) {
      if ( error ) {
          console.log(error);
      } else {
        console.log(response.data);
        if(response.data.count_result > 0){
          for(var project in response.data.return){
              console.log(response.data.return[project])
              var slug = '/project/'+response.data.return[project].slug;
              var date = new Date(response.data.return[project].created_at);
              var optionsDate = {year: "numeric", month: "numeric", day: "numeric"};
              var dateFormat = date.toLocaleDateString("en-GB")+' '+date.toLocaleTimeString('fr-FR');
              var urlRepo = response.data.return[project].repository_url;
              var html = '<div class="project"><div style="margin-bottom: 5px;"><i class="fa fa-link"></i> '+urlRepo+'</div><div><i class="fa fa-calendar"></i> '+dateFormat+'</div><div class="goToTest"><a href="'+slug+'" class="btn-primary btn">Go to test</a></div></div>';
              $('.myProjects').append(html);
          };
        }
        else {
          var html = '<div class="project">You have not scanned projects yet.</div>';
          $('.myProjects').append(html);
        }

      }
  });
}
