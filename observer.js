let elements = document.querySelectorAll('.animate_observer')

// Check for broswer support. If not, reset elements waiting for observer.
if (window.IntersectionObserver) {

	function observer_callback(e) {
		e.forEach(function (item, index) {
			if (e[index].isIntersecting) {
				e[index].target.style.animationPlayState = 'running';
			}
		})
	}

	let observer = new IntersectionObserver(observer_callback, {threshold:0.2});
	elements.forEach(function (item, index) {observer.observe(item)})
}

else {
	console.warn('Intersection Observer Unsupported.')
	elements.forEach(function (item, index) {item.style.animation = 'none'})
}