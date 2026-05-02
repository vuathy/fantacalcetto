/**
 * db.js – Supabase client singleton
 * Configurato per leggere le variabili d'ambiente direttamente dalla dashboard di Vercel.
 */
"use strict";

const { createClient } = require("@supabase/supabase-js");

// Legge le variabili impostate nella dashboard di Vercel (Settings > Environment Variables)
const url = process.env.SUPABASE_URL;
// Usiamo SUPABASE_ANON_KEY che è il nome che appare nei tuoi screenshot di Vercel
const key = process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_KEY;

if (!url || !key) {
  console.error("❌ Errore: SUPABASE_URL o SUPABASE_ANON_KEY non trovate in process.env");
}

const supabase = createClient(url, key, {
  auth: { persistSession: false },
});

module.exports = supabase;
