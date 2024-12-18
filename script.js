const byteSize = (str) => {
	let blob=new Blob([str]);

	return blob.size;
	// 
  // write your code here
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
