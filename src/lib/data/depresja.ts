export type Objaw = {
	id: string;
	tresc: string;
};

export type Krok = {
	nr: string;
	tytul: string;
	opis: string;
};

export const objawy: Objaw[] = [
	{ id: 'o1', tresc: 'Smutek lub przygnębienie trwające ponad 2 tygodnie' },
	{ id: 'o2', tresc: 'Utrata zainteresowania ulubionymi aktywnościami' },
	{ id: 'o3', tresc: 'Zaburzenia snu — bezsenność lub nadmierna senność' },
	{ id: 'o4', tresc: 'Brak apetytu lub nadmierne jedzenie' },
	{ id: 'o5', tresc: 'Zmęczenie i brak energii przez większość dnia' },
	{ id: 'o6', tresc: 'Trudności z koncentracją i pamięcią' },
	{ id: 'o7', tresc: 'Poczucie bezwartościowości lub nieuzasadnionej winy' },
	{ id: 'o8', tresc: 'Izolowanie się od rodziny i przyjaciół' },
	{ id: 'o9', tresc: 'Zaniedbywanie higieny osobistej' },
	{ id: 'o10', tresc: 'Mówienie o śmierci lub chęci "zniknięcia"' }
];

export const kroki: Krok[] = [
	{
		nr: '1',
		tytul: 'Nie bagatelizuj',
		opis: 'Nie mów "wszyscy tak mają" ani "weź się w garść". Depresja to choroba, nie słabość charakteru.'
	},
	{
		nr: '2',
		tytul: 'Zapytaj wprost',
		opis: 'Zapytaj: "Czy masz myśli o tym, żeby skrzywdzić siebie lub nie żyć?" — to nie pogarsza sytuacji. Pomaga.'
	},
	{
		nr: '3',
		tytul: 'Zaproponuj pomoc',
		opis: 'Zaproponuj wizytę u lekarza pierwszego kontaktu. Możesz umówić wizytę i pojechać razem.'
	},
	{
		nr: '4',
		tytul: 'Bądź obecny/a',
		opis: 'Regularne, krótkie kontakty są ważniejsze niż jeden długi telefon raz w miesiącu.'
	},
	{
		nr: '5',
		tytul: 'Zadzwoń po pomoc',
		opis: 'Telefon Zaufania dla Seniorów: 22 635 09 54 (bezpłatny, czynny całą dobę).'
	}
];
