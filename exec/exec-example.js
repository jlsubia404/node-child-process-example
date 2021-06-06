const { exec } = require("child_process");

// be careful when you use exec with dynamic content
exec("find . -type f | wc -l", (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }

  console.log(`Number of files ${stdout}`);
});

//If you need to execute a file without using a shell, 
//the execFile function is what you need. 
//It behaves exactly like the exec function, but does not use a shell, 
//which makes it a bit more efficient. 
//On Windows, some files cannot be executed on their own, like .bat or .cmd files. 
//Those files cannot be executed with execFile and either exec or spawn with shell set to true is required to execute them.