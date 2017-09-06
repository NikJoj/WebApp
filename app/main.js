var button=getElementById('two');

button.onclick=function() {
	res.sendFile(path.join(__dirname,'Users/joji/Desktop/app/','article-one.html'));
};

app.get('/article-one', function (req, res) {
  res.sendFile(path.join(__dirname,'Users/joji/Desktop/app/','article-one.html'));
});
