<script lang="ts">
    import type { PageProps } from "./$types";
    import { page } from "$app/state";
    import DocumentationInstance from "$lib/components/services/docs/DocumentationInstance.svelte";

    let { data }: PageProps = $props();

    let totalPages = $derived(Math.ceil(data.docs.count / data.docs.limit));
    let currentPage = $derived(data.docs.offset / data.docs.limit + 1);
    let start = $derived((currentPage - 1) * data.docs.limit + 1);
    let end = $derived(start + data.docs.limit);

    $effect(() => {
        if (end > data.docs.count) {
            end = data.docs.count;
        }
    });

    let prevUrl: string = $derived(
        `/services/docs?limit=${data.docs.limit}&offset=${start - data.docs.limit}`,
    );
    let nextUrl: string = $derived(
        `/services/docs?limit=${data.docs.limit}&offset=${end + 1}`,
    );
</script>

<h1 class="text-xl">Your Documentation Instances</h1>
{#each data.docs.instances as doc}
    <DocumentationInstance {doc} />
{/each}
<div class="grid grid-cols-3 pt-0.5 mx-1">
    <a
        class="hover:text-gray-600 size-fit"
        href={currentPage === 1 ? page.url.href : prevUrl}>prev</a
    >
    <p class="m-auto">
        {start}-{end}/{data.docs.count}; page {currentPage}/{totalPages}
    </p>
    <a
        href={currentPage === totalPages ? page.url.href : nextUrl}
        class="hover:text-gray-600 ml-auto">next</a
    >
</div>
