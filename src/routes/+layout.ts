import type { LayoutLoad, LoadEvent } from "./$types";
import { error } from "@sveltejs/kit";
import { fetchAPI } from "$lib/utils/api";

export const ssr = true;

export const load: LayoutLoad = async (event: LoadEvent) => {
    const response = await fetchAPI(event, "/profile", false);

    if (response.status == 401) {
        return {};
    } else if (response.status != 200) {
        error(response.status);
    }

    return { profile: await response.data };
};
