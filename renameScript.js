const fs = require('fs');
const pathModule = require('path');

/**
 * isRootDirectoryValid
 * @param {String} path
 */
function isRootDirectoryValid(path) {
  if (typeof path !== 'string') {
    throw new Error('Directory path must be a string.');
  }

  const stat = fs.statSync(path);

  if (!stat.isDirectory()) {
    throw new Error('You must give a valid directory as argument.');
  }

  return true;
}

/**
 * processDir
 * @param {String} path
 */
function processDir(path, ...args) {
  console.log(`\\${path}`);
  const result = fs.readdirSync(path, { withFileTypes: true });

  const directories = result.filter(dirent => dirent.isDirectory()),
    files = result.filter(dirent => dirent.isFile());

  files.forEach(file => processFile(pathModule.join(path, file.name), ...args));
  directories.forEach(dirent =>
    processDir(pathModule.join(path, dirent.name), ...args)
  );
}

/**
 * processFile
 * @param {String} path
 * @param {String} pattern
 * @param {string} replace
 */
function processFile(path, pattern, replace) {
  console.log('\t-', path);

  const fdR = fs.openSync(path, 'r');
  const data = fs.readFileSync(fdR, 'utf8');
  fs.closeSync(fdR);

  const result = data.replace(pattern, replace);

  const fdW = fs.openSync(path, 'w');
  fs.writeFileSync(fdW, result, 'utf8');
  fs.closeSync(fdW);
}

/**
 * run
 * @param {String} path
 */
function run(path, ...args) {
  try {
    isRootDirectoryValid(path);

    processDir(path, ...args);
  } catch (e) {
    console.log(e);
  }
}

const rootDirectory = process.argv[2],
  pattern = new RegExp(process.argv[3].toString(), 'g'),
  replace = process.argv[4];

run(rootDirectory, pattern, replace);
