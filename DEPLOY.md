# Deploy su Supabase + Render

## 1. Crea il database Supabase (5 min)

1. Vai su **supabase.com** → "Start your project" → registrati con email
2. Crea un nuovo progetto (scegli una region vicina, es. `eu-central-1`)
3. Vai su **SQL Editor** → "New query"
4. Copia tutto il contenuto di `supabase-schema.sql` e clicca **Run**
5. Vai su **Project Settings → API**:
   - Copia **Project URL** → è il tuo `SUPABASE_URL`
   - Copia **service_role** secret → è il tuo `SUPABASE_SERVICE_KEY`
     ⚠️ Usa `service_role`, NON `anon` — il server ha bisogno di accesso completo

---

## 2. Crea il file .env

Copia `.env.example` in `.env` e compila:

```
SUPABASE_URL=https://xxxx.supabase.co
SUPABASE_SERVICE_KEY=eyJ...
ACCESS_PASSWORD=latuapassword
COOKIE_SECRET=qualcosa-di-casuale-lungo
```

---

## 3. Testa in locale

```powershell
npm install
node server/server.js
```

Apri http://localhost:3000 — se funziona, sei pronto per il deploy.

---

## 4. Deploy su Render (gratis, sempre online)

1. Carica il progetto su **GitHub** (crea un repo, fai push)
   - Assicurati che `.env` sia nel `.gitignore` (già configurato)
   - Il file `supabase-schema.sql` può stare nel repo, non contiene segreti

2. Vai su **render.com** → registrati con GitHub

3. "New → Web Service" → seleziona il tuo repo

4. Configura:
   - **Build Command:** `npm install`
   - **Start Command:** `node server/server.js`
   - **Environment:** Node

5. Aggiungi le variabili d'ambiente (Environment → Add):
   ```
   SUPABASE_URL      = https://xxxx.supabase.co
   SUPABASE_SERVICE_KEY = eyJ...
   ACCESS_PASSWORD   = latuapassword
   COOKIE_SECRET     = qualcosa-di-casuale
   ```

6. Clicca **Create Web Service**

Render ti dà un URL tipo `https://fantacalcetto.onrender.com` — condividilo con i tuoi amici.

---

## Note

- **Supabase free tier:** 500MB database, più che sufficiente
- **Render free tier:** si "addormenta" dopo 15 min di inattività, si risveglia in ~30 secondi al primo accesso
- Per evitare il sleep su Render, usa **Railway** (anch'esso gratis con GitHub) che non ha questa limitazione
- Il `database.json` locale non viene più usato — tutti i dati sono su Supabase
