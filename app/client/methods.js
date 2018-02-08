urlApi = 'http://localhost:8888';

getProject = function(data){
  HTTP.call( 'GET', urlApi+'/api/project/'+data.slug, {
        params: {},
        headers: getHeaders()
      }, function( error, response ) {
        if ( error ) {
          console.error( error );
        } else {
            if(response.data.return_code == "FAILED"){
                alert('FAILED ! ');
            } else if(response.data.return_code == "OK"){

                  if(response.data.return.project.analyzed !== null){

                      $('#titleGit').text(response.data.return.project.repository_url);

                      clearInterval(data.run_every_sec);

                      $('.loader-container').addClass('done');
                      $('.progress_loader').addClass('done');
                      $('.pageProject').show();

                      $('#collapseSucess > table > tbody').empty();
                      $('#collapseStats  > table > tbody').empty();
                      $('#collapseWarning > table > tbody').empty();
                      $('#collapseError > table > tbody').empty();

                      $('#pWarning').empty();
                      $('#pSucces').empty();
                      $('#pError').empty();

                      $('#angleSucess').show();
                      $('#angleWarning').show();
                      $('#angleError').show();

                      var rlog = response.data.return.project.logs;

                      if(rlog.SUCCESS != undefined){
                          for (var i = 0; i < Object.keys(rlog.SUCCESS).length; i++) {
                              $('#collapseSucess > table > tbody').append('<tr><td>'+rlog.SUCCESS[i].final_output+'</td></tr>')
                            }
                          $('#pSucces').append(i +" successful analyzes");
                      }else{
                           $('#pSucces').append("0 successful analyzes");
                           $('#angleSucess').hide();
                      }


                      if(rlog.STATS != undefined){
                          for (var i = 0; i < Object.keys(rlog.STATS).length; i++) {
                              for (var j = 0; j < Object.keys(rlog.STATS[i].logs_lines).length; j++) {
                                  $('#collapseStats > table > tbody').append('<tr><td>'+rlog.STATS[i].logs_lines[j].content+'</td></tr>')
                              }
                           }
                      }

                      if(rlog.WARNING != undefined){
                        for (var i = 0; i < Object.keys(rlog.WARNING).length; i++) {
                           $('#collapseWarning > table > tbody').append('<tr><td><b>'+rlog.WARNING[i].final_output+'</b></td></tr>')
                          for (var j = 0; j < Object.keys(rlog.WARNING[i].logs_lines).length; j++) {
                              $('#collapseWarning > table > tbody').append('<tr><td>'+rlog.WARNING[i].logs_lines[j].content+'</td></tr>')
                          }
                        }
                          $('#pWarning').append(j +" found");
                      }else{
                          $('#pWarning').append("0 found");
                          $('#angleWarning').hide();
                      }

                      if(rlog.ERROR != undefined){
                        for (var i = 0; i < Object.keys(rlog.ERROR).length; i++) {
                           $('#collapseError > table > tbody').append('<tr><td><b>'+rlog.ERROR[i].final_output+'</b></td></tr>')
                          for (var j = 0; j < Object.keys(rlog.ERROR[i].logs_lines).length; j++) {
                              $('#collapseError > table > tbody').append('<tr><td>'+rlog.ERROR[i].logs_lines[j].content+'</td></tr>')
                          }
                        }
                          $('#pError').append(j +" found");
                      }else{
                          $('#pError').append("0 found");
                          $('#angleError').hide();
                      }


                  }else{
                      $('.loader-container').show();
                      
                  }
            }
        }
      });
}

createProject = function(data){
    var headers = getHeaders();

    HTTP.call( 'POST', urlApi+'/api/project', {
        data: { repository: data.repository, email: data.email },
        headers: headers
    }, function( error, response ) {
        if ( error ) {
            console.error( error );
        } else {
            if(response.data.return_code == "OK"){
                Router.go("/project/"+response.data.return.project_saved.slug);
            }else if(response.data.return_code == "FAILED"){
                alert('error ! ');
            }

        }
    });
}

getCVE = function(data){
    HTTP.call( 'GET', 'http://cve.circl.lu/api/search/php/php', {      
    }, function( error, response ) {
        if ( error ) {
            console.error( error );
        } else {
              var i = 0;
		      setInterval(function(){
                   i++;
                    $('#errorCVE').html('<a target="_blank" href="https://cve.circl.lu/cve/'+response.data[i].id+'" title="Click for more detail">'+response.data[i].summary+'</a>');
              }, 8000);
        }
    });
}

contact = function(data){
    HTTP.call( 'POST', urlApi+'/api/contact/', {
        data: { fullname: data.fullname, email: data.email, sujet: data.sujet, message: data.message }
    }, function( error, response ) {
        if ( error ) {
             console.error(error);
            $('#AstatusError').fadeIn('fast');
           
        } else {
           console.log(response);
            $('#Astatus').fadeIn('fast');
        }
    });
},

signUp = function(data){
    HTTP.call( 'POST', urlApi+'/api/register/', {
        data: { name: data.name, email: data.email, password: data.password, c_password: data.c_password }
    }, function( error, response ) {
        if ( error ) {
            var textError = "";
            for(var error in response.data.error){

              textError += "<p>"+response.data.error[error]+"</p>";
            };
            $('.error').html(textError);
            $('.error').show();
        } else {
            sessionStorage.setItem("name",response.data.success.token);
            sessionStorage.setItem("token",response.data.success.token);
            Router.go('home');
        }
    });
},

signIn = function(data){
    HTTP.call( 'POST', urlApi+'/api/login/', {
        data: { email: data.email, password: data.password }
    }, function( error, response ) {
        if ( error ) {
            $('#okCredentials').hide();
            $('#errorCredentials').show();
            $('#password').val('');
        } else {
            sessionStorage.setItem("name",response.data.success.name);
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
    $('#login').html('<a class="navbar-brand" href="/sign-in">Sign in</a> <a class="navbar-brand" href="/sign-up">Sign up</a>');
    $('#myProjects').hide();
  }
  else {
    $('#login').html('<a class="navbar-brand" href="/disconnect">Disconnect</a>');
    $('#myProjects').show();
  }
}

listMyProjects = function(){
  var headers = getHeaders();

  HTTP.call( 'GET', urlApi+'/api/user-projects/',{
      data: {},
      headers: headers
  }, function( error, response ) {
      if ( error ) {
          console.error(error);
      } else {
        if(response.data.count_result > 0){
          for(var project in response.data.return){
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
