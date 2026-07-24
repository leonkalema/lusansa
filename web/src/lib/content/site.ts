// Single source of truth for contact + company facts (WEBSITE_GUIDE §10).
// TODO: fill in real values before launch — all currently blank fields are
// launch blockers (§21). Components hide what's empty rather than show fakes.
export const site = {
	name: 'Lusansa Property Services Ltd',
	tagline: 'Akezimbira, tekaba kato',
	/** E.164 without '+'. Empty = WhatsApp CTAs fall back to #contact */
	whatsappNumber: '256705837125',
	phone: '+256 705 837 125',
	email: '',
	officeAddress: '',
	registrationNumber: '',
	areasServed: ['Luwero', 'Mukono']
};
