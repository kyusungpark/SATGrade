//! types

const createACT = () => {
	const sections = {
		English: 75,
		Math: 60,
		Reading: 40,
		Science: 40,
	};
	const form: any[] = [];

	Object.entries(sections).forEach(([section, questions], idx) => {
		for (let i = 1; i <= questions; i++) {
			const item = {};

			item['section'] = section;
			item['number'] = i;
			item['type'] = 'MC';
			item['choice'] = '';
			item['choices'] = ['ABCD', 'FGHJ'];

			if (section === 'Math') {
				item['choices'] = ['ABCDE', 'FGHJK'];
			}

			form.push(item);
		}
	});

	return form;
};

const createSAT = () => {
	const sections = {
		Writing: 52,
		Reading: 44,
		'Math No Calculator': 20, // 1-15 MC | 16-20 Grid
		'Math Calculator': 38, // 1-30 MC | 31-38 Grid
	};
	const form: any[] = [];

	Object.entries(sections).forEach(([section, questions], idx) => {
		for (let i = 1; i <= questions; i++) {
			const item = {};

			item['section'] = section;
			item['number'] = i;
			item['type'] = 'MC';
			item['choice'] = '';
			item['choices'] = ['ABCD', 'ABCD'];

			if (section === 'Math No Calculator' && i > 15) {
				item['type'] = 'GRID';
				delete item.choices;
			}

			if (section === 'Math Calculator' && i > 30) {
				item['type'] = 'GRID';
				delete item.choices;
			}

			form.push(item);
		}
	});

	return form;
};

export const ACT = createACT();
export const SAT = createSAT();
