<script lang="ts">
    import Card from "./Card.svelte";

    let {
        className = "",
        popOut = true,
        useCardClasses = true,
        fullWidth = false,
        dest = "/",
        newTab = false,
        children,
    } = $props();
</script>

<a
    href={dest}
    class={fullWidth ? "w-full" : ""}
    target={newTab ? "_blank" : ""}
>
    <Card {popOut} {className} useDefaultClasses={useCardClasses}>
        {@render children()}
    </Card>
</a>
