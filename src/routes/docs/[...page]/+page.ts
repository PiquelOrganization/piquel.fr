import type { LoadEvent, PageLoad } from "./$types";
import { fetchDocsPage } from "$lib/utils/api";

export const load: PageLoad = async (event: LoadEvent) => {
    const response = await fetchDocsPage(
        event,
        `/${event.params.page}`,
    );
    return { summary: await response.data };
};
