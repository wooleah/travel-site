import $ from 'jquery';

class Modal {
	constructor(){
		this.openModalButton = $(".open-modal");
		this.modal = $(".modal");
		this.closeModalButton = $(".modal__close");
		this.events();
	}

	events(){
		//clicking the open modal button
		//current this->Modal object
		this.openModalButton.click(this.openModal.bind(this));

		//clicking the x close modal button
		this.closeModalButton.click(this.closeModal.bind(this));

		//user pushes any key
		//keyup->let's go of the key
		$(document).keyup(this.keyPressHandler.bind(this));
	}

	keyPressHandler(e){
		if(e.which == 27){
			this.closeModal();
		}
	}

	openModal(){
		//Without bind method, this-> cliked element <div></div>
		this.modal.addClass("modal--is-visible");
		//false prevent default scrolling back to top behavior
		return false;
	}

	closeModal(){
		this.modal.removeClass("modal--is-visible");
	}
}

export default Modal;