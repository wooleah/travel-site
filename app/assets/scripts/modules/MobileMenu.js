import $ from 'jquery';

class MobileMenu {
	constructor(){
		this.siteHeader = $('.site-header');
		this.menuIcon = $('.site-header__menu-icon');
		this.menuContent = $('.site-header__menu-content');
		this.events(); //listen to the event as soon as the page is loaded
	}
	
	events(){
		//bind method binds 'this' to what's passed in it
		this.menuIcon.click(this.toggleTheMenu.bind(this));
	}

	toggleTheMenu(){
		this.menuContent.toggleClass('site-header__menu-content--is-visible');
		this.siteHeader.toggleClass('site-header--is-expanded');
		this.menuIcon.toggleClass('site-header__menu-icon--close-x');
	}
}

export default MobileMenu