import type { APIChatInputApplicationCommandInteraction } from 'discord-api-types/v10';
import { CommandInteraction } from './CommandInteraction';

/**
 * Represents a command interaction.
 */
export class ChatInputCommandInteraction extends CommandInteraction<APIChatInputApplicationCommandInteraction> {
	/**
	 * The options passed to the command.
	 */
	public get options() {
		return this.data.data.options;
	}
}
