<script>
    import NavButton from "$lib/components/NavButton.svelte";

    let { data, children } = $props();

    // if (currentPage === undefined) {
    //     activeItem = items[0];
    //     goto(`/settings/${activeItem.toLowerCase()}`);
    // }
</script>

<div class="max-div-width flex w-full grow flex-wrap gap-1 p-2 px-8">
    <div class="grid w-full grid-cols-2 px-2">
        <div class="flex justify-start">
            <img
                class="size-16 border-4"
                src={data.profile.image}
                alt={data.profile.username}
                style="border-color: {data.profile.color}; "
            />
            <div class="ml-1">
                <p class="text-2xl">
                    {data.profile.name}
                    <span class="text-lg text-gray-600"
                        >({data.profile.username})</span
                    >
                </p>
                <p>{data.profile.role}</p>
            </div>
        </div>
        <div class="flex items-center justify-end">
            <NavButton
                className="p-2 px-3 rounded"
                dest={`/profile/${data.profile.username}`}
                popOut={false}>View profile</NavButton
            >
        </div>
    </div>
    <div class="m-1 flex gap-8 pt-1">
        <div class="w-auto grow justify-center">
            <NavButton
                className="p-1 m-1 min-w-64 text-left pl-2 w-full"
                dest="/settings/profile"
                popOut={false}>Profile</NavButton
            >
            <hr class="h-px m-1 my-2 grow bg-gray-300 border-0" />
            <NavButton
                className="p-1 m-1 min-w-64 text-left pl-2 w-full text-red-700"
                dest="/auth/logout"
                popOut={false}>Logout</NavButton
            >
            <NavButton
                className="p-1 m-1 min-w-64 text-left pl-2 w-full text-red-700"
                dest="/not_implemented_yet"
                popOut={false}>Delete Account</NavButton
            >
            <hr class="h-px m-1 my-2 grow bg-gray-300 border-0" />
        </div>
        <div>{@render children()}</div>
    </div>
</div>
