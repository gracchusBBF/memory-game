export function testPwd(pwdToTest) {

    const pwdRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z0-9!@#$%^&*(),.?":{}|<>]{8,}$/;

    return pwdRegex.test(pwdToTest);
}