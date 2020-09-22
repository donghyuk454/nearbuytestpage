const server = "http://183.98.4.54:8887";

function callPost()
{
  var data = {message: "success"};
  $.post(server, data, function(r){
    //var o = JSON.parse(r);
    console.log(r);
  });
}
/*
function callPost_open(data)
{
  $.post(conf.server + conf.path_open, data, function(r){
    //var o = JSON.parse(r);
    console.log(r);
    console.log(r.msg);
  });
}

function callPost_close(data)
{
  $.post(conf.server + conf.path_close, data, function(r){
    //var o = JSON.parse(r);
    console.log(r);
    console.log(r.msg);
  });
}*/
