<script lang="ts">
    import { page } from "$app/state";
    import type { PageProps } from "./$types";
    import NavButton from "$lib/components/NavButton.svelte";

    let { data }: PageProps = $props();

    let profile = data.profileData;
</script>

<div class="max-div-width flex w-full grow flex-wrap justify-center gap-1 px-8">
    <div class="p-3">
        <img
            class="size-64 border-8"
            src={profile.image}
            alt={profile.username}
            style="border-color: {profile.color};"
        />
        <p class="text-4xl">{profile.name}</p>
        <p class="text-2xl">{profile.username}</p>
        {#if profile.role !== ""}
            <p class="text-lg">{profile.role_name}</p>
        {/if}
        {#if profile.username === page.params.profile}
            <NavButton
                popOut={false}
                dest="/settings/profile"
                className="text-xl px-6 p-2 my-1 bg-gray-300 max-w-fit"
                >Edit Profile</NavButton
            >
        {/if}
    </div>
    <div>
        For now you can only see your profile. In the future activity, status...
        might be added.
    </div>
</div>
