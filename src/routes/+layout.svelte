<script lang="ts">
    // Import Styles
    import "$lib/styles/global.css";
    // Import custom components
    import Button from "$lib/components/Button.svelte";
    import NavButton from "$lib/components/NavButton.svelte";
    // Import transitions and animations
    import { fade } from "svelte/transition";
    import type { LayoutProps } from "./$types";
    import { PUBLIC_API } from "$env/static/public";
    import { page } from "$app/state";
    import Login from "$lib/components/Login.svelte";

    let { data, children }: LayoutProps = $props();

    let showSidebar = $state(false);
</script>

<svelte:head>
    <meta charset="utf-8" />
    <title>The Piquel Zone</title>
</svelte:head>

<div class="flex min-h-screen flex-col bg-white">
    <header class="grid grid-cols-2 bg-gray-300">
        <nav class="flex justify-start">
            <NavButton popOut={false} useCardClasses={false} className="p-2 m-2">🥒</NavButton>
            <NavButton
                popOut={false}
                useCardClasses={false}
                className="p-2 m-2"
                dest="/docs"
            >
                Docs
            </NavButton>
            <NavButton
                popOut={false}
                useCardClasses={false}
                className="p-2 m-2"
                dest="/services"
            >
                Services
            </NavButton>
        </nav>
        <div class="flex justify-end">
            {#if data.profile}
                <Button
                    popOut={false}
                    useCardClasses={false}
                    className="py-3"
                    onclick={() => (showSidebar = !showSidebar)}
                >
                    <div class="flex">
                        <div class="py-1 pr-2">{data.profile.name}</div>
                        <div class="pr-2">
                            <img
                                src={data.profile.image}
                                alt="PFP"
                                height="32"
                                width="32"
                                class="size-8 border-2"
                                style="border-color: {data.profile.color};"
                            />
                        </div>
                    </div>
                </Button>
            {:else}
                <Button
                    popOut={false}
                    className="p-2 m-2 px-6"
                    onclick={() => (showSidebar = !showSidebar)}
                >
                    Login
                </Button>
            {/if}
        </div>
    </header>
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <main onclick={() => (showSidebar = false)}>
        {#if showSidebar}
            {#if data.profile}
                <div
                    transition:fade={{ duration: 100 }}
                    class="fixed right-0 z-50 m-1 flex min-w-32 flex-col rounded bg-gray-100 p-1"
                >
                    <NavButton
                        popOut={false}
                        className="m-1 p-1"
                        dest={`/profile/${data.profile.username}`}
                    >
                        Profile
                    </NavButton>
                    <NavButton
                        popOut={false}
                        className="m-1 p-1"
                        dest="/settings"
                    >
                        Settings
                    </NavButton>
                    <!--
                        {#await data.permissions then permissions}
                            {#if permissions.thermostat}
                                <NavButton
                                    popOut={false}
                                    className="m-1 p-1"
                                    dest="/thermostat">Thermostat</NavButton
                                >
                            {/if}
                            {#if permissions.dashboard}
                                <NavButton
                                    popOut={false}
                                    className="m-1 p-1"
                                    dest="/admin">Admin</NavButton
                                >
                            {/if}
                        {/await}
                    -->
                    <hr class="m-1 bg-gray-300 border-0 h-0.5" />
                    <NavButton
                        popOut={false}
                        className="m-1 p-1 text-red-700"
                        dest={`${PUBLIC_API}/auth/logout?redirectTo=${page.url.pathname}`}
                    >
                        Sign out
                    </NavButton>
                </div>
            {:else}
                <div class="fixed right-0" transition:fade={{ duration: 100 }}>
                    <Login redirectTo={page.url.pathname} />
                </div>
            {/if}
        {/if}
        <div class="flex flex-col items-center">{@render children()}</div>
    </main>
    <footer class="m-1 mt-auto text-xs">
        Page designed and developped by Joe
    </footer>
</div>
