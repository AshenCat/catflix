import { loginValidation } from './Login';

test("user validation", () => {
    expect(loginValidation('five5', 'aaaaaa')).toBe(false);
    expect(loginValidation('nopassword', '')).toBe(false);
    expect(loginValidation(' six6 ', 'a')).toBe(false);
    expect(loginValidation('', '')).toBe(false);
    expect(loginValidation('si 666', 'withpass')).toBe(false);
    expect(loginValidation('sixsix', 'withpass')).toBe(true);
    expect(loginValidation('six666', 'withpass')).toBe(true);
});
