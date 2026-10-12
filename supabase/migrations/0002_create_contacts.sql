create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.contacts enable row level security;

create policy "Anyone can submit a contact"
  on public.contacts
  for insert
  to anon
  with check (true);
