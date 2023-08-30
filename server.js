
const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
  
  const url = req.url;

  
  res.setHeader('Content-Type', 'text/plain');

  
  if (url === '/') {
   
    res.write('This is Home Page');
  } else if (url === '/about') {
    
    res.write('This is About Page');
  } else if (url === '/contact') {
    
    res.write('This is Contact Page');
  } else if (url === '/file-write') {

    fs.writeFile('demo.txt', 'hello world', (err) => {
      if (err) {

        console.error(err);
        res.write('File write failed');
      } else {
        
        res.write('File write succeeded');
      }
      
      res.end();
    });
    
    return;
  } else {
    
    res.write('Invalid url');
  }

  
  res.end();
});


server.listen(3000, () => {
  
  console.log('Server listening on port 3000');
});
