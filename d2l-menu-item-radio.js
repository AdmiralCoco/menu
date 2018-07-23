import '../@polymer/polymer/polymer-legacy.js';

import '../d2l-icons/d2l-icons.js';
import './d2l-menu-item-selectable-styles.js';
import './d2l-menu-item-selectable-behavior.js';
import { Polymer } from '../@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '../@polymer/polymer/lib/utils/html-tag.js';
import { afterNextRender } from '../@polymer/polymer/lib/utils/render-status.js';
/**
`d2l-menu-item-radio`
Polymer-based web component for radio menu items.

@demo demo/radio-menu.html radio menu
*/
Polymer({
	_template: html`
		<style include="d2l-menu-item-selectable-styles">
			/*
			 * https://github.com/Polymer/tools/issues/408
			 * Empty style blocks break linter.
			 */
			:host {}
		</style>
		<d2l-icon icon="d2l-tier1:check" aria-hidden="true"></d2l-icon>
		<span>[[text]]</span>
`,

	is: 'd2l-menu-item-radio',

	behaviors: [
		D2L.PolymerBehaviors.MenuItemSelectableBehavior
	],

	hostAttributes: {
		'role': 'menuitemradio'
	},

	attached: function() {
		afterNextRender(this, function() {
			this.listen(this, 'd2l-menu-item-change', '_onChange');
			this.listen(this, 'd2l-menu-item-select', '_onSelect');
		}.bind(this));
	},

	detached: function() {
		this.unlisten(this, 'd2l-menu-item-change', '_onChange');
		this.unlisten(this, 'd2l-menu-item-select', '_onSelect');
	},

	_onSelect: function(e) {
		this.set('selected', true);
		this.__onSelect(e);
	},

	_onChange: function(e) {
		var items = this.parentNode.querySelectorAll('[role="menuitemradio"]');

		for (var i = 0; i < items.length; i++) {
			items[i].set('selected', items[i].value === e.detail.value);
		}
	}
});
