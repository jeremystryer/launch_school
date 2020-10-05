const Account = (() => {

  function randomCharSequence(numChars) {
    const allChars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let seq = "";

    for (let count = 0; count < numChars; count += 1) {
      let nextChar = allChars[Math.floor(Math.random() * allChars.length)];
      seq = seq.concat(nextChar);
    }

    return seq;
  }

  function getProperty(propertyName, propertyObj) {
    return propertyObj[propertyName];
  }

  function isValidPasswd(testPass) {
    return testPass === this.getProperty("passwd");
  }

  return {
    init(emailAddress, passwd, first, last) {

      let props =  {
        first,
        last,
        passwd,
        emailAddress,
      };

      this.getProperty = function (propertyName) {
        return props[propertyName];
      };

      this.setProperty = function (propertyName, value) {
        props[propertyName] = value;
      };

      this.isValidPasswd = function (testPass) {
        return testPass === this.getProperty("passwd");
      };

      this.reanonymize(passwd);
      return this;
    },

    reanonymize(passwd) {
      if (this.isValidPasswd(passwd)) {
        this.displayName = randomCharSequence(16);
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    resetPassword(passwd, newPass) {
      if (this.isValidPasswd(passwd)) {
        this.setProperty('passwd', newPass);
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    firstName(passwd) {
      return this.isValidPasswd(passwd) ? this.getProperty("first") : 'Invalid Password';
    },

    lastName(passwd) {
      return this.isValidPasswd(passwd) ? this.getProperty("last") : 'Invalid Password';
    },

    email(passwd) {
      return this.isValidPasswd(passwd) ? this.getProperty("emailAddress") : 'Invalid Password';
    },
  };
})();

const fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

const displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

const bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(fooBar.firstName('abc'));              // logs 'baz' but should log foo.
console.log(fooBar.email('abc'));                  // 'baz@qux.com' but should 'foo@bar.com'
