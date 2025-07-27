import { PUBLIC_API } from "$env/static/public";
import { error, type LoadEvent, redirect } from "@sveltejs/kit";

export const fetchAPI = async (
    { fetch, url }: LoadEvent,
    path: string,
    handleError: boolean = true,
): Promise<{ data: any; status: number }> => {
    const response = await fetch(`${PUBLIC_API}${path}`, {
        credentials: "include",
    });

    if (handleError) {
        switch (response.status) {
            case 200:
                break;
            case 401:
                redirect(307, `/auth/login?redirectTo=${url.pathname}`);
                return;
            default:
                error(response.status, { message: await response.text() });
                return;
        }
    }

    switch (response.headers.get("Content-Type")) {
        case "application/json":
            return { data: response.json(), status: response.status };
        case "text/html":
            return { data: response.text(), status: response.status };
        case "text/plain":
            return { data: response.text(), status: response.status };
        default:
            return { data: {}, status: response.status };
    }
};

export const fetchDocsPage = async (
    { fetch }: LoadEvent,
    page: string,
): Promise<{ data: Promise<string>; status: number }> => {
    const response = await fetch(
        `${PUBLIC_API}/docs/piquel${page}`,
    );

    if (response.status != 200) {
        error(response.status, { message: await response.text() });
    }

    if (response.headers.get("Content-Type") == "text/html") {
        return {
            data: response.text(),
            status: response.status,
        };
    }

    return {
        data: new Promise((resolve) => resolve("")),
        status: response.status,
    };
};
