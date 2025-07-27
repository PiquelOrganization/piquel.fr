<script lang="ts">
    import Card from "./Card.svelte";

    let {
        className = "",
        type = undefined,
        form = "",
        popOut = false,
        useCardClasses = true,
        fullWidth = false,
        defaultHover = true,
        fit = false,
        children,
        onclick,
    } = $props();

    // export let className = '';
    // export let type: 'button' | 'submit' | undefined | null = undefined;
    // export let form: string;
    // export let popOut = false;
    // export let useCardClasses = true;
    // export let fullWidth = false;
</script>

<button
    class={(fullWidth ? "w-full" : "") + (fit ? " size-fit" : "")}
    {onclick}
    {type}
    {form}
>
    <Card
        {popOut}
        className={className +
            (defaultHover ? " hover:bg-gray-300 click:bg-gray-700" : "")}
        useDefaultClasses={useCardClasses}
    >
        {@render children()}
    </Card>
</button>
