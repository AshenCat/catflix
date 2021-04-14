const { 
    removeSymbolsAndTypeOfFileName,
    isEmailValid,
    isPasswordValid,
    isUsernameValid,
} = require('../routes/functions/functions');

const assert = require('chai').assert;

describe('App', ()=>{
    it('validates email', () => {
        assert.equal(isEmailValid('sampleemail@yahoo.com'), true);
        assert.equal(isEmailValid('asd123@yahoo.com'), true);
        assert.equal(isEmailValid('s@mpleemail@yahoo.com'), false);
        // assert.equal(isEmailValid('sa.mpleemail@yahoo.com'), false);
        assert.equal(isEmailValid('samp[leemail@yahoo.com'), false);
        // assert.equal(isPasswordValid(''))
    })

    it('takes no whitespace/invalid symbol username', () => {
        assert.equal(isUsernameValid('five5'), false);
        assert.equal(isUsernameValid(' six6 '), false);
        assert.equal(isUsernameValid(''), false);
        assert.equal(isUsernameValid('si 666'), false);
        assert.equal(isUsernameValid('a__ __a'), false);
        assert.equal(isUsernameValid('__six__'), true);
        assert.equal(isUsernameValid('six666'), true);
    })

    it('takes no whitespace/invalid symbol password', () => {
        assert.equal(isPasswordValid(''), false);
        assert.equal(isPasswordValid('aaaaa'), false);
        assert.equal(isPasswordValid(' aa aaa'), false);
        assert.equal(isPasswordValid(`aa\\aa`), false);
        assert.equal(isPasswordValid('aaaaa*'), false);
        assert.equal(isPasswordValid('aaaaa\\'), false);
        assert.equal(isPasswordValid('aaaaa\''), false);
        assert.equal(isPasswordValid('aaaaa"'), false);
        assert.equal(isPasswordValid('aaaaa['), false);
        assert.equal(isPasswordValid('aaaaa]'), false);
        assert.equal(isPasswordValid('aaaaa{'), false);
        assert.equal(isPasswordValid('aaaaa}'), false);
        assert.equal(isPasswordValid('aaaaa;'), false);
        assert.equal(isPasswordValid('aaaaa<'), false);
        assert.equal(isPasswordValid('aaaaa>'), false);
        assert.equal(isPasswordValid('aaaaa('), false);
        assert.equal(isPasswordValid('aaaaa)'), false);
        assert.equal(isPasswordValid('*"[]{}asd^%*\''), false);
        // assert.equal(isPasswordValid('*"[]{}asd^&%$&*\''), false);
        assert.equal(isPasswordValid('/asd^&%$&*'), true);
        assert.equal(isPasswordValid('ASD123zxc'), true);
    })

    it('removes file extension and symbols', ()=> {
        assert.equal(removeSymbolsAndTypeOfFileName('Logo.cat-neko[pog].png'), 'Logocatnekopogpng')
        assert.equal(removeSymbolsAndTypeOfFileName('Logo.cat-neko[pog]'), 'Logocatnekopog')
        assert.equal(removeSymbolsAndTypeOfFileName('JustAboutRight'), 'JustAboutRight')
    })
})