require('http')
.Server((req, res) => require('fs').createReadStream('./index.html').pipe(res))
.listen(process.env.PORT);
