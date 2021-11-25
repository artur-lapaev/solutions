function findCombos(arr) {
    console.log(arr);
	let index = findMaxIndex(arr);
    for (;index !== -1;) {
			let element = arr[index];
			let swapIndex = findIndexMaxElement(arr, element);
			swap(arr, index, swapIndex);
			reverse(arr, index);
			console.log(arr);
			index = findMaxIndex(arr);
	}
}

findCombos([1,2,3]);

function findMaxIndex(permutation) {
	for (let i = permutation.length - 2; i >= 0; i--) {
  	if (permutation[i] < permutation[i + 1]) {
  		return i;
      }
  }  
  return -1;
}

function findIndexMaxElement(permutation, element) {
	for (let i = permutation.length - 1; i >= 0; i--) {
		if (permutation[i] > element) {
			return i;
		}
	}
		return -1;
}

function swap(permutation, i, j) {
		let temp = permutation[i];
		permutation[i] = permutation[j];
		permutation[j] = temp;
}


function reverse(permutation, index) {
  		let shift = index + 1;
		for (let i = 0; i < (permutation.length - shift) / 2; i++) {
			let temp = permutation[shift + i];
			permutation[shift + i] = permutation[permutation.length - i - 1];
			permutation[permutation.length - i - 1] = temp;
		}
}
