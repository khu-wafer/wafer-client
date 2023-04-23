import { redirect } from '@sveltejs/kit';

export const ssr = false;

export function load() {
	const user = localStorage.getItem('user');

	if (!user) throw redirect(302, '/login');
}
