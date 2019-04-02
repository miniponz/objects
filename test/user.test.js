const { User } = require('../lib/user');

describe('user tests', () => {
  test('User has id, name, email, and password', () => {
    const user = new User('cara', 'email@email.com', 'password');
    expect(user.name).toEqual('cara');
    expect(user.email).toEqual('email@email.com');
    expect(user.password).toEqual('password');
  });

  test('User has id generated by uuid', () => {
    const user = new User('cara', 'email@email.com', 'password');
    expect(user.id).toEqual(expect.any(String));
  });

  test('returns name and email to string', () => {
    const user = new User('cara', 'email@email.com', 'password');
    expect(user.toString()).toEqual('cara | email@email.com');
  });

  test('replaces old password with new password', () => {
    const user = new User('cara', 'email@email.com', 'password');
    user.resetPassword('password', 'cheese');
    expect(user.password).toBe('cheese');
  });

  test('replaces old password with new password', () => {
    expect(() => {
      const user = new User('cara', 'email@email.com', 'password');
      user.resetPassword('onion', 'cheese');
    }).toThrow();
  });

  test('increments counter each time User used', () => {
    new User('cara', 'email@email.com', 'password');
    new User('dogg', 'dog@email.com', 'password');
    expect(User.count()).toBe('7');
  });

});
