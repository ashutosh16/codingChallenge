// https://www.youtube.com/watch?v=IrHmpdORLu8&list=PLlasXeu85E9eV5xUEgrWUB8NAUvNZGsK0&index=16

// Case 1: DOM rendering is paused while fetching and running the script tag
<script src="abc.js" />
// <START *--- dom rendering ---*                                                                           *---continue dom rendering------* END>
//                              *--encounter the script tag start fetching-----**---running script tag-----* 

// Case 2: async (DOM rendering the paused while running the script tag)
  <script async src="abc.js" />
// <START *--- dom rendering ---*----------continue dom rendering--------------*                             *---continue dom rendering------* END>
//                              *--encounter the script tag start fetching-----**----running script tag -----*

//   Case 3: Defer (DOM rendering will continue untill finish rendering and at last scripts are run)
<script defer src="abc.js" />
  
// <START *--- dom rendering ---*----------continue dom rendering--------------**---continue dom rendering------* END>                             
//                              *--encounter the script tag start fetching-----*                                      *----running script tag -----*
