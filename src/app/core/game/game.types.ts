import { DateTime } from "luxon";

export interface Game {
    id?: number;
    name?: string;
    typeGameId?: number;
    userId?: number;
    startDate?: DateTime;
    endtDate?: DateTime;
    settingsId?: string;
    audienceId?: number;
}
