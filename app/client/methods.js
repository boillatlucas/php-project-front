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

                  if(false && response.data.return.project.analyzed !== null){

                      $('#titleGit').html("<a target='_blank' href='"+response.data.return.project.repository_url+"'>"+response.data.return.project.repository_url+"</a>");
                      $('#pBranchGit').html('Branch : '+response.data.return.project.branch);

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

  var repo = data.repository;

  var explode = repo.split("/");

  if(explode[2] == "github.com"){
    $('.error').hide();
    var headers = getHeaders();

    HTTP.call( 'POST', urlApi+'/api/project', {
        data: { repository: data.repository, email: data.email, branch: data.branch },
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
  else {
    $('.error').show();
    $('.error').html('Repository url must come from github.com');
  }

}

testRepo = function(data){

  var urlGithub = 'https://api.github.com/repos/';
  var repo = data.repository;

  var explode = repo.split("/");

  if(explode[2] == "github.com"){
      $('.error').hide();

      var projectName = explode[4].replace(/\.git$/, '');

      urlGithub += explode[3] + '/' + projectName + '/branches';

      $('.loader-analyze').show();

      HTTP.call( 'GET', urlGithub, {}, function(error, response){
        if(response.data.length > 0)
        {
          $('.select-element').remove();
          for(var branch in response.data)
          {
            branchName = response.data[branch].name;
            $('.browser-default').append('<option value="'+branchName+'" class="select-element">'+branchName+'</option>');
            $('.loader-analyze').hide();
          }
        }
      });

  }
  else {
    $('.error').show();
    $('.error').html('Repository url must come from github.com');
  }
}

signUp = function(data){
    HTTP.call( 'POST', urlApi+'/api/register/', {
        data: { name: data.name, email: data.email, password: data.password, c_password: data.c_password }
    }, function( error, response ) {
        if ( error ) {
            var textError = "";
            for(var error in response.data.error){
              if(response.data.error[error] == "An user already exist with this email."){
                Router.go('/sign-in/?email='+data.email+'&errorEmailExist');
              }
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
}

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
  $('body').on('click', '.nav-item', function(){
    $('.navbar-toggler').click();
  });

  var name = sessionStorage.getItem("name");
  var token = sessionStorage.getItem("token");

  $('.hideDisplayLogin').remove();

  if(name == null) {
    $('#login').html('<a class="navbar-brand" href="/sign-in">Sign in</a> <a class="navbar-brand" href="/sign-up">Sign up</a>');
    $('.navbar-addlogin').append('<li class="nav-item hideDisplayLogin"><a class="nav-link" href="/sign-in">Sign in</a></li><li class="nav-item hideDisplayLogin"><a class="nav-link" href="/sign-up">Sign up</a></li>')
    $('.myProjectsMenu').hide();
  }
  else {
    $('.navbar-addlogin').append('<li class="nav-item hideDisplayLogin"><a class="nav-link" href="/disconnect">Disconnect</a></li>')
    $('#login').html('<a class="navbar-brand" href="/disconnect">Disconnect</a>');
    $('.myProjectsMenu').show();
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


changeMessageLoader = function(id, message){
  var timeAnimation = 400;

  $("#errorCVE").animate({left: '2000px'}, timeAnimation, "swing", function(){
    $("#errorCVE").html('<a target="_blank" href="/'+id+'">'+message+"</a>");
    $("#errorCVE").css('left','-2000px');
    $("#errorCVE").animate({left: '0px'}, timeAnimation);
  });

}
