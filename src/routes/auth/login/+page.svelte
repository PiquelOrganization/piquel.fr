<script lang="ts">
    import { page } from "$app/state";
    import Login from "$lib/components/Login.svelte";
</script>

<div class="flex justify-center items-center m-12">
    <Login redirectTo={page.url.searchParams.get("redirectTo")} />
</div>
