import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  tasksEn = [
    'In UniversitiesListComponent, combine "one" and "two" arrays. Remove duplicate elements. Display result',
    'Add truncate for names.',
    'Add a link to each of the domains displayed',
    'Count how many universities each country has. Display the results in the console in order of the country with the most universities.',
    'Add the functionality of filtering the list by university name',
    'Combine data about universities from Poland and Spain. Display the results. The API does not support such requests, so you need to get the data separately and then merge them.',
    'Display loader while downloading data.',
    'Add OnPush to UniversitiesListComponent',
    'Add a mechanism for saving the side menu state',
    'Add cache to data downloaded by the service',
    'In UniversitiesListComponent, move the logic of combining arrays into a separate function. Write a test to check if it works correctly',
    'Add responsiveness to the displayed list so that it supports mobile devices'
  ];

  tasksPl = [
    'W UniversitiesListComponent połącz tablice „one” i „two”. Usuń zduplikowane elementy. Wyświetl wynik',
    'Dodaj truncate dla nazw.',
    'Do każdej z wyświetlanych domen dodaj link.',
    'Policz ile uniwersytetów ma każdy z krajów. Wyniki wyświetl w konsoli w kolejnośći od kraju z największą liczbą uniwersytetów.',
    'Dodaj funkcjonalność filtrowania listy po nazwie uniwersytetu',
    'Połącz dane o uniwersytetach z Polski i Hiszpanii. Wyświetl wyniki. API nie obsługuje takich rządań, więc należy pobarć dane osobno, a potem je połączyć.',
    'Dodaj loader na czas pobierania danych.',
    'Dodaj OnPush do UniversitiesListComponent',
    'Dodaj mechanizm trzymający stan bocznego menu',
    'Dodaj cache do pobieranych przez serwis danych',
    'W UniversitiesListComponent przenieś logikę łączenia tablic do osobnej funkcji. Napisz test sprawdzający poprawność jej działania',
    'Dodaj responsywność wyświetlanej listy, tak, żeby obsługiwała urządzenia mobilne'
  ];
}
