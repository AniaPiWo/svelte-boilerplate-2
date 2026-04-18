export type KartaInfo = {
	tytul: string;
	tresc: string;
};

export type QuizQuestion = {
	pytanie: string;
	odpowiedzi: string[];
	poprawna: number;
};

export type Etap = {
	id: string;
	label: string;
	opis: string;
	karty: KartaInfo[];
	quiz: QuizQuestion[];
};

export const etapy: Etap[] = [
	{
		id: '60plus',
		label: '60+',
		opis: 'Wczesna starość — aktywność i niezależność',
		karty: [
			{
				tytul: 'Zmiany fizyczne',
				tresc:
					'Wolniejszy metabolizm, pierwsze problemy ze stawami, możliwe nadciśnienie. Senior jest wciąż aktywny i w dużej mierze samodzielny. Regularny ruch i profilaktyka mają ogromne znaczenie.'
			},
			{
				tytul: 'Zmiany psychiczne',
				tresc:
					'Przejście na emeryturę może wywoływać poczucie utraty roli społecznej i celu. Ważne jest podtrzymywanie relacji, pasji i poczucia przydatności. Senior może być podatny na "pusty czas".'
			},
			{
				tytul: 'Czerwone flagi samotności',
				tresc:
					'Wycofanie z kontaktów towarzyskich, rezygnacja z dotychczasowych hobby, smutek lub apatia po zakończeniu aktywności zawodowej. Warto pytać i słuchać — nie zakładaj, że "wszystko w porządku".'
			}
		],
		quiz: [
			{
				pytanie: 'Co może wywołać poczucie utraty celu u seniora 60+?',
				odpowiedzi: ['Przejście na emeryturę', 'Zakup nowego telefonu', 'Wyjazd na wakacje'],
				poprawna: 0
			},
			{
				pytanie: 'Która zmiana jest typowa dla wieku 60+?',
				odpowiedzi: [
					'Pełna sprawność bez żadnych zmian',
					'Możliwe nadciśnienie i wolniejszy metabolizm',
					'Całkowita utrata samodzielności'
				],
				poprawna: 1
			},
			{
				pytanie: 'Jak reagować na wycofanie seniora z kontaktów?',
				odpowiedzi: [
					'Ignorować — to normalne',
					'Zapytać jak się czuje i zaproponować wspólną aktywność',
					'Skrytykować za lenistwo'
				],
				poprawna: 1
			}
		]
	},
	{
		id: '75plus',
		label: '75+',
		opis: 'Środkowy etap — pierwsze ograniczenia',
		karty: [
			{
				tytul: 'Zmiany fizyczne',
				tresc:
					'Ograniczona mobilność, ryzyko upadków, możliwe problemy z pamięcią krótkotrwałą, nasilenie chorób przewlekłych. Senior może potrzebować wsparcia przy codziennych czynnościach.'
			},
			{
				tytul: 'Zmiany psychiczne',
				tresc:
					'Lęk przed utratą samodzielności, zależność od innych bywa trudna do zaakceptowania. Senior może reagować zaprzeczeniem lub frustracją. Wzrasta ryzyko depresji — szczególnie po stracie bliskich.'
			},
			{
				tytul: 'Czerwone flagi samotności',
				tresc:
					'Zaniedbywanie higieny osobistej, nieregularne posiłki, brak kontaktu z rodziną przez dłuższy czas. Częste skargi na zdrowie mogą być wołaniem o uwagę i obecność, nie tylko o pomoc medyczną.'
			}
		],
		quiz: [
			{
				pytanie: 'Co zwiększa ryzyko upadków u seniora 75+?',
				odpowiedzi: [
					'Częste wychodzenie z domu',
					'Ograniczona mobilność i problemy z równowagą',
					'Aktywność fizyczna'
				],
				poprawna: 1
			},
			{
				pytanie: 'Która postawa pomaga seniorowi 75+ zachować godność?',
				odpowiedzi: [
					'Wyręczanie we wszystkim bez pytania',
					'Wspieranie samodzielności tam, gdzie to możliwe',
					'Podejmowanie wszystkich decyzji za seniora'
				],
				poprawna: 1
			},
			{
				pytanie: 'Co może sygnalizować depresję u seniora 75+?',
				odpowiedzi: [
					'Aktywność i zainteresowanie życiem',
					'Zaniedbywanie higieny i izolowanie się',
					'Chętne rozmowy z rodziną'
				],
				poprawna: 1
			}
		]
	},
	{
		id: '85plus',
		label: '85+',
		opis: 'Późna starość — intensywna opieka',
		karty: [
			{
				tytul: 'Zmiany fizyczne',
				tresc:
					'Znaczna niesamodzielność, możliwa demencja lub otępienie, trudności z połykaniem i trawieniem, wielochorobowość. Każda zmiana w zachowaniu lub samopoczuciu wymaga uwagi.'
			},
			{
				tytul: 'Zmiany psychiczne',
				tresc:
					'Dezorientacja, lęk, tęsknota za przeszłością i bliskimi, którzy już odeszli. Wspomnienia, rutyna i przewidywalność dnia dają poczucie bezpieczeństwa. Unikaj nagłych zmian w otoczeniu.'
			},
			{
				tytul: 'Czerwone flagi samotności',
				tresc:
					'Płacz bez wyraźnego powodu, agresja słowna, zamykanie się w pokoju, odmowa jedzenia lub picia. Mogą sygnalizować ból, strach lub głęboką depresję — nie bagatelizuj żadnego z tych sygnałów.'
			}
		],
		quiz: [
			{
				pytanie: 'Co daje seniorowi 85+ poczucie bezpieczeństwa?',
				odpowiedzi: ['Ciągłe zmiany w otoczeniu', 'Rutyna i wspomnienia', 'Nowe technologie'],
				poprawna: 1
			},
			{
				pytanie: 'Jak zareagować gdy senior 85+ płacze bez wyraźnego powodu?',
				odpowiedzi: [
					'Zbagatelizować i zmienić temat',
					'Zapewnić spokojną obecność i zapytać co czuje',
					'Zostawić samego, żeby się uspokoił'
				],
				poprawna: 1
			},
			{
				pytanie: 'Co może oznaczać odmowa jedzenia u seniora 85+?',
				odpowiedzi: [
					'Zwykłe kapryszenie',
					'Sygnał depresji lub problemów fizycznych wymagający reakcji',
					'Normalny brak apetytu w starszym wieku'
				],
				poprawna: 1
			}
		]
	}
];
