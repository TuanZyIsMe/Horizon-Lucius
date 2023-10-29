module.exports = async function(Stable_Version) {
    const got = require('got');
    const log = require('npmlog');
    const fs = require('fs');
    const Database = require('../Database');
    const { execSync } = require('child_process');
    //make request https://raw.githubusercontent.com/KanzuXHorizon/Fca-Horizon-Remastered/main/package.json
    const { body } = await got('https://run.mocky.io/v3/57a5495b-71ed-4995-b09e-12a4369559bd');
    const json = JSON.parse(body);
    const LocalVersion = require('../../package.json').version;
        if (Number(LocalVersion.replace(/\./g,"")) < Number(json.version.replace(/\./g,"")) && global.Fca.Require.FastConfig.Stable_Version.Accept == false || Stable_Version && Number(LocalVersion.replace(/\./g,"")) != Number(Stable_Version.replace(/\./g,""))) {
            var Version = Stable_Version != undefined ? Stable_Version : json.version;
            log.warn("[ FCA-UPDATE ] ➣","New Version, Ready to Update: " + LocalVersion + " ➣ " + Version);    
            await new Promise(resolve => setTimeout(resolve, 3000));
            try {
                execSync(`npm install horizon-lucius@${Version}`, { stdio: 'inherit' });
                log.info("[ FCA-UPDATE ] ➣","Update Complete, Restarting...");
                await new Promise(resolve => setTimeout(resolve, 3000));
                Database().set("Instant_Update", Date.now());
                await new Promise(resolve => setTimeout(resolve, 3000));
                process.exit(1);
            }
            catch (err) {
                try {
                    console.log(err);  
                    log.warn("[ FCA-UPDATE ] ➣","Update Failed, Trying Another Method 1...");
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    execSync(`npm install horizon-lucius@${Version} --force`, { stdio: 'inherit' });
                    log.info("[ FCA-UPDATE ] ➣","Update Complete, Restarting...");
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    Database().set("Instant_Update", Date.now());
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    process.exit(1);
                }
                catch (err) {
                    try {
                        console.log(err);
                        log.warn("[ FCA-UPDATE ] ➣","Update Failed, Trying to clean Database() cache...");
                        await new Promise(resolve => setTimeout(resolve, 3000));
                        execSync('npm cache clean --force', { stdio: 'inherit' });
                        log.info("[ FCA-UPDATE ] ➣","Cache Cleaned, Trying Another Method 2...");
                        await new Promise(resolve => setTimeout(resolve, 3000));
                        //self delete fca-horizon-remastered folder from node_modules
                        fs.rmdirSync((process.cwd() + "/node_modules/horizon-lucius" || __dirname + '../../../ltzy-horizon'), { recursive: true });
                        await new Promise(resolve => setTimeout(resolve, 3000));
                        execSync(`npm install horizon-lucius@${Version}`, { stdio: 'inherit' });
                        log.info("[ FCA-UPDATE ] ➣","Update Complete, Restarting...");
                        await new Promise(resolve => setTimeout(resolve, 3000));
                        Database().set("Instant_Update", Date.now(), true);
                        await new Promise(resolve => setTimeout(resolve, 3000));
                        process.exit(1);
                    }
                    catch (e) {
                        console.log(e);
                        log.error("[ FCA-UPDATE ] ➣","Update Failed, Please Update Manually");
                        await new Promise(resolve => setTimeout(resolve, 3000));
                        log.warn("[ FCA-UPDATE ] ➣","Please contact to owner about update failed and screentshot error log at fb.com/100004458484369");
                        await new Promise(resolve => setTimeout(resolve, 3000));
                        process.exit(1);
                    }
                }
            }
        }
    else {
        return Database().set("NeedRebuild", false, true);
    }
}