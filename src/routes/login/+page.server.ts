import type { Actions } from './$types';
import { postLogin } from '../../apis/index.js';
import type { CustomError } from '../../types/error';

export const actions = {
	login: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email') as string;
		const password = data.get('password') as string;

		try {
			const user = await postLogin(email, password);
			return user.data;
		} catch (error: unknown) {
			const customError = error as CustomError;
			return {
				message: customError.response?.data.message
			};
		}
	}
} satisfies Actions;
