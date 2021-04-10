// Remove Comments
// Example 1:
// Input: 
// source = ["/*Test program */", "int main()", "{ ", "  // variable declaration ", "int a, b, c;", "/* This is a test", 
//           "   multiline  ", "   comment for ", "   testing */", "a = b + c;", "}"]

// The line by line code is visualized as below:
// /*Test program */
// int main()
// { 
//   // variable declaration 
// int a, b, c;
// /* This is a test
//    multiline  
//    comment for 
//    testing */
// a = b + c;
// }

// Output: ["int main()","{ ","  ","int a, b, c;","a = b + c;","}"]

// The line by line code is visualized as below:
// int main()
// { 
  
// int a, b, c;
// a = b + c;
// }

// Explanation: 
// The string /* denotes a block comment, including line 1 and lines 6-9. The string // denotes line 4 as comments.


// Example 2:
// Input: 
// source = ["a/*comment", "line", "more_comment*/b"]
// Output: ["ab"]
// Explanation: The original source string is "a/*comment\nline\nmore_comment*/b", where we have bolded the newline characters.
// After deletion, the implicit newline characters are deleted, leaving the string "ab", which when delimited by newline characters becomes ["ab"].


// Note:
// The length of source is in the range [1, 100].
// The length of source[i] is in the range [0, 80].
// Every open block comment is eventually closed.
// There are no single-quote, double-quote, or control characters in the source code.

/**
 * @param {string[]} source
 * @return {string[]}
 */
var removeComments = function(source) {
    let isFindClose = false;
    let output = [];
    let saveWord = '';
  
    source.forEach(line => {
      for(let i = 0; i < line.length; i++) {
        //Closing comments "*/"
        if(isFindClose && line[i] === '*' && line[i+1] === '/') {
          isFindClose = false;
          i++;
        } else 
          // Starting multiline comment "/*"
          if(!isFindClose && line[i] === '/' && line[i+1] === '*'){
            isFindClose = true;
            i++;
          } else 
            // Starting single line comments "//"
            if(!isFindClose && line[i] === '/' && line[i+1] === '/' ) {
              i =  line.length; // this will ignore all remaining char from the line.
            } else {
              !isFindClose && (saveWord += line[i]);
            }
      }
      //If we are searching for close comment char then dont add string to output yet. check case 2
      if(saveWord.length && !isFindClose) {
        output.push(saveWord);
        saveWord = '';
      }
    });
  return output;
};


removeComments(["/*Test program */", "int main()", "{ ", "  // variable declaration ", "int a, b, c;", "/* This is a test", "   multiline  ", "   comment for ", "   testing */", "a = b + c;", "}"]);
//["int main()", "{ ", "  ", "int a, b, c;", "a = b + c;", "}"]

// Case 2:
removeComments(["a/*comment", "line", "more_comment*/b"]);
//["ab"]


removeComments(["struct Node{", "    /*/ declare members;/**/", "    int size;", "    /**/int val;", "};"]);
//["struct Node{","    ","    int size;","    int val;","};"]


removeComments(["a/*/b//*c","blank","d/*/e*//f"]);
//["ae*"]

