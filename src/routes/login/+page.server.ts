export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		console.log(data);

		return {
			message: 'ID NOT EXISTED'
		};
	}
};
