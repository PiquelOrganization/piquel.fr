import { PUBLIC_DOCS_API } from "$env/static/public";
import { error, type LoadEvent } from "@sveltejs/kit";

export const fetchDocsPage = async (
    { fetch }: LoadEvent,
    page: string,
    root: string,
): Promise<{ data: Promise<string>; status: number }> => {
    const response = await fetch(
        `${PUBLIC_DOCS_API}/${page}?root=${root}&tailwind`,
    );

    if (response.status != 200) {
        error(response.status);
    }

    return {
        data: response.text(),
        status: response.status,
    };
};
