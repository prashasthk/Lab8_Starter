// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// isPhoneNumber unit tests
test('Tests valid phone number (212)456-7890', () => {
    expect(functions.isPhoneNumber('(212)456-7890')).toBe(true);
});
test('Tests valid phone number (858)578-5600', () => {
    expect(functions.isPhoneNumber('(858)578-5600')).toBe(true);
});
test("Test invalid phone number 8-88888", () => {
    expect(functions.isPhoneNumber('8-88888')).toBe(false);
});
test("Test invalid phone number 222", () => {
    expect(functions.isPhoneNumber('222')).toBe(false);
});

// isEmail unit tests
test('Tests valid email simple@example.com', () => {
    expect(functions.isEmail('simple@example.com')).toBe(true);
});
test('Tests valid email abc@example.co', () => {
    expect(functions.isEmail('abc@example.co')).toBe(true);
});
test('Tests invalid email paul.example.com', () => {
    expect(functions.isEmail('paul.example.com')).toBe(false);
});
test('Tests invalid email paul@.com', () => {
    expect(functions.isEmail('paul@.com')).toBe(false);
});

// isStrongPassword unit tests
test('Tests strong password HelloWorld', () => {
    expect(functions.isStrongPassword('HelloWorld')).toBe(true);
});
test('Tests strong password Hello123_', () => {
    expect(functions.isStrongPassword('Hello123_')).toBe(true);
});
test('Tests weak password #123', () => {
    expect(functions.isStrongPassword('#123')).toBe(false);
});
test('Tests weak password thisisareallylongpassword', () => {
    expect(functions.isStrongPassword('thisisareallylongpassword')).toBe(false);
});

// isDate unit tests
test('Tests valid date 05/25/2023', () => {
    expect(functions.isDate('05/25/2023')).toBe(true);
});
test('Tests valid date 1/1/3000', () => {
    expect(functions.isDate('1/1/3000')).toBe(true);
});
test('Tests invalid date 05/25/23', () => {
    expect(functions.isDate('05/25/23')).toBe(false);
});
test('Tests invalid date 2023/25/05', () => {
    expect(functions.isDate('2023/25/05')).toBe(false);
});

// isHexColor unit tests
test('Tests valid hex #008000', () => {
    expect(functions.isHexColor('#008000')).toBe(true);
});
test('Tests valid hex #FFFFFF', () => {
    expect(functions.isHexColor('#FFFFFF')).toBe(true);
});
test('Tests invalid hex #fff1az', () => {
    expect(functions.isHexColor('#fff1az')).toBe(false);
});
test('Tests invalid hex #00', () => {
    expect(functions.isHexColor('#00')).toBe(false);
});