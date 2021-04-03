import { RegisterUsernameValidation, RegisterPasswordValidation } from "./Register";

test("username validation", () => {
    expect(RegisterUsernameValidation('five5')).toBe(false);
    expect(RegisterUsernameValidation(' six6 ')).toBe(false);
    expect(RegisterUsernameValidation('')).toBe(false);
    expect(RegisterUsernameValidation('si 666')).toBe(false);
    expect(RegisterUsernameValidation('a__ __a')).toBe(false);
    expect(RegisterUsernameValidation('__six__')).toBe(true);
    expect(RegisterUsernameValidation('six666')).toBe(true);
})

test("password validation", () => {
    expect(RegisterPasswordValidation('.')).toBe(false);
    expect(RegisterPasswordValidation('')).toBe(false);
    expect(RegisterPasswordValidation('aaaaa')).toBe(false);
    expect(RegisterPasswordValidation('aaaaa ')).toBe(false);
    expect(RegisterPasswordValidation(`aaaaa\\`)).toBe(false);
    expect(RegisterPasswordValidation(`*aaaa*`)).toBe(false);
    expect(RegisterPasswordValidation('aaaaa_')).toBe(true);
    expect(RegisterPasswordValidation('aaaaaa')).toBe(true);
})