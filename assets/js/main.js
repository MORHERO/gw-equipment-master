// AJAX RETRIEVING FULL CHARACTER DATA
const url_params = new URLSearchParams(window.location.search);

const master_slider = tns({
		container: '[module=creation-slider]',
		items: 1,
		slideBy: 'page',
		autoplay: false,
		center: true,
		loop: false,
		autoHeight: false,
		gutter: 20,
		controlsPosition: "bottom",
		nav: false
	});

class ITEM_CREATOR {
	constructor() {
		this.activate_btn = document.querySelector('[task=activate_ic]');
		this.overlay = document.querySelector('.overlay[module=item_creator]');

		this._xhttp = new XMLHttpRequest();

		this._item_types = '';

		this._new_item = {
			'title':'',
			'description':'',
			'type_id':'',
			'attributes':''
		}

		this._get_item_types();
	}

	_loaded() {
		this._setup_item_types_dom();
		this._setup_onclicks();
	}

	_setup_onclicks() {
		const that = this;

		// ACTIVATE OVERLAY BUTTON
		this.activate_btn.addEventListener('click', function(e) {
			e.preventDefault();
			that.overlay.classList.add('active');
		});
		// OVERLAY BACKGROUND CLICK
		this.overlay.addEventListener('click', function(e) {
			if(e.target.classList.contains('active')) {
				e.target.classList.remove('active');
			}
		});
		// ITEM TYPE BUTTONS
		/*let item_type_btns = document.querySelectorAll('div[data=item-types] button');
		for (let i = 0; i < item_type_btns.length; i++) {
			let type_btn = item_type_btns[i];

			type_btn.addEventListener('click', function(e) {
				that._new_item.type_id = this.getAttribute('item-type-id');
			});
		}*/
		return;
	}

	_setup_item_types_dom() {
		let item_type_list = document.querySelector('[data=item-types]');

		for (let i = 0; i < this._item_types.length; i++) {
			let item_type = this._item_types[i];
			let item_id = 'item-type-' + item_type.uid;

			let dom_type_btn = document.createElement('input');
				dom_type_btn.setAttribute('item-type-id', item_type.uid);
				dom_type_btn.setAttribute('type', 'radio');
				dom_type_btn.setAttribute('name', 'item-type');
				dom_type_btn.setAttribute('value', item_type.title);
				dom_type_btn.setAttribute('id', item_id);

			let dom_type_btn_label = document.createElement('label');
				dom_type_btn_label.setAttribute('for', item_id);
			let dom_type_btn_label_txt = document.createTextNode(item_type.title);

			dom_type_btn_label.appendChild(dom_type_btn_label_txt);

			item_type_list.appendChild(dom_type_btn);
			item_type_list.appendChild(dom_type_btn_label);
		}

		return;
	}

	// DB RETRIEVE
	_get_item_types() {
		const that = this;

		this._xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				console.log(this.responseText);
				that._item_types = JSON.parse(this.responseText);
			}
			that._loaded();
		};

		this._xhttp.open("GET", './modules/get_item.php?task=get_item_types', true);
		this._xhttp.setRequestHeader('Content-Type', 'application/json');
		this._xhttp.send();

		return;
	}

}
var IC = new ITEM_CREATOR();