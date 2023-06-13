const findMin = (a) => {
	if (!a || a.length === 0) return null;

	let left = 0,
		right = a.length - 1;

	while (left < right) {
		let mid = (left + (right - left) / 2) | 0; // This helps avoid overflows with large data sets
		
		// The one instance I mentioned above
		if (mid > 0 && a[mid - 1] > a[mid]) return a[mid];
		else if (a[mid] >= a[left] && a[mid] < a[right]) right = mid - 1;
		else if (a[mid] >= a[left] && a[mid] > a[right]) left = mid + 1;
		else if (a[mid] < a[left] && a[mid] < a[right]) right = mid - 1;
	}

	return a[left];
};