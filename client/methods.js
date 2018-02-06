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
                      
                      //console.log('fini');                
                      clearInterval(data.run_every_sec);
                      //return false;
                       // console.log( response );

                      //$('#response').append(response.content);

                      var rlog = response.data.return.project.logs;
//                      console.log(response.data.return.project.logs);
                      $('.loader-container').addClass('done');
                      $('.progress_loader').addClass('done');
                      
                      $('#collapseSucess > table > tbody').empty();
                      $('#collapseStats  > table > tbody').empty();
                      $('#collapseWarning > table > tbody').empty();
                      $('#pWarning').empty();
                      $('#pSucces').empty();
                      
                      if(rlog.SUCCESS != undefined){
                          for (var i = 0; i < Object.keys(rlog.SUCCESS).length; i++) {
    //                          console.log(rlog.SUCCESS[i].final_output);
                              $('#collapseSucess > table > tbody').append('<tr><td>'+rlog.SUCCESS[i].final_output+'</td></tr>')
                            }
                          $('#pSucces').append(i +" successful analyzes");
                      }else{
                           $('#pSucces').append("0 successful analyzes");
                      }
                       
                      
                      if(rlog.STATS != undefined){
                          for (var i = 0; i < Object.keys(rlog.STATS).length; i++) {
    //                          console.log(rlog.STATS[i].final_output);
                              //$('#pStats').append(rlog.STATS[i].final_output);
    //                          console.log(rlog.STATS[i].logs_lines);
                              for (var j = 0; j < Object.keys(rlog.STATS[i].logs_lines).length; j++) {
    //                              console.log(rlog.STATS[i].logs_lines[j]);
                                  $('#collapseStats > table > tbody').append('<tr><td>'+rlog.STATS[i].logs_lines[j].content+'</td></tr>')
                              }
                           }
                         
                      }
                      
                      if(rlog.WARNING != undefined){
                        for (var i = 0; i < Object.keys(rlog.WARNING).length; i++) {
//                          console.log(rlog.STATS[i].final_output);
                           $('#collapseWarning > table > tbody').append('<tr><td><b>'+rlog.WARNING[i].final_output+'</b></td></tr>')
//                          console.log(rlog.STATS[i].logs_lines);
                          for (var j = 0; j < Object.keys(rlog.WARNING[i].logs_lines).length; j++) {
//                              console.log(rlog.STATS[i].logs_lines[j]);
                              $('#collapseWarning > table > tbody').append('<tr><td>'+rlog.WARNING[i].logs_lines[j].content+'</td></tr>')
                          }
                       }
                          $('#pWarning').append(j +" found");
                      }else{
                          $('#pWarning').append("0 found");
                      }
                      
                  
                  }else{                     
                      //console.log('en cours'); 
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
