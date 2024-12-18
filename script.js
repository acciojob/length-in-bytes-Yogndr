const byteSize = (str) => {
	let Blob=new Blob([str]);

	return Blob.size;
	// 
  // write your code here
};

// Do not change the code below
// const str = prompt("Enter some string.");
alert(byteSize(str));
