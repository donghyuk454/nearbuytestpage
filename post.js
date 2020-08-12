var conf = {
  server: "http://ec2-3-136-116-6.us-east-2.compute.amazonaws.com:3000",
  data: {
    id: "id",
    value: "value",
    name: "name"
  },

  path_reserve: "/reserve",
  path_open: "/open",
  path_close: "/close"
}


function callPost()
{
  $.post(conf.server /*+ conf.path_reserve*/, conf.data, function(r){
    //var o = JSON.parse(r);
    console.log(r);
    console.log(r.msg);
  });
}

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
}
