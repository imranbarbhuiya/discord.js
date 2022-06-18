import type { APIApplicationCommandInteraction } from 'discord-api-types/v10';
import { BaseInteraction } from './BaseInteraction';

export class CommandInteraction<T extends APIApplicationCommandInteraction> extends BaseInteraction<T> {
	/**
	 * The invoked application command's id
	 */
	public get commandId() {
		return this.data.id;
	}

	/**
	 * The invoked application command's name
	 */
	public get commandName() {
		return this.data.data.name;
	}

	/**
	 * The invoked application command's type
	 */
	public get commandType() {
		return this.data.data.type;
	}

	/**
	 * The id of the guild the invoked application command is registered to
	 */
	public get commandGuildId() {
		return this.data.guild_id ?? null;
	}
}
