import type { LoadEvent, PageLoad } from "./$types";
import { fetchDocsPage } from "$lib/utils/docs";

export const load: PageLoad = async (event: LoadEvent) => {
    const response = await fetchDocsPage(event, "/", "docs");
    return { summary: await response.data };
};
