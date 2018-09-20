

// Give you two strings a and b, could you write a function to check if add / remove / replace one character in string a can make it the same with string b.

// abc, abcd => true
// abc, ac => true
// cat, bat => true
// abc, acd => false
// ab, abcd => false
{
  function compare(str1, str2) {
    let j = 0,
      misMatch = 0;
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
      return false;
    }

    for (let i = 0; i < str1.length;) {
      if (str1[i] !== str2[j]) {
        misMatch += 1;
        if (str2.length > str1.length) {
          j++;
        } else
          if (str2.length === str1.length) {
            i++;
            j++;
          } else {
            i++;
          }

      } else {
        j++;
        i++;
      }
    }
    misMatch = misMatch + (str2.length - j);
    if (misMatch <= 1) {
      return true;
    } else {
      return false;
    }
  }

  compare('abc', 'abcd');
  compare('abc', 'ac');
  compare('cat', 'bat');
  compare('abc', 'acd');
}
//  Testcase : 
// describe(‘Test suit for compare function’) {
//   assert(compare(‘abc’, ‘ab’)).isTrue();
//   assert(compare(‘ab’, ‘abc’)).isTrue();
//   assert(compare(‘a’, ‘’)).isTrue();
//   assert(compare(‘’, ‘a’)).isTrue();
//   assert(compare(‘’, ‘’)).isTrue();
//   assert(compare(‘abcde’, ‘acbde’)).isFalse();
//   assert(compare(‘’, ‘ac’)).isFalse();
//   assert(compare(‘ab’, ‘’)).isFalse();
//   assert(compare(‘abcd’, ‘cd’)).isFalse();
//   assert(compare(‘abcd’)).isFalse();
//   assert(compare(undefined, ‘abcd’)).isFalse();
// }



