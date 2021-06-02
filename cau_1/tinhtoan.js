function tinhtoan(area) {
	let result = [];
	let temp = area;
	let haft_area = Math.round(area / 2);

	for (let i = haft_area; temp > 0; i--) {
    let square = 1;

    if (i > 1) {
		  square = Math.pow(i, 2);
    }

		if ( square > temp) {
			continue;
		}

    result.push(square);
		temp -= square;
	}
	
	return result;
}