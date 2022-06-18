import type { APIApplicationCommandAutocompleteInteraction } from 'discord-api-types/v10';
import { BaseInteraction } from './BaseInteraction';

/**
 * Represents an autocomplete interaction.
 */
export class AutoCompleteInteraction extends BaseInteraction<APIApplicationCommandAutocompleteInteraction> {
	/**
	 * The invoked application command's id
	 * @type {Snowflake}
	 */
	public get commandId() {
		return this.data.data.id;
	}

	/**
	 * The invoked application command's name
	 * @type {string}
	 */
	public get commandName() {
		return this.data.data.name;
	}

	/**
	 * The invoked application command's type
	 * @type {ApplicationCommandType}
	 */
	public get commandType() {
		return this.data.data.type;
	}

	/**
	 * The options passed to the command
	 */
	public get options() {
		return this.data.data.options;
	}
	// TODO: implement respond in response
	// /**
	//  * Whether this interaction has already received a response
	//  */
	// public get responded() {
	// 	return this._responded;
	// }

	// /**
	//  * Sends results for the autocomplete of this interaction.
	//  * @param options The options for the autocomplete
	//  * @returns
	//  * @example
	//  * // respond to autocomplete interaction
	//  * interaction.respond([
	//  *  {
	//  *    name: 'Option 1',
	//  *    value: 'option1',
	//  *  },
	//  * ])
	//  *  .then(console.log)
	//  *  .catch(console.error);
	//  */
	// public async respond(options: APIApplicationCommandOptionChoice[]) {
	// 	if (this.responded) throw new Error('INTERACTION_ALREADY_REPLIED');

	// 	await this.rest.post(Routes.interactionCallback(this.id, this.token), {
	// 		body: {
	// 			type: InteractionResponseType.ApplicationCommandAutocompleteResult,
	// 			data: {
	// 				choices: options,
	// 			},
	// 		},
	// 		auth: false,
	// 	});
	// 	this._responded = true;
	// }
}
