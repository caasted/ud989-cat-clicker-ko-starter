var ViewModel = function () {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('https://www.flickr.com/photos/big/');

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};

	this.level = ko.computed(function() {
		if (this.clickCount() < 10) {
			return 'New Born';
		} else if (this.clickCount() < 25) {
			return 'Infant';
		} else if (this.clickCount() < 100) {
			return 'Teen';
		} else if (this.clickCount() < 250) {
			return 'Adult';
		} else if (this.clickCount() < 1000) {
			return 'Grand Master';
		} else {
			return 'Lost Sage';
		}
	}, this);
}

ko.applyBindings(new ViewModel())

