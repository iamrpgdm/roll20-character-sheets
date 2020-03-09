	const parseIntegers = numbers => {
		for (let [key, value] of Object.entries(numbers)) {
	        numbers[key] = parseInt(value) || 0;
	    }

	    return numbers
	}

	const processTempFlags = (flag, temp, values) => {
		values[`${flag}`] === "on" ? false : delete values[`${temp}`];
		delete values[`${flag}`];
		return values
	}

	const getRepeatingSection = triggerName => {
		const split = triggerName.split('_');
		return `${split[0]}_${split[1]}_${split[2]}`
	}

	const calculateLimitTotal = (values, type) => {
		const attributes = sheetAttribues[`${type}Limits`];
		values.essence ? Math.ceil(values.essence) || 0 : false;

		const stat1 = values[`${attributes[0]}`]; //Essence, Intuition, Body
		const stat2 = values[`${attributes[1]}`]; //Willpower, Reaction, Willpower
		const stat3 = values[`${attributes[2]}`]; //Logic, Strenght, Charisma

		return ((stat1 + stat2 + (stat3 * 2))/3)
	}


	const calculateSum = arr => arr.reduce((a,b) => a + b, 0)

	const calculateBonuses = values => {
		let bonus = 0;
		for (let [key, value] of Object.entries(values)) {
	        key.includes('modifier') || key.includes('temp') ? bonus += value : 0;
	    }
		return bonus
	}

	const getTranslations = translationKeys => {
		let translations = [];
		translationKeys.forEach(key => {
			translations.push(getTranslationByKey(key));
		});
		return translations
	}