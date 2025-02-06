import type { PageProps } from "@inertiajs/core";

export interface PagePropsType extends PageProps {
    ziggy?: {
        current_route: string;
    };
}
