
    // TAIL RECURSION
    function rec1(n) {
        if (n > 0) {
          rec1(n - 1);
          console.log("TAIL " +n);
        }
      }

// function rec1(n) {
//   // 4
//   if (n > 0) {
//     function rec1(n) {
//       // 3
//       if (n > 0) {
//         function rec1(n) {
//           // 2
//           if (n > 0) {
//             function rec1(n) {
//               // 1
//               if (n > 0) {
//                 rec1(n - 1);
//                 console.log(n);
//               }
//             }
//             console.log(n);
//           }
//         }
//         console.log(n);
//       }
//     }

//     console.log(n);
//   }
// }

rec1(4);