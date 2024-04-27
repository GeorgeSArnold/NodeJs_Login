//  database service
// const sql = require('mysql'): Dies importiert das mysql-Modul, das verwendet wird, 
// um mit MySQL-Datenbanken zu interagieren. 
// Das Modul muss zuvor installiert worden sein, normalerweise über npm install mysql.
// const db = sql.createConnection({ ... }): Dies erstellt eine Verbindung zur MySQL-Datenbank. 
// Es werden verschiedene Konfigurationsoptionen bereitgestellt, die aus Umgebungsvariablen gelesen werden. 
// Diese Variablen enthalten normalerweise Informationen wie den Hostnamen der Datenbank, den Benutzernamen, 
// das Passwort und den Namen der Datenbank. Diese sensiblen Informationen werden typischerweise in einer 
// separaten .env-Datei gespeichert, um sie sicher zu halten und von der Versionskontrolle auszuschließen.
// module.exports = db;: Dies exportiert die erstellte Verbindung, damit sie in anderen Dateien oder Modulen
//  der Node.js-Anwendung verwendet werden kann. Durch das Exportieren der Verbindung können andere Teile 
//  der Anwendung diese Verbindung einfach importieren und für Datenbankabfragen verwenden.

// import mysql
const sql = require('mysql')

// connection options
const db = sql.createConnection({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE
})

module.exports = db;