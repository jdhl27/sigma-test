/* Datos Departamentos - Municipios*/
var datos = {
	"Antioquia":["Barbosa", "Envigado", "Girardota", "Itagui", "Medellín", "Urrao"],
	"Amazonas": ["Leticia","El encanto","La Chorrera","La Pedrera","Miritiparaná","Puerto Alegría","Puerto Arica","Puerto Nariño","Puerto Santader"],
	"Atlántico": ["Baranoa","Baranoa","Barranquilla","Campo de la Cruz","Candelaría","Galapa","San Juan de Acosta","Luruaco","Malambo","Manatí","Palmar de Varela","Piojo","Polo Nuevo","Ponedera","Puerto Colombia","Repelón","Sabanagrande","Sabanalarga","Santa Lucía","Santo Tomás","Soledad","Suan","Tubara","Usiacurí"],
	"Caquetá": ["Albania","Belén de los Andaquíes","Cartagena del Chaira","Curillo","El Doncello","El Paujil","Florencia","La Montañita","Milan","Morelia","Puerto Rico","San José de Fragua","San Vicente del Caguán","Solano","Solita","Valparaíso"],
	"Cesar": ["Aguachica","Agustín Codazzi","Astrea","Becerril","Bosconia","Chimichagua","Chiriguaná","Curumaní","El Copey","El Paso","Gamarra","González","La Gloria","La Jagua","Ibirico","Manaure","Pailitas","Pelaya","Pueblo Bello","Río de Oro","Robles la Paz","San Alberto","San Diego","San Martín","Tamalameque","Valledupar"],
	"Chocó": ["Acandi","Alto Baudo","Atrato","Bagado","Bahía Solano","Belén de bajirá","Bajo Baudo","Bojayá","Cantón de San Pablo","Carmen del Darién","Certeguí","Condoto","El Carmen","Istmina","Jurado","Litoral del San Juan","Lloró","Medio Atrato","Medio Baudo","Medio San Juan","Novita","Nuquí","Quibdó","Río Iro","Río Quito","Riosucio","San José del Palmar","Sipí","Tado","Unguía","Unión Panamericana"],
	"Córdoba": ["Ayapel","Buenavista","Canalete","Cerete","Chima","Chinu","Ciénaga de Oro","Cotorra","La Apartada","Lorica","Los Córdobas","Momil","Moñitos","Montelibano","Montería","Planeta Rica","Pueblo Nuevo","Puerto Escondido","Puerto Libertador","Purísima","Sahagun","San Andrés","Sotavento","San Antero","San Bernardo Viento","San Carlos","San Pelayo","Tierralta","Tuchin","Valencia"],
	"Guainía": ["Inírida","Barranco Minas","Cacahual","La Guadalupe","Mapiripana","Morichal","Pana Pana","Puerto Colombia","San Felipe"],
	"Guaviare": ["Calamar","El Retorno","Miraflores","San José del Guaviare"],
	"Huila": ["Acevedo","Agrado","Aipe","Algeciras","Altamira","Baraya","Campoalegre","Colombia","Elias","Garzón","Gigante","Guadalupe","Hobo","Íquira","Isnos","La Argentina","La Plata","Nataga","Neiva","Oporapa","Paicol","Palermo","Palestina","Pital","Pitalito","Rivera","Saladoblanco","San Agustín","Santa María","Suaza","Tarqui","Tello","Teruel","Tesalia","Timana","Villavieja","Yaguará"],
	"La Guajira": ["Riohacha","Albania","Barranca","Dibulla","Distracción","El Molino","Fonseca","La Jagua del Pilar","Maicao","Manaure","San Juan del Cesar","Urumita","Villa Nueva"],
	"Putumayo": ["Colón","Mocoa","Orito","Puerto Asís","Puerto Caicedo","Puerto Guzman","Leguizamo","San Francisco","San Miguel","Santiago","Sibundoy","Valle del Guamuez","Villagarzón"],
	"Quindío": ["Armenia","Buenavista","Calarca","Circasia","Córdoba","Filandia","Genova","La Tebaida","Montenegro","Pijao","Quimbaya","Salento"],
	"San Andrés y Providencia": ["Providencia","San Andrés y Providencia"],
	"Sucre": ["Buenavista","Caimito","Chalán","Colosó","Coveñas","Corozal","El Roble","Galeras","Guaranda","La Unión","Los Palmitos","Majagual","Morroa","Ovejas","Palmito","Sampués","San Benito Abad","San Juan de Betulia","San Marcos","San Onofre","San Pedro","Sincé","Sincelejo","Sucre","Tolú","Toluviejo"],
	"Tolima": ["Alpujarra","Alvarado","Ambalema","Anzoátegui","Ataco","Cajamarca","Carmen de Apicalá","Casabianca","Chaparral","Coello","Coyaima","Cunday","Dolores","Espinal","Falán","Flandes","Fresno","Guamo","Guayabal","Herveo","Honda","Ibagué","Icononzo","Lérida","Líbano","Mariquita","Melgar","Murillo","Natagaima","Ortega","Palocabildo","Piedras","Planadas","Prado","Purificación","Rioblanco","Roncesvalles","Rovira","Saldaña","San Antonio","San Luis","Santa Isabel","Suárez","Valle de San Juan","Venadillo","Villahermosa","Villarrica"],
	"Vaupés": ["Cacarú","Mitú","Papunaua","Pacoa","Taraira","Yavaraté"],
	"Vichada": ["Cumaribó","La Primavera","Puerto Carreño","Santa Rosalia"]
}


/* DOM variables de elementos */
var selectState = document.getElementById("state");
var selectCity = document.getElementById("city");
var nombre = document.getElementById("nombre");
var email = document.getElementById("email");

/* Insertando Departamentos en selector */
for(const prop in datos){
  option = document.createElement("option");
  option.value = prop;
  option.text = prop;
  selectState.appendChild(option);
}

/* Insertando Municipios por defecto en selector */
for (let i = 0; i < datos["Antioquia"].length; i++) {
  option = document.createElement("option");
  option.value = datos["Antioquia"][i];
  option.text = datos["Antioquia"][i];
  selectCity.appendChild(option);
}

/* Funciones */

/* Detectar cambios en el select Departamentos para insertar datos de los municipios */
function changesSelect() {

  for(const prop in datos){
    /* Insertando options de municipios según el departamento*/
    if (selectState.value === prop) {
      /* Eliminando options anteriores */
      var cantCity = selectCity.length - 1;
      for (let i = cantCity; i >= 0; i--) {
        selectCity.remove(i)
      }

      for (let i = 0; i < datos[prop].length; i++) {
        option = document.createElement("option");
        option.value = datos[prop][i];
        option.text = datos[prop][i];
        selectCity.appendChild(option);
      }
      break;
    }
  }
}

