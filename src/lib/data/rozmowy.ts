export type QuizQuestion = {
	pytanie: string;
	odpowiedzi: string[];
	poprawna: number;
};

export type KartaRozmowy = {
	sytuacja: string;
	tak: string[];
	nie: string[];
};

export type Rozmowa = {
	id: string;
	tytul: string;
	opis: string;
	karty: KartaRozmowy[];
	quiz: QuizQuestion[];
};

export const rozmowy: Rozmowa[] = [
	{
		id: 'samotnosc',
		tytul: 'Samotność',
		opis: 'Jak rozmawiać o poczuciu osamotnienia',
		karty: [
			{
				sytuacja: 'Senior mówi: "Nikt do mnie nie dzwoni, jestem sam/a"',
				tak: [
					'"Słyszę, że jest ci smutno. Chcę wiedzieć jak się naprawdę czujesz."',
					'"Co możemy zrobić razem, żebyś czuł/a się mniej sam/a?"'
				],
				nie: [
					'"Przecież dzwoniłem/am w zeszłym tygodniu!"',
					'"Nie przesadzaj — masz przecież rodzinę."'
				]
			},
			{
				sytuacja: 'Senior unika wychodzenia z domu',
				tak: [
					'"Czy jest coś, co utrudnia ci wychodzenie? Chętnie pójdę razem."',
					'"Może wyjdziemy razem na krótki spacer? Nie musisz iść daleko."'
				],
				nie: [
					'"Musisz się ruszać — to niezdrowe siedzieć w domu."',
					'"Sam/a wybrałeś/aś żeby się izolować."'
				]
			},
			{
				sytuacja: 'Senior często wspomina czasy, gdy był/a aktywny/a',
				tak: [
					'"Opowiedz mi więcej o tamtych czasach — chętnie posłucham."',
					'"Co z tamtego okresu sprawiało ci największą radość?"'
				],
				nie: [
					'"Teraz jest inaczej, zapomnij o przeszłości."',
					'"Wszyscy się starzeją — nie tylko ty."'
				]
			}
		],
		quiz: [
			{
				pytanie: 'Jak zareagować gdy senior mówi, że jest sam?',
				odpowiedzi: [
					'Zapewnić go, że ma rodzinę i temat zamknąć',
					'Wysłuchać i zapytać jak naprawdę się czuje',
					'Powiedzieć, że przesadza'
				],
				poprawna: 1
			},
			{
				pytanie: 'Co pomaga seniorowi poczuć się wysłuchanym?',
				odpowiedzi: [
					'Dawanie gotowych rad i rozwiązań',
					'Aktywne słuchanie i zadawanie otwartych pytań',
					'Szybkie zmienianie tematu na weselszy'
				],
				poprawna: 1
			}
		]
	},
	{
		id: 'auto',
		tytul: 'Rezygnacja z auta',
		opis: 'Jak rozmawiać o oddaniu prawa jazdy',
		karty: [
			{
				sytuacja: 'Martwisz się o bezpieczeństwo seniora za kierownicą',
				tak: [
					'"Zależy mi na tobie i chcę się upewnić, że jesteś bezpieczny/a."',
					'"Czy możemy razem sprawdzić jak się czujesz podczas jazdy?"'
				],
				nie: [
					'"Oddaj już to prawo jazdy — jesteś zagrożeniem na drodze."',
					'"Widziałem/am jak jechałeś/aś — to było przerażające."'
				]
			},
			{
				sytuacja: 'Senior boi się utraty niezależności',
				tak: [
					'"Rozumiem, że auto daje ci wolność. Zastanówmy się, jak możesz ją zachować inaczej."',
					'"Możemy zorganizować regularne przejazdy, żebyś mógł/mogła wszędzie dotrzeć."'
				],
				nie: [
					'"Nie jesteś już w stanie sam/a jeździć — to oczywiste."',
					'"To dla twojego dobra. Nie ma o czym rozmawiać."'
				]
			},
			{
				sytuacja: 'Rozmowa utknęła w martwym punkcie',
				tak: [
					'"Nie musimy decydować dziś. Wróćmy do tego za tydzień — bez stresu."',
					'"Co by musiało się zmienić, żebyś czuł/a się z tym lepiej?"'
				],
				nie: [
					'"Skoro nie słuchasz, zadzwonię do lekarza i on ci zabroni."',
					'"Nie masz wyboru w tej sprawie."'
				]
			}
		],
		quiz: [
			{
				pytanie: 'Dlaczego rezygnacja z auta jest tak trudna dla seniora?',
				odpowiedzi: [
					'Bo nie lubi jeździć komunikacją',
					'Bo symbolizuje utratę niezależności i wolności',
					'Bo auto jest za drogie do utrzymania'
				],
				poprawna: 1
			},
			{
				pytanie: 'Od czego zacząć rozmowę o rezygnacji z auta?',
				odpowiedzi: [
					'Od strachu i krytyki błędów w jeździe',
					'Od troski o bezpieczeństwo seniora i bliskich',
					'Od wymogów prawnych i formalności'
				],
				poprawna: 1
			}
		]
	},
	{
		id: 'dps',
		tytul: 'Przeprowadzka do DPS',
		opis: 'Jak rozmawiać o domu opieki',
		karty: [
			{
				sytuacja: 'Rodzina rozważa DPS, senior wyraźnie się nie zgadza',
				tak: [
					'"Chcemy, żebyś był/a bezpieczny/a i dobrze zaopiekowany/a — to dla nas priorytet."',
					'"Czy możemy razem odwiedzić kilka miejsc i zobaczyć jak wyglądają?"'
				],
				nie: [
					'"Nie damy już rady się tobą zajmować."',
					'"Tam będzie ci lepiej niż tutaj, zobaczysz."'
				]
			},
			{
				sytuacja: 'Senior boi się, że zostanie zapomniany przez rodzinę',
				tak: [
					'"Będziemy cię odwiedzać regularnie — to się nie zmieni."',
					'"Twoje miejsce w naszej rodzinie jest trwałe i niezmienne."'
				],
				nie: [
					'"Nie możemy być z tobą cały czas — mamy swoje życie."',
					'"DPS to teraz twój dom. My przyjedziemy jak będziemy mogli."'
				]
			},
			{
				sytuacja: 'Senior pyta wprost: "Pozbywasz się mnie?"',
				tak: [
					'"Nie pozbywam się ciebie. Kocham cię i chcę dla ciebie jak najlepiej."',
					'"To jedna z najtrudniejszych decyzji, przez którą przechodzę."'
				],
				nie: [
					'"Nie dramatyzuj — to tylko logistyka."',
					'"Sam/a rozumiesz, że nie ma żadnego innego wyjścia."'
				]
			}
		],
		quiz: [
			{
				pytanie: 'Czego senior boi się najbardziej przy decyzji o DPS?',
				odpowiedzi: [
					'Złego jedzenia i małego pokoju',
					'Zapomnienia i odrzucenia przez rodzinę',
					'Braku dostępu do telewizji'
				],
				poprawna: 1
			},
			{
				pytanie: 'Jak odpowiedzieć na pytanie "Pozbywasz się mnie?"',
				odpowiedzi: [
					'Zaprzeczyć i szybko zmienić temat',
					'Wyrazić miłość i przyznać, że to trudna decyzja',
					'Wytłumaczyć logicznie dlaczego to konieczne'
				],
				poprawna: 1
			}
		]
	}
];
