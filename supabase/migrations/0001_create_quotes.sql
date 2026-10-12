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

-- RLS: allow anonymous inserts (form submissions), no public reads.
alter table public.quotes enable row level security;

create policy "Anyone can submit a quote"
  on public.quotes
  for insert
  to anon
  with check (true);
