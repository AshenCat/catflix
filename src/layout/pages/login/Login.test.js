import { loginUsernameValidation, loginPasswordValidation } from './Login';

test("username validation", () => {
    expect(loginUsernameValidation('five5')).toBe(false);
    expect(loginUsernameValidation(' six6 ')).toBe(false);
    expect(loginUsernameValidation('')).toBe(false);
    expect(loginUsernameValidation('si 666')).toBe(false);
    expect(loginUsernameValidation('a__ __a')).toBe(false);
    expect(loginUsernameValidation('__six__')).toBe(true);
    expect(loginUsernameValidation('six666')).toBe(true);
});

test("password validation", () => {
    expect(loginPasswordValidation('aaaaaa')).toBe(true);
    expect(loginPasswordValidation('.')).toBe(true);
    expect(loginPasswordValidation(' . ')).toBe(true);
    expect(loginPasswordValidation(' ')).toBe(false);
    expect(loginPasswordValidation('')).toBe(false);
})
