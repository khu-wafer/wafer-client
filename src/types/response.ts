export interface WarehouseResponse {
	data: {
		id: string;
		name: string;
		status: string;
		departure: string;
		arrivals: string;
		shipmentDate: string;
		arrivalDate: string;
		imgUrl: string;
	}[];
}
