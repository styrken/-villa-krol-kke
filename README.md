# Villa Kroløkke - Hjemmeside

Hjemmeside for Villa Kroløkke - Privat Dagpleje i Odense V

## Udvikling

For at køre hjemmesiden lokalt med auto-refresh:

```bash
npm run dev
```

Dette starter en lokal server på http://localhost:3000 og opdaterer automatisk siden når du ændrer filer.

Alternativt kan du også:
- Åbne filerne direkte i browseren (live-reload.js virker kun med lokal server)
- Bruge Python's simple HTTP server: `python3 -m http.server 8000`
- Bruge en anden lokal server

## Struktur

- `index.html` - Forside
- `om-mig.html` - Om Lisa Kroløkke
- `om-dagplejen.html` - Om dagplejen
- `praktisk-info.html` - Praktisk information
- `priser.html` - Priser
- `ferie.html` - Ferie & Lukkedage
- `hvad-skal-med.html` - Hvad forældre skal sørge for
- `en-typisk-dag.html` - En typisk dagplejedag
- `kontakt.html` - Kontakt
- `styles.css` - Alle styles
- `script.js` - JavaScript funktionalitet
- `live-reload.js` - Auto-refresh ved filændringer (kun med lokal server)

