import { supabase } from "@lib/supabase/server";
import { NextResponse } from "next/server";
interface Player {
  name:string;
  id: string;
}
interface RequestBody {
  team_name: string;
  players: Player;
  email?: string;
}

interface Team {
 team_name: string;
 players?: Player;
 email?: string;
 id?: number;
 created_at?: string;
 logo?: string;
}

export async function POST(req: Request): Promise<Response> {
  try {
    const body: RequestBody = await req.json();
    const { team_name, players, email} = body;

    const { data, error } = await supabase
      .from("teams")
      .insert<Team>({
        team_name,
        players,
        email
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
