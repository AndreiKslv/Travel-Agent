import autoComplete from "@tarekraafat/autocomplete.js";
import countryList from "../helpers/countryList";

function autoCompleteJSBlock() {
	const autoCompleteJS = new autoComplete({
		selector: "#autoCompleteLocation",
		placeHolder: "e.g Bali, Indonesia",
		data: {
			src: countryList,
		},
		resultItem: {
			highlight: true,
		},
		events: {
			input: {
				selection: (event) => {
					const selection = event.detail.selection.value;
					autoCompleteJS.input.value = selection;
				}
			}
		},
		searchEngine: 'strict',
	});
}

export default autoCompleteJSBlock

