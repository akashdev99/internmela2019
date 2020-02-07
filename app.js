var express=require("express");
var app=express();
app.set('view engine','ejs');
app.use(express.static(__dirname + "/public"));
var port=process.env.PORT || 3000;
app.get('/',function(req,res){
	 res.render('pages/index');
	});
app.get('/team',function(req,res){
	res.render('pages/team');
});

app.get('/company',function(req,res){
	res.render('pages/company');
})





app.listen(port);