Meteor.methods({
    'getProject': function(data){
      HTTP.call( 'GET', 'http://localhost:8888/api/project/'+data.slug, {
        params: {}
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
                      
//                      console.log('fini');                
                      clearInterval(data.run_every_sec);
                      //return false;
                        //console.log( response );

                      //$('#response').append(response.content);

                      var rlog = response.data.return.project.logs;
//                      console.log(response.data.return.project.logs);
                      $('.loader-container').addClass('done');
                      $('.progress_loader').addClass('done');
                      
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
//                      console.log('en cours'); 
                  }
            }
        }
      });
    },

    'createProject': function(data){
        //console.log(data);
        HTTP.call( 'POST', 'http://localhost:8888/api/project', {
            data: { repository: data.repository, email: data.email }
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
