interface APIError {
	statusCode: number;
	message: string;
	error: string;
}

export interface CustomError extends Error {
	response?: {
		data: APIError;
		status: number;
		headers: string;
	};
}
