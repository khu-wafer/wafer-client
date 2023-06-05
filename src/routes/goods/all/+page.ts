import { getWarehouse } from '../../../apis';
import type { WarehouseResponse } from '../../../types/response';
import type { PageServerLoad } from '../../login/$types';

export const load = (async () => {
	const { data } = await getWarehouse();
	return { data } as WarehouseResponse;
}) satisfies PageServerLoad;
