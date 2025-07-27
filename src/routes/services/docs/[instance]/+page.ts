import { fetchAPI } from "$lib/utils/api";
import type { PageLoad } from "./$types";

export const load: PageLoad = async (event) => {
    const response = await fetchAPI(
        event,
        `/docs/${event.params.instance}?config`,
    );
    return {
        doc: await response.data,
    };
};
