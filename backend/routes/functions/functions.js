function isUsernameValid(username){
    // return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]\s/g.test(username);
    return /^[a-zA-Z0-9_]{6,18}$/.test(username)
}

function isPasswordValid(password){
    return /[^\s\\/'"[{\]}()*<>;]{6,18}/.test(password)
}

function isEmailValid(email){
    return /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}

function removeSymbolsAndTypeOfFileName(fileName){
    const extension = fileName.split('.').pop();
    // console.log(fileName.split('.').slice(0,-1).join().replace(/[&/\\\-@`!;#,^+()$[\]~%.'":*?<>{}]/,'').concat('.',extension))
    return fileName.split('.').slice(0,-1).join().replace(/[&/\\\-@`!;#,^+()$[\]~%.'":*?<>{}]/g,'').concat('.', extension);
}

module.exports = {
    isUsernameValid,
    isPasswordValid,
    isEmailValid,
    removeSymbolsAndTypeOfFileName
}