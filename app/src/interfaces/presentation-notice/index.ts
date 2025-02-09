import { defineInterface } from '@directus/shared/utils';
import InterfacePresentationNotice from './presentation-notice.vue';

export default defineInterface({
	id: 'presentation-notice',
	name: '$t:interfaces.presentation-notice.notice',
	description: '$t:interfaces.presentation-notice.description',
	icon: 'info',
	component: InterfacePresentationNotice,
	hideLabel: true,
	hideLoader: true,
	types: ['alias'],
	groups: ['presentation'],
	options: [
		{
			field: 'color',
			name: '$t:color',
			type: 'string',
			meta: {
				width: 'half',
				interface: 'select-dropdown',
				options: {
					choices: [
						{ text: '$t:normal', value: 'normal' },
						{ text: '$t:info', value: 'info' },
						{ text: '$t:success', value: 'success' },
						{ text: '$t:warning', value: 'warning' },
						{ text: '$t:danger', value: 'danger' },
					],
				},
			},
			schema: {
				default_value: 'normal',
			},
		},
		{
			field: 'icon',
			name: '$t:icon',
			type: 'string',
			meta: {
				width: 'half',
				interface: 'select-icon',
			},
		},
		{
			field: 'text',
			name: '$t:text',
			type: 'string',
			meta: {
				width: 'full',
				interface: 'input-multiline',
				options: {
					placeholder: '$t:interfaces.presentation-notice.text',
				},
			},
		},
	],
});
