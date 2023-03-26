// Instanciation de l'objet UAParser
var parser = new UAParser();

// Appel des méthodes de l'objet pour détecter le type d'appareil
var resultat = "";
var resultat_device = parser.getDevice();
var resultat_os = parser.getOS();
var resultat_browser = parser.getBrowser();

// Construction de la chaîne de résultat
resultat += "Appareil : " + resultat_device.vendor + " " + resultat_device.model + "<br>";
resultat += "Système d'exploitation : " + resultat_os.name + " " + resultat_os.version + "<br>";
resultat += "Navigateur : " + resultat_browser.name + " " + resultat_browser.version;

// Affichage des résultats dans l'élément HTML approprié
document.getElementById("resultat").innerHTML = resultat;
