function isUsernameValid(username){
    // return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]\s/g.test(username);
    return /^[a-zA-Z0-9_]{6,18}$/.test(username)
}

function isPasswordValid(password){
    return /[^\s\\/'"[{\]}()*<>;]{6,18}/.test(password)
}

function isEmailValid(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

module.exports = {
    isUsernameValid,
    isPasswordValid,
    isEmailValid
}