//const server = "http://183.98.4.54:8887";

function callPost(cb)
{
  var data = {message: "success"};
  $.post("http://ec2-3-129-5-85.us-east-2.compute.amazonaws.com:3000/open", data, function(r){
    //var o = JSON.parse(r);
    console.log(r);
    //cb();
  });
  cb();
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
