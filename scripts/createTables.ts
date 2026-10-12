import { supabaseAdmin } from "../src/lib/supabase-admin";

async function createTables() {
  const sql = `
    create table if not exists public.quotes (
      id uuid primary key default gen_random_uuid(),
      name text not null,
      email text not null,
      company text,
      phone text,
      service text,
      material text,
      quantity text,
      timeline text,
      budget text,
      message text not null,
      created_at timestamptz not null default now()
    );
    alter table public.quotes enable row level security;
    create policy "Anyone can submit a quote" on public.quotes for insert to anon with check (true);

    create table if not exists public.contacts (
      id uuid primary key default gen_random_uuid(),
      name text not null,
      email text not null,
      message text not null,
      created_at timestamptz not null default now()
    );
    alter table public.contacts enable row level security;
    create policy "Anyone can submit a contact" on public.contacts for insert to anon with check (true);
  `;
  const { error } = await supabaseAdmin.rpc("pg_execute_sql", { sql });
  if (error) {
    console.error("SQL execution error:", error);
    process.exit(1);
  } else {
    console.log("Tables created successfully");
    process.exit(0);
  }
}

createTables();
