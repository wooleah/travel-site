import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
	constructor(){
		this.siteHeader = $('.site-header');
		this.headerTriggerElement = $('.large-hero__title');
		this.createHeaderWaypoint();
	}

	createHeaderWaypoint(){
		var that = this;
		new Waypoint({
			// first item in jquery array-like object is a pointer to native DOM element
			element: this.headerTriggerElement[0],
			handler: function(direction){
				if(direction=="down"){
					that.siteHeader.addClass('site-header--dark');
				}else{
					that.siteHeader.removeClass('site-header--dark');
				}
			}
		});
	}
}
export default StickyHeader;