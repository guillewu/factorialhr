import { http, HttpResponse } from "msw";
import { frames, wheels } from "./test_response";

export const handlers = [
  http.get("http://localhost:3333/products?family=frame", () => {
    return HttpResponse.json(frames);
  }),
  http.get("http://localhost:3333/products?family=wheel", () => {
    return HttpResponse.json(wheels);
  }),
];
