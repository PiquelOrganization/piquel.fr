<script lang="ts">
    import { PUBLIC_API } from "$env/static/public";
    import Card from "./Card.svelte";
    import NavButton from "./NavButton.svelte";

    import github from "$lib/svg/github.svg";
    import google from "$lib/svg/google.svg";

    let { redirectTo } = $props();
</script>

<Card
    popOut={false}
    className="flex flex-col justify-center items-center gap-3 p-5 m-1"
>
    <p class="text-3xl">Login</p>
    <p class="text-xl">Select a provider to login with</p>

    <NavButton
        dest={`${PUBLIC_API}/auth/github?redirectTo=${redirectTo}`}
        popOut={false}
        className="px-5 py-3 border flex gap-2
            border-slate-200 rounded-lg text-slate-700 hover:border-slate-400
            hover:text-slate-900 hover:shadow transition duration-150"
    >
        <img src={github} alt="github" class="size-8" />
        <span class="text-2xl">Login with GitHub</span>
    </NavButton>
    <!--
    <NavButton
        dest={`${PUBLIC_API}/auth/google?redirectTo=${redirectTo}`}
        popOut={false}
        className="px-5 py-3 border flex gap-2
                border-slate-200 rounded-lg text-slate-700 hover:border-slate-400
                hover:text-slate-900 hover:shadow transition duration-150"
    >
        <img src={google} alt="google" class="size-8" />
        <span class="text-2xl">Login with Google</span>
    </NavButton>
    -->
</Card>
