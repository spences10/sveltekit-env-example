import { PRIVATE_EXAMPLE_ONE } from '$env/static/private';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	console.log('=====================');
	console.log('PRIVATE_EXAMPLE_ONE:', PRIVATE_EXAMPLE_ONE);
	console.log('=====================');
	return {
		page_server_data: { message: 'hello world' }
	};
};
