<script lang="ts">
    import { page } from "$app/state";
    import type { PageProps } from "./$types";
    import NavButton from "$lib/components/NavButton.svelte";

    let { data }: PageProps = $props();
</script>

<div class="max-div-width flex w-full grow flex-wrap justify-center gap-1 px-8">
    <div class="p-3">
        <img
            class="size-64 border-8"
            src={data.profile.image}
            alt={data.profile.username}
            style="border-color: {data.profile.color};"
        />
        <p class="text-4xl">{data.profile.name}</p>
        <p class="text-2xl">{data.profile.username}</p>
        {#if data.profile.role !== ""}
            <p class="text-lg">{data.profile.role_name}</p>
        {/if}
        {#if data.profile.username === page.params.profile}
            <NavButton
                popOut={false}
                dest="/settings/profile"
                className="text-xl px-6 p-2 my-1 bg-gray-300 max-w-fit"
                >Edit Profile</NavButton
            >
        {/if}
    </div>
    <div>
        For now you can only see your profile. In the future activity, status... might be added.
    </div>
</div>
