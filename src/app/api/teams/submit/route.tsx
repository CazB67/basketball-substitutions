import { supabase } from "@lib/supabase/server";
import { NextResponse } from "next/server";

interface RequestBody {
  team_name: string;
  players: any;
}

interface Team {
 team_name: string;
 players?: any;

}

export async function POST(req: Request): Promise<Response> {
  try {
    const body: RequestBody = await req.json();
    const { team_name, players } = body;

    const { data, error } = await supabase
      .from("teams")
      .insert<Team>({
        team_name,
        players
      })
      .select("*");

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, teams: data }, { status: 200 });
  } catch (err) {
    console.error("Internal server error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
