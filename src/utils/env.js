const liveHost = "https://us-central1-mealstogo-1cc16.cloudfunctions.net";
const localHost = "http://10.0.2.2:5001/mealstogo-1cc16/us-central1";

export const isDevelopment = process.env.NODE_ENV === "development";
export const isMock = false;
export const host = isDevelopment ? localHost : liveHost;
