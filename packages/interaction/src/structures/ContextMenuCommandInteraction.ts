import type { APIContextMenuInteraction } from 'discord-api-types/v10';
import { CommandInteraction } from './CommandInteraction';

/**
 * Represents a context menu interaction.
 */
export class ContextMenuCommandInteraction extends CommandInteraction<APIContextMenuInteraction> {
	/**
	 * The id of the target of the interaction
	 */
	public get targetId() {
		return this.data.data.target_id;
	}
}
