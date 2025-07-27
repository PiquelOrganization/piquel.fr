import { fetchAPI } from "$lib/utils/api";
import type { PageLoad } from "./$types";

export const load: PageLoad = async (event) => {
    let limit = event.url.searchParams.get("limit");
    if (limit == null) {
        limit = "10";
    }
    let offset = event.url.searchParams.get("offset");
    if (offset == null) {
        offset = "0";
    }

    const listResponse = await fetchAPI(
        event,
        `/docs/list?limit=${limit}&offset=${offset}`,
    );
    const countResponse = await fetchAPI(event, "/docs/list?count");

    return {
        docs: {
            instances: await listResponse.data,
            limit: parseInt(limit),
            offset: parseInt(offset),
            count: parseInt(await countResponse.data),
        },
    };
};
