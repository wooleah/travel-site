import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	constructor(elements, offset){
		this.itemsToReveal = elements;
		this.offsetPercentage = offset;
		this.hideInitially();
		this.createWaypoints();
	}
	hideInitially(){
		this.itemsToReveal.addClass('reveal-item');
	}
	createWaypoints(){
		var that = this;
		this.itemsToReveal.each(function(){
			var currentItem = this;
			new Waypoint({
				// dom element we want to watch for(while scrolling)
				element: currentItem,
				// what we want to happen when screen is scrolled to that element
				handler: function(){
					$(currentItem).addClass('reveal-item--is-visible');
				},
				// 0% is the top of the viewport
				offset: that.offsetPercentage
			});
		});
	}
}
export default RevealOnScroll;