<script lang="ts">
    import NavButton from "$lib/components/NavButton.svelte";
    import type { LayoutProps } from "./$types";

    let { children }: LayoutProps = $props();
</script>

<div class="max-div-width flex w-full grow flex-wrap gap-1 p-2 px-8">
    <div class="m-1 flex gap-8 pt-1">
        <div class="w-auto grow justify-center">
            <div class="grid w-full grid-cols-2 px-2">
                <a href="/services" class="text-xl">Services</a>
            </div>
            <hr class="h-px m-1 my-2 grow bg-gray-300 border-0" />
            <NavButton
                className="p-1 m-1 min-w-64 text-left pl-2 w-full"
                dest="/services/docs"
                popOut={false}>Documentation</NavButton
            >
            <hr class="h-px m-1 my-2 grow bg-gray-300 border-0" />
        </div>
        <div>{@render children()}</div>
    </div>
</div>
