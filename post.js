const server = "http://ec2-3-136-116-6.us-east-2.compute.amazonaws.com:3000";

function callPost(data)
{
  $.post(server + "/db", data, function(r){
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
