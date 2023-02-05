<script lang="ts">
	import { PUBLIC_EXAMPLE_TWO } from '$env/static/public';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>SvelteKit environment secrets example</h1>

<p>This variable is available on the client: <code>{PUBLIC_EXAMPLE_TWO}</code></p>

<p>This is the data response from the <code>+page.ts</code> file.</p>
<pre>{JSON.stringify(data, null, 2)}</pre>
