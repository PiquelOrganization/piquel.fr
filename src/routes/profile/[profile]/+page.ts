import type { PageLoad } from "./$types";
import { fetchAPI } from "$lib/utils/api";

export const load: PageLoad = async (event: LoadEvent) => {
    const response = await fetchAPI(event, `/profile/${event.params.profile}`);
    return { profileData: await response.data };
};
