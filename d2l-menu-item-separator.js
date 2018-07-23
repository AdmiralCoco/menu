import '../@polymer/polymer/polymer-legacy.js';

import { Polymer } from '../@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '../@polymer/polymer/lib/utils/html-tag.js';
/*
`d2l-menu-item-separator`
Polymer-based web component for menu item separators.
*/
Polymer({
	_template: html`
		<style>
			:host {
				display: block;
			}
		</style>
`,

	is: 'd2l-menu-item-separator',

	hostAttributes: {
		'role': 'separator'
	}
});
