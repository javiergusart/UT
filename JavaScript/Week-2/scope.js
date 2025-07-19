let global_x = 1; //global variable
console.log("outside of function global_x = ", global_x);

function foo() {
  let local_foo_x = 2;
  console.log("inside foo, global_x =", global_x);
  console.log("inside foo, local_x =", local_foo_x);

  function bar() {
    let local_bar_x = 3;
    console.log("inside bar global_x= ", global_x);
    console.log("inside bar, local_x =", local_foo_x);
    console.log("inside bar, local_bar+x =", local_foo_x);
  }

  bar();
}

foo();
// console.log("outside foo, local_x =", local_foo_x); <--- ERROR
