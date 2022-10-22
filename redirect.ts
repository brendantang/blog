import { serve } from "https://deno.land/std@0.160.0/http/server.ts";

serve(
  (_req) => {
    return Response.redirect("https://brendan.leveler.xyz");
  },
);
