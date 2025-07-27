<script lang="ts">
    import Card from "$lib/components/Card.svelte";
    import Button from "$lib/components/Button.svelte";
    import DocumentationInstanceSettings from "$lib/components/services/docs/DocumentationInstanceSettings.svelte";

    import edit from "$lib/svg/edit.svg";
    import { invalidateAll } from "$app/navigation";

    let { doc } = $props();

    let editing: boolean = $state(false);
</script>

{#if editing}
    <DocumentationInstanceSettings
        {doc}
        updated={() => {
            invalidateAll();
            editing = false;
        }}
    />
{:else}
    <Card popOut={false} className="grid grid-cols-2 p-1 my-1">
        <div>
            <a class="px-1" href={`/services/docs/${doc.name}`}>{doc.name}</a>
            <div class="px-2">
                <p class="text-sm">
                    <span class="text-xs text-gray-500">repository:</span><a
                        href={`https://github.com/${doc.repoOwner}/${doc.repoName}/tree/${doc.repoRef}`}
                    >
                        {doc.repoOwner}/{doc.repoName}
                    </a>
                </p>
                <p class="text-sm">
                    <span class="text-xs text-gray-500">ref:</span>{doc.repoRef}
                </p>
            </div>
        </div>
        <div class="flex justify-end">
            <div class="flex flex-row items-center p-1">
                <Button
                    onclick={() => (editing = true)}
                    fullWidth={true}
                    useCardClasses={false}
                    className="p-1 hover:bg-gray-200 click:gb-gray-500 rounded-sm text-sm"
                >
                    <img src={edit} alt="edit" class="size-5" />
                </Button>
            </div>
        </div>
    </Card>
{/if}
