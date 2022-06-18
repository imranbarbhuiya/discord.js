import { DiscordSnowflake } from '@sapphire/snowflake';
import { InteractionType, APIInteraction, APIPingInteraction } from 'discord-api-types/v10';

/**
 * Represents an interaction.
 */
export abstract class BaseInteraction<T extends Exclude<APIInteraction, APIPingInteraction>> {
	protected readonly data: T;

	public constructor(data: T) {
		this.data = data;
	}

	/**
	 * The interaction's type
	 */
	public get type() {
		return this.data.type;
	}

	// /**
	//  * The type of component which was interacted with
	//  */
	// public get componentType() {
	// 	return this.data.type === InteractionType.MessageComponent ? this.data.component_type : null;
	// }

	/**
	 * The interaction's id
	 */
	public get id() {
		return this.data.id;
	}

	/**
	 * The interaction's token
	 */
	public get token() {
		return this.data.token;
	}

	/**
	 * The application's id
	 */
	public get applicationId() {
		return this.data.application_id;
	}

	/**
	 * The id of the channel this interaction was sent in
	 */
	public get channelId() {
		return this.data.channel_id ?? null;
	}

	/**
	 * The id of the guild this interaction was sent in
	 */
	public get guildId() {
		return this.data.guild_id ?? null;
	}

	/**
	 * The version
	 */
	public get version() {
		return this.data.version;
	}

	/**
	 * The permissions of the member, if one exists, in the channel this interaction was executed in
	 */
	public get memberPermissions() {
		return this.data.member?.permissions ?? null;
	}

	/**
	 * The locale of the user who invoked this interaction
	 */
	public get locale() {
		return this.data.locale;
	}

	/**
	 * The preferred locale from the guild this interaction was sent in
	 */
	public get guildLocale() {
		return this.data.guild_locale ?? null;
	}

	/**
	 * The timestamp the interaction was created at
	 */
	public get createdTimestamp() {
		return DiscordSnowflake.timestampFrom(this.id);
	}

	/**
	 * The time the interaction was created at
	 */
	public get createdAt() {
		return new Date(this.createdTimestamp);
	}

	/**
	 * Indicates whether this interaction is received from a guild.
	 */
	public inGuild() {
		return Boolean(this.guildId);
	}

	/**
	 * Indicates whether this interaction can be replied to.
	 */
	public isRepliable() {
		return ![InteractionType.Ping, InteractionType.ApplicationCommandAutocomplete].includes(this.type);
	}
}
