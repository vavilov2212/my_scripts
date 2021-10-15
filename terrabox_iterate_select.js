elements = document.getElementsByClassName('grid-view-item');
// console.log(elements);

function* domIterator(collection) {
	for (i = 0; i < collection.length; i++) {
		yield collection[i];
	}
	return i;
};

function iterate(from = 0, to = 1) {
	if (from > 0) {
		for (j=from-(to-from); j<to-from;j++) {
			elements[j].children[2].click();
		}
	}

	let i = 0;
	while(!itNext.done && i < to-from) {
		i++;
		// console.log('value', itNext.value);
		// console.log('done', itNext.done);
		itNext.value.children[2].click();
		itNext = elIt.next();
	}
};

elIt = elements[Symbol.iterator] = domIterator(elements);
itNext = elIt.next();