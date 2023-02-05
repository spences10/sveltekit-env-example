import { PUBLIC_EXAMPLE_ONE, PUBLIC_EXAMPLE_TWO } from '$env/static/public';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data }) => {
	console.log('=====================');
	console.log(
		'PUBLIC_EXAMPLE_ONE, this is visible on the client and the server:',
		PUBLIC_EXAMPLE_ONE
	);
	console.log('=====================');
	return {
		page_load_data: {
			message: 'hello world',
			env_variable: PUBLIC_EXAMPLE_TWO
		}
	};
};
