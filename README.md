# Weather App

Weather App è una web-app che ti consente di ricevere le condizioni meteorologiche in tempo reale.
## Tecnologie usate

**Front-end:** React, Bootstrap

**Back-end:** Node, Express

**Database:** JSON

**Version Control System:** Git
## Prerequisiti

Aver installato i seguenti software:

- [Node.js](https://nodejs.org/it/download)
- [Git Bash](https://git-scm.com/)
- [Postman](https://www.postman.com/downloads/) (opzionale)

Aver creato un account su [Weather API](https://www.weatherapi.com/).
Una volta esservi loggati sul sito di Weather API avrete una chiave personale che vi permetterà di effettuare le chiamate API necessarie al funzionamento di questa web-app.

## Installazione

Scarica il progetto

```bash
  git clone https://github.com/MatteoT92/weather-app.git
```

Installa le dipendenze richieste dal server e client

```bash
  cd backend
  npm install
```

```bash
  cd frontend/weather
  npm install
```

Crea un file JSON che conterrà la key API di Weather API

```bash
  cd frontend/weather/src
  touch api-key.json
```

Aggiungi nel file appena creato il seguente JSON, avendo cura di sostituire nella chiave "key" il valore della tuo token

```bash
  {
    "provider": "Weather API",
    "url": "https://www.weatherapi.com/",
    "key": "YOUR_TOKEN_API"
  }
```

Avvia il server

```bash
  cd backend
  npm start
```

Avvia il client

```bash
  cd frontend/weather
  npm start
```


## Esecuzione nel browser

Per testare la web-app occorre andare sul browser e digitare il seguente URL

```http
  http://localhost:3000/
```


## Riferimenti API

In questa web-app si sono usate API di terze parti fornite da Weather API.
Esiste un piano gratuito che permette di effettuare parecchie chiamate.
Per maggiori dettagli vi invito a visitare il [sito](https://www.weatherapi.com/) e/o il profilo [GitHub](https://github.com/weatherapicom/).