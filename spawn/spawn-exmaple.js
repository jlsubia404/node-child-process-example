const { spawn } = require('child_process');

// spawn with params
//const child = spawn('find', ['.', '-type', 'f']);
const child = spawn('pwd');



child.on('exit', function (code, signal) {
    console.log('child process exited with ' +
                `code ${code} and signal ${signal}`);
  });


  child.stdout.on('data', (data) => {
    console.log(`child stdout:\n${data}`);
  });
  
  child.stderr.on('data', (data) => {
    console.error(`child stderr:\n${data}`);
  });


/*const child_1 = spawn('wc');

process.stdin.pipe(child_1.stdin)

child_1.stdout.on('data', (data) => {
  console.log(`child_1 stdout:\n${data}`);
});*/


// attach stream beetween chil process, just like linux
const find = spawn('find', ['.', '-type', 'f']);
const wc = spawn('wc', ['-l']);

find.stdout.pipe(wc.stdin);

wc.stdout.on('data', (data) => {
  console.log(`Number of files ${data}`);
});

// spawn with shell syntaxt and attached de s

// we can pass cwd for setting the working directory of process.
// also we have the env param to pass environmetn varibales to process
/**
 *  env: { ANSWER: 42 }
 */
const child = spawn('find . -type f | wc -l', {
    stdio: 'inherit',
    shell: true
  });