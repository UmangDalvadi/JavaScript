const getExtension = (fileNmae) => {

    return fileNmae.split(".").pop();
};

console.log(getExtension("login.php"));
console.log(getExtension("about.jsx"));
console.log(getExtension("menuDrive.sh"));