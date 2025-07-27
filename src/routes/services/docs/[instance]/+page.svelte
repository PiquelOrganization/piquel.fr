<script lang="ts">
    import { goto, invalidateAll } from "$app/navigation";
    import DocumentationInstanceSettings from "$lib/components/services/docs/DocumentationInstanceSettings.svelte";
    let { data } = $props();
</script>

<DocumentationInstanceSettings
    doc={data.doc}
    updated={(moved: boolean) => {
        if (moved) {
            goto("/services/docs");
        } else {
            invalidateAll();
        }
    }}
/>
