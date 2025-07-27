<script lang="ts">
    let { label, value = $bindable() } = $props();
</script>

<label class="mb-1">
    <p class="text-sm text-gray-600">{label}</p>
    <input
        class="rounded-md border-gray-400 bg-gray-100 border-2 p-1"
        bind:value
        type="text"
    />
</label>
