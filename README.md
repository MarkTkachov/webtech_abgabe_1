## HTML
- Wir nutzen insgesamt 2 html Dateien, eine für jede Seite
- Die Dateien sind jeweils aufgeteilt in head und body
- im Head werden die notwendigen Meta-Tags, Links zu CSS-Dateien und Skripten eingebunden
- im Body wird der Inhalt und die Struktur der Seiten festgelegt
- der Body selbst ist in 3 Bereiche eingeteilt:
    1. Header: Navigation der Webseite
    2. Main: Content der Seite (Map oder Nachrichten/Wetter)
    3. Footer: Informationen über die Webseite

## CSS

 - CSS-Variablen: Um Konsistenz zu schaffen und Redundanz zu vermeiden
 - Flexbox ermöglicht eine flexible Layout-Struktur, vorallem für Header/Navigationselemente
   -> Responsiv, passt sich der Bildschirmgrösse an
 - Header auf sticky gesetzt
 - Media Queries ermöglichen optimale Darstellung für unterschiedliche Geräte
 - Hamburger-Menü vorallem für Mobile-Ansicht geeignet
   -> Platzsparend und benutzerfreundlich
 - Box-Sizing: border-box
   -> Padding bereits inklusive bei der Höhe/Breite

## JavaScript

 - Auf der Startseite wird das Wetter für die nächsten 3 Tage angezeigt. Dafür wird die [wttr.in](https://github.com/chubin/wttr.in) API verwendet. Die Daten werden mit `fetch` abgerufen. Aus Daten werden HTML-Strings generiert und in den DOM eingefügt.
 - Es wird JSDoc verwendet, um den Rückgabewert der fetch Funktion für Wetterdaten zu dokumentieren. Die Typdefinition wurde mit einem [online Tool](https://transform.tools/json-to-jsdoc) aus dem zurückgegebenen Wert erzeugt.
 - Für die interaktive Karte wird die [Leaflet](https://leafletjs.com/) Bibliothek verwendet. Die Karte nutzt die standarten Tiles von [OpenStreetMap](https://www.openstreetmap.org/).
 - Die Hilfstypen für die Leaflet Bibliothek können mit npm installiert werden - `$ npm i`. 
 - Die Karte ist auf dem Campus Linden der Hochschule Hannover zentriert. Jedes Gebäude auf dem Campus ist mit einem Polygon markiert. Wenn man auf ein Polygon klickt, werden kurze Informationen zu dem Gebäude angezeigt. Das wird mithilfe von in Leaflet eingebauten Popups realisiert.

## Integration und Reflexion

 - Herausforderungen bei der Integration gab es keine. Die Teammitglieder haben sauberen und klar abgetrennten Code geschrieben, der auch den W3C CSS & HTML Validator bestanden hat.
 - Chrome (Desktop & Mobile)
 - Firefox (Desktop & Mobile)
 - Edge (Desktop & Mobile)
 - Safari (Desktop & Mobile) Desktop musste ich über einen [Online Safari Browser](https://www.browserling.com/safari-testing) testen, Mobile über iPhone im Haushalt
