const fse = require("fs-extra");
const exec = require("child_process").exec;

module.exports.getAllDrives = () => {
    return new Promise ((resolve, reject) => {
        exec('wmic logicaldisk get name', (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                reject(error)
            }
            let out = stdout.split("\r\n").map(e=>e.trim()).filter(e=>e!="");
            if(out[0] === "Name") resolve(out.slice(1));
        });
    })
};
