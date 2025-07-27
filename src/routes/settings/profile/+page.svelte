<script lang="ts">
    import { invalidateAll } from "$app/navigation";
    import Button from "$lib/components/Button.svelte";
    import TextInput from "$lib/components/input/TextInput.svelte";
    import type { PageProps } from "./$types";
    import { PUBLIC_API } from "$env/static/public";

    let { data }: PageProps = $props();

    let username: string = $state(data.settings.profile.username);
    let name: string = $state(data.settings.profile.name);
    let image: string = $state(data.settings.profile.image);

    let error: string = $state("");

    async function updateProfile() {
        const response = await fetch(
            `${PUBLIC_API}/profile/${data.profile.username}/update`,
            {
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                method: "PUT",
                body: JSON.stringify({ username, name, image }),
            },
        );

        if (response.status != 200) {
            error = await response.text();
        }

        invalidateAll();
    }
</script>

<form
    id="update-profile"
    onsubmit={(e) => {
        e.preventDefault();
    }}
    class="flex flex-col"
>
    <TextInput label="Username" bind:value={username} />
    <TextInput label="Name" bind:value={name} />
    <TextInput label="Image" bind:value={image} />

    <p class="text-red-500 font-bold text-sm">{error}</p>

    <Button className="mt-2 p-1" onclick={updateProfile} form="update-profile">
        Save
    </Button>
</form>
