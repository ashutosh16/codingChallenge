/**
 * Tower of Hanoi
 * Move 3 disks from Tower A to Tower B using Tower C.
 * We can move only 1 disk at a time.
 * 
 * We can devide proble like below
 * move n disk from A to B using C
 *  move n-1 disks from A to c using B
 *  Then move nth disk from A to B
 *  move n-1 disks from C to B using A
 */


function move(n, A, B, C) {
  if(n === 1){
    console.log(`move disk ${n} from ${A} to ${B}`);
  } else {
    move((n-1), A, C, B);
    console.log(`move disk ${n} from ${A} to ${B}`);
    move((n - 1), C, B, A);
  }
}

move(3, 'A', 'B', 'C');
// move disk 1 from A to B
// move disk 2 from A to C
// move disk 1 from B to C
// move disk 3 from A to B
// move disk 1 from C to A
// move disk 2 from C to B
// move disk 1 from A to B