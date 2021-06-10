export const createACT = () => {
	const sections = {
		English: 75,
		Math: 60,
		Reading: 40,
		Science: 40,
	};
	const form = {};

	Object.entries(sections).forEach(([section, questions]) => {
		if (section === 'English') {
			form[section] = Array.from({ length: questions }, () => ({
				type: 'MC',
				choice: '',
				choices: ['ABCD', 'FGHJ'],
			}));
		}

		if (section === 'Math') {
			form[section] = Array.from({ length: questions }, () => ({
				type: 'MC',
				choice: '',
				choices: ['ABCDE', 'FGHJK'],
			}));
		}

		if (section === 'Reading') {
			form[section] = Array.from({ length: questions }, () => ({
				type: 'MC',
				choice: '',
				choices: ['ABCD', 'FGHJ'],
			}));
		}

		if (section === 'Science') {
			form[section] = Array.from({ length: questions }, () => ({
				type: 'MC',
				choice: '',
				choices: ['ABCD', 'FGHJ'],
			}));
		}
	});

	return form;
};

export const createSAT = () => {
	const sections = {
		Writing: 52,
		Reading: 44,
		'Math No Calculator': 20,
		'Math Calculator': 38,
	};
	const form = {};

	Object.entries(sections).forEach(([section, questions]) => {
		if (section === 'Writing') {
			form[section] = Array.from({ length: questions }, () => ({
				type: 'MC',
				choice: '',
				choices: ['ABCD', 'ABCD'],
			}));
		}

		if (section === 'Reading') {
			form[section] = Array.from({ length: questions }, () => ({
				type: 'MC',
				choice: '',
				choices: ['ABCD', 'ABCD'],
			}));
		}

		if (section === 'Math No Calculator') {
			form[section] = Array.from({ length: 15 }, () => ({
				type: 'MC',
				choice: '',
				choices: ['ABCD', 'ABCD'],
			}));

			form[section] = form[section].concat(
				Array.from({ length: 5 }, () => ({
					type: 'GRID',
					choice: '',
				}))
			);
		}

		if (section === 'Math Calculator') {
			form[section] = Array.from({ length: 30 }, () => ({
				type: 'MC',
				choice: '',
				choices: ['ABCD', 'ABCD'],
			}));

			form[section] = form[section].concat(
				Array.from({ length: 8 }, () => ({
					type: 'GRID',
					choice: '',
				}))
			);
		}
	});

	return form;
};

// console.log(createSAT());
