# Základní použití

Zdrojové soubory jsou ve složce `src`. Pomocné skripty ve složce `scripts`, skripty jsou pro linux, konverze pro windows by měla být triviální.

## Před začátkem vývoje

Předpokládáme nainstalované npm. Angular doinstalujeme pomocí skriptu `install.sh`.

Poté vyzkoušíme aplikaci spusti pomocí skriptu `run.sh`. Měl by se spusti testovací web server na portu 4200 (pokud bude jiný, tak bude vypsán ve výstupu skriptu).

Aplikace je živá, to znamená, že po změně jakéhokoliv souboru na disku dojde k rekompilaci aplikace a automatickému refreshi otevřeného okna prohlížeče.

## Sestavení aplikace pro nasazení

Komponentu můžeme sestavit pomocí skriptu `build.sh`, který vygeneruje složku `dist` se všemi potřebnými soubory. S největší pravděpodobností budeme potřebovat pouze js skripty - viz vzorová stránka popsaná níže. Samozřejmě dále můžeme potřebovat nějaké assety jako obrázky, fonty apod. Jejich dostupnost pak musíme zajisti na nějaké www adrese.

## Struktura projektu

Samotná komponenta je umístěna v adresáři `Projects/Reservation/src/app/reservation-system`.

**Příklad vstupního parametru:**

`@Input() public bgColor = 'red';`

**Umístění výstupního modelu:**

`Projects/Reservation/src/app/models/response.ts`

Zde se jedná o klasickou třídu v typescriptu.

V souboru `Projects/Reservation/src/app/index.html` je vzorová obalovací stránka, která se spouští v rámci `run.sh` - tato stránka slouží pro vývoj.

V souboru `Projects/Reservation/index.html` je vzorová obalovací stránka, která je určená pro vyzkoušení výstupu komponenty po kompilaci do produkční verze. Pro použití této stránky je potřeba provést sestavení komponenty a upravit názvy dvou souborů v `index.html` - po každém buildu dostanou nový název. Poté můžeme stránku otevřít v prohlížečí a ověřit. Do stránky můžeme doplnit testovací layout naší aplikace, do které budeme komponentu integrovat a ověřit si tak, že máme vše správně nastaveno.

V obou souborech je uveden příklad odchycení custom eventu s výstupem z komponenty.

```
<script type="text/javascript">
    window.addEventListener("button-pressed", function(e) {
        alert(JSON.stringify(e.detail));
    });
</script>
```

## Ladění aplikace

Ladění realizujeme skrze DevTools debugger libovolného prohlížeče - stejně jako jakoukoliv js aplikaci. Mapování pro ts je součástí aplikace, proto můžeme debugovat přímo typescript.