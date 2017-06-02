import * as quark from "quark-gui";

let ButtonRow = quark.Molecules.Buttons.ButtonRow;

export default `
<h4>Button row</h4>
${ButtonRow.getModule({
	id: 'button-row1',
	buttons: [
	{
		id: 'buttonrow-button1',
		content: '',
		iconClass: 'fa fa-home'
	},
	{
		id: 'buttonrow-button1',
		content: 'Home'
	},
	{
		id: 'buttonrow-button1',
		content: 'Home',
		iconClass: 'fa fa-home'
	}
	]
})}
`;