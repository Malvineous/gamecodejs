/*
 * Executable handler for Cosmo's Cosmic Adventures.
 *
 * Copyright (C) 2010-2021 Adam Nielsen <malvineous@shikadi.net>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

const FORMAT_ID = 'exe-cosmo1';

import Debug from '../util/debug.js';
const debug = Debug.extend(FORMAT_ID);

import { RecordBuffer, RecordType } from '@camoto/record-io-buffer';
import CodeHandler_Simple from '../interface/CodeHandler_Simple.js';

export default class Code_Cosmo1 extends CodeHandler_Simple
{
	static metadata() {
		let md = {
			...super.metadata(),
			id: FORMAT_ID,
			title: 'Cosmo\'s Cosmic Adventure, Episode 1',
		};

		return md;
	}

	static identify(content) {
		return this.identifyBySignature(
			content,
			0x1600,
			[0xBA, 0xA4, 0x18, 0x2E]
		);
	}

	static attributes() {
		return [
			{ id: 'filename.archive.standard', type: 'stringz', len: 11, offset: 0x1A5D6,
				desc: 'Archive filename for standard content shared between episodes.  '
					+ 'Although the original games use a different filename for each '
					+ 'episode, the files are actually identical and could be reduced to '
					+ 'a single file shared amongst all the episodes.' },
			{ id: 'filename.archive.episode', type: 'stringz', len: 11,
				desc: 'Archive filename for episode-specific content.' },
			{ id: 'filename.splash.pretitle', type: 'stringz', len: 13 },
			{ id: 'filename.splash.title', type: 'stringz', len: 11 },
			{ id: 'filename.splash.credits', type: 'stringz', len: 11 },
			{ id: 'filename.splash.bonus', type: 'stringz', len: 10 },
			{ id: 'filename.splash.end', type: 'stringz', len: 9 },
			{ id: 'filename.splash.loading', type: 'stringz', len: 13 },
			{ id: 'filename.backdrop.1', type: 'stringz', len: 12 },
			{ id: 'filename.backdrop.2', type: 'stringz', len: 11 },
			{ id: 'filename.backdrop.3', type: 'stringz', len: 13 },
			{ id: 'filename.backdrop.4', type: 'stringz', len: 13 },
			{ id: 'filename.backdrop.5', type: 'stringz', len: 13 },
			{ id: 'filename.backdrop.6', type: 'stringz', len: 11 },
			{ id: 'filename.backdrop.7', type: 'stringz', len: 12 },
			{ id: 'filename.backdrop.8', type: 'stringz', len: 11 },
			{ id: 'filename.backdrop.9', type: 'stringz', len: 10 },
			{ id: 'filename.backdrop.10', type: 'stringz', len: 12 },
			{ id: 'filename.backdrop.11', type: 'stringz', len: 13 },
			{ id: 'filename.backdrop.12', type: 'stringz', len: 13 },
			{ id: 'filename.backdrop.13', type: 'stringz', len: 12 },
			{ id: 'filename.backdrop.14', type: 'stringz', len: 12 },
			{ id: 'filename.backdrop.15', type: 'stringz', len: 13 },
			{ id: 'filename.backdrop.16', type: 'stringz', len: 13 },
			{ id: 'filename.backdrop.17', type: 'stringz', len: 11 },
			{ id: 'filename.backdrop.18', type: 'stringz', len: 13 },
			{ id: 'filename.backdrop.19', type: 'stringz', len: 13 },
			{ id: 'filename.backdrop.20', type: 'stringz', len: 13 },
			{ id: 'filename.backdrop.21', type: 'stringz', len: 11 },
			{ id: 'filename.backdrop.22', type: 'stringz', len: 12 },
			{ id: 'filename.backdrop.23', type: 'stringz', len: 13 },
			{ id: 'filename.backdrop.24', type: 'stringz', len: 13 },
			{ id: 'filename.backdrop.25', type: 'stringz', len: 13 },
			{ id: 'filename.backdrop.26', type: 'stringz', len: 13 },
			{ id: 'filename.level.1', type: 'stringz', len: 7 },
			{ id: 'filename.level.2', type: 'stringz', len: 7 },
			{ id: 'filename.level.bonus.1', type: 'stringz', len: 11 },
			{ id: 'filename.level.bonus.2', type: 'stringz', len: 11 },
			{ id: 'filename.level.3', type: 'stringz', len: 7 },
			{ id: 'filename.level.4', type: 'stringz', len: 7 },
			{ id: 'filename.level.5', type: 'stringz', len: 7 },
			{ id: 'filename.level.6', type: 'stringz', len: 7 },
			{ id: 'filename.level.7', type: 'stringz', len: 7 },
			{ id: 'filename.level.8', type: 'stringz', len: 7 },
			{ id: 'filename.level.9', type: 'stringz', len: 7 },
			{ id: 'filename.level.10', type: 'stringz', len: 8 },
			{ id: 'filename.level.11', type: 'stringz', len: 8 },
			{ id: 'filename.level.12', type: 'stringz', len: 8 },
			{ id: 'filename.level.13', type: 'stringz', len: 8 },
			{ id: 'filename.level.14', type: 'stringz', len: 8 },
			{ id: 'filename.level.15', type: 'stringz', len: 8 },
			{ id: 'filename.level.16', type: 'stringz', len: 8 },
			{ id: 'filename.music.1', type: 'stringz', len: 11 },
			{ id: 'filename.music.2', type: 'stringz', len: 12 },
			{ id: 'filename.music.3', type: 'stringz', len: 10 },
			{ id: 'filename.music.4', type: 'stringz', len: 13 },
			{ id: 'filename.music.5', type: 'stringz', len: 12 },
			{ id: 'filename.music.6', type: 'stringz', len: 12 },
			{ id: 'filename.music.7', type: 'stringz', len: 13 },
			{ id: 'filename.music.8', type: 'stringz', len: 12 },
			{ id: 'filename.music.9', type: 'stringz', len: 11 },
			{ id: 'filename.music.10', type: 'stringz', len: 10 },
			{ id: 'filename.music.11', type: 'stringz', len: 12 },
			{ id: 'filename.music.12', type: 'stringz', len: 11 },
			{ id: 'filename.music.13', type: 'stringz', len: 11 },
			{ id: 'filename.music.14', type: 'stringz', len: 11 },
			{ id: 'filename.music.15', type: 'stringz', len: 11 },
			{ id: 'filename.music.16', type: 'stringz', len: 11 },
			{ id: 'filename.music.17', type: 'stringz', len: 11 },
			{ id: 'filename.music.18', type: 'stringz', len: 11 },
			{ id: 'filename.music.19', type: 'stringz', len: 11 },
			{ id: 'msg.result.1', type: 'stringz', len: 17 },
			{ id: 'msg.result.2', type: 'stringz', len: 17 },
			{ id: 'msg.result.3', type: 'stringz', len: 17 },
			{ id: 'msg.result.4', type: 'stringz', len: 17 },
			{ id: 'msg.result.5', type: 'stringz', len: 17 },
			{ id: 'msg.result.6', type: 'stringz', len: 17 },
			{ id: 'msg.result.7', type: 'stringz', len: 17 },
			{ id: 'msg.result.8', type: 'stringz', len: 17 },
			{ id: 'msg.result.9', type: 'stringz', len: 17 },
			{ id: 'msg.result.10', type: 'stringz', len: 17 },
			{ id: 'msg.result.11', type: 'stringz', len: 17 },
			{ id: 'msg.result.12', type: 'stringz', len: 17 },
			{ id: 'msg.result.13', type: 'stringz', len: 17 },
			{ id: 'filename.tiles.actors', type: 'stringz', len: 11 },
			{ id: 'filename.tiles.story', type: 'stringz', len: 12 },
			{ id: 'unknown.1', type: 'stringz', len: 23 },
			{ id: 'filename.config', type: 'stringz', len: 11 },
			{ id: 'filename.savegame.temp', type: 'stringz', len: 11 },
			{ id: 'filename.b800.farewell', type: 'stringz', len: 11 },
			{ id: 'msg.error.no_ega', type: 'stringz', len: 24 },
			{ id: 'filename.b800.nomemory', type: 'stringz', len: 13 },
			{ id: 'filename.sounds.1', type: 'stringz', len: 11 },
			{ id: 'filename.sounds.2', type: 'stringz', len: 12 },
			{ id: 'filename.sounds.3', type: 'stringz', len: 12 },
			{ id: 'filename.tileset.player', type: 'stringz', len: 12 },
			{ id: 'filename.tileset.statusbar', type: 'stringz', len: 11 },
			{ id: 'filename.tileset.level', type: 'stringz', len: 10 },
			{ id: 'filename.tileinfo.actors', type: 'stringz', len: 13 },
			{ id: 'filename.tileinfo.player', type: 'stringz', len: 13 },
			{ id: 'filename.tileinfo.story', type: 'stringz', len: 13 },
			{ id: 'filename.gfx.font', type: 'stringz', len: 10 },
			{ id: 'filename.tileattr', type: 'stringz', len: 13 },
			{ id: 'filename.savegame.template', type: 'stringz', len: 11 },
			{ id: 'parameter.fopen.read', type: 'stringz', len: 3, desc: 'Mode parameter to fopen() function for reading files.' },
			{ id: 'parameter.fopen.write', type: 'stringz', len: 3, desc: 'Mode parameter to fopen() function for writing files.' },
			{ id: 'msg.savegame.restore.title', type: 'stringz', len: 16 },
			{ id: 'msg.savegame.restore.esc', type: 'stringz', len: 19 },
			{ id: 'msg.savegame.restore.prompt', type: 'stringz', len: 25 },
			{ id: 'msg.savegame.restore.invalid', type: 'stringz', len: 21 },
			{ id: 'msg.savegame.restore.any', type: 'stringz', len: 15 },
			{ id: 'msg.savegame.save.title', type: 'stringz', len: 14 },
			{ id: 'msg.savegame.save.reminder.line1', type: 'stringz', len: 23 },
			{ id: 'msg.savegame.save.reminder.line2', type: 'stringz', len: 21 },
			{ id: 'msg.savegame.saved', type: 'stringz', len: 12 },
			{ id: 'msg.cheat.warp.title', type: 'stringz', len: 11 },
			{ id: 'msg.cheat.warp.prompt', type: 'stringz', len: 20 },
			{ id: 'msg.help.title', type: 'stringz', len: 10 },
			{ id: 'msg.help.menuitem.1', type: 'stringz', len: 17 },
			{ id: 'msg.help.menuitem.2', type: 'stringz', len: 17 },
			{ id: 'msg.help.menuitem.3', type: 'stringz', len: 7 },
			{ id: 'msg.help.menuitem.4', type: 'stringz', len: 16 },
			{ id: 'msg.help.menuitem.5', type: 'stringz', len: 19 },
			{ id: 'msg.help.menuitem.6', type: 'stringz', len: 12 },
			{ id: 'filename.demo', type: 'stringz', len: 13 },
			{ id: 'msg.bonus.title', type: 'stringz', len: 21 },
			{ id: 'msg.bonus.multiplier', type: 'stringz', len: 9 },
			{ id: 'msg.bonus.your', type: 'stringz', len: 15 },
			{ id: 'msg.bonus.summary', type: 'stringz', len: 24 },
			{ id: 'msg.bonus.summary', type: 'stringz', len: 19 },
			{ id: 'unknown.2', type: 'stringz', len: 1 },
			{ id: 'unknown.3', type: 'stringz', len: 1 },
			{ id: 'filename.tileset.masked', type: 'stringz', len: 13 },

			{ id: 'msg.key.none',      type: 'stringz', len: 6, offset: 0x1ac84 },
			{ id: 'msg.key.esc',       type: 'stringz', len: 6 },
			{ id: 'msg.key.1',         type: 'stringz', len: 6 },
			{ id: 'msg.key.2',         type: 'stringz', len: 6 },
			{ id: 'msg.key.3',         type: 'stringz', len: 6 },
			{ id: 'msg.key.4',         type: 'stringz', len: 6 },
			{ id: 'msg.key.5',         type: 'stringz', len: 6 },
			{ id: 'msg.key.6',         type: 'stringz', len: 6 },
			{ id: 'msg.key.7',         type: 'stringz', len: 6 },
			{ id: 'msg.key.8',         type: 'stringz', len: 6 },
			{ id: 'msg.key.9',         type: 'stringz', len: 6 },
			{ id: 'msg.key.0',         type: 'stringz', len: 6 },
			{ id: 'msg.key.minus',     type: 'stringz', len: 6 },
			{ id: 'msg.key.equal',     type: 'stringz', len: 6 },
			{ id: 'msg.key.bksp',      type: 'stringz', len: 6 },
			{ id: 'msg.key.tab',       type: 'stringz', len: 6 },
			{ id: 'msg.key.q',         type: 'stringz', len: 6 },
			{ id: 'msg.key.w',         type: 'stringz', len: 6 },
			{ id: 'msg.key.e',         type: 'stringz', len: 6 },
			{ id: 'msg.key.r',         type: 'stringz', len: 6 },
			{ id: 'msg.key.t',         type: 'stringz', len: 6 },
			{ id: 'msg.key.y',         type: 'stringz', len: 6 },
			{ id: 'msg.key.u',         type: 'stringz', len: 6 },
			{ id: 'msg.key.i',         type: 'stringz', len: 6 },
			{ id: 'msg.key.o',         type: 'stringz', len: 6 },
			{ id: 'msg.key.p',         type: 'stringz', len: 6 },
			{ id: 'msg.key.[',         type: 'stringz', len: 6 },
			{ id: 'msg.key.]',         type: 'stringz', len: 6 },
			{ id: 'msg.key.enter',     type: 'stringz', len: 6 },
			{ id: 'msg.key.ctrl',      type: 'stringz', len: 6 },
			{ id: 'msg.key.a',         type: 'stringz', len: 6 },
			{ id: 'msg.key.s',         type: 'stringz', len: 6 },
			{ id: 'msg.key.d',         type: 'stringz', len: 6 },
			{ id: 'msg.key.f',         type: 'stringz', len: 6 },
			{ id: 'msg.key.g',         type: 'stringz', len: 6 },
			{ id: 'msg.key.h',         type: 'stringz', len: 6 },
			{ id: 'msg.key.j',         type: 'stringz', len: 6 },
			{ id: 'msg.key.k',         type: 'stringz', len: 6 },
			{ id: 'msg.key.l',         type: 'stringz', len: 6 },
			{ id: 'msg.key.semi',      type: 'stringz', len: 6 },
			{ id: 'msg.key.quote',     type: 'stringz', len: 6 },
			{ id: 'msg.key.tilde',     type: 'stringz', len: 6 },
			{ id: 'msg.key.lshift',    type: 'stringz', len: 6 },
			{ id: 'msg.key.backslash', type: 'stringz', len: 6 },
			{ id: 'msg.key.z',         type: 'stringz', len: 6 },
			{ id: 'msg.key.x',         type: 'stringz', len: 6 },
			{ id: 'msg.key.c',         type: 'stringz', len: 6 },
			{ id: 'msg.key.v',         type: 'stringz', len: 6 },
			{ id: 'msg.key.b',         type: 'stringz', len: 6 },
			{ id: 'msg.key.n',         type: 'stringz', len: 6 },
			{ id: 'msg.key.m',         type: 'stringz', len: 6 },
			{ id: 'msg.key.comma',     type: 'stringz', len: 6 },
			{ id: 'msg.key.period',    type: 'stringz', len: 6 },
			{ id: 'msg.key.question',  type: 'stringz', len: 6 },
			{ id: 'msg.key.rshift',    type: 'stringz', len: 6 },
			{ id: 'msg.key.pad.star',  type: 'stringz', len: 6 },
			{ id: 'msg.key.alt',       type: 'stringz', len: 6 },
			{ id: 'msg.key.space',     type: 'stringz', len: 6 },
			{ id: 'msg.key.caps',      type: 'stringz', len: 6 },
			{ id: 'msg.key.f1',        type: 'stringz', len: 6 },
			{ id: 'msg.key.f2',        type: 'stringz', len: 6 },
			{ id: 'msg.key.f3',        type: 'stringz', len: 6 },
			{ id: 'msg.key.f4',        type: 'stringz', len: 6 },
			{ id: 'msg.key.f5',        type: 'stringz', len: 6 },
			{ id: 'msg.key.f6',        type: 'stringz', len: 6 },
			{ id: 'msg.key.f7',        type: 'stringz', len: 6 },
			{ id: 'msg.key.f8',        type: 'stringz', len: 6 },
			{ id: 'msg.key.f9',        type: 'stringz', len: 6 },
			{ id: 'msg.key.f10',       type: 'stringz', len: 6 },
			{ id: 'msg.key.num',       type: 'stringz', len: 6 },
			{ id: 'msg.key.scroll',    type: 'stringz', len: 6 },
			{ id: 'msg.key.pad.home',  type: 'stringz', len: 6 },
			{ id: 'msg.key.pad.up',    type: 'stringz', len: 6 },
			{ id: 'msg.key.pad.pgup',  type: 'stringz', len: 6 },
			{ id: 'msg.key.pad.minus', type: 'stringz', len: 6 },
			{ id: 'msg.key.pad.left',  type: 'stringz', len: 6 },
			{ id: 'msg.key.pad.5',     type: 'stringz', len: 6 },
			{ id: 'msg.key.pad.right', type: 'stringz', len: 6 },
			{ id: 'msg.key.pad.plus',  type: 'stringz', len: 6 },
			{ id: 'msg.key.pad.end',   type: 'stringz', len: 6 },
			{ id: 'msg.key.pad.down',  type: 'stringz', len: 6 },
			{ id: 'msg.key.pad.pgdn',  type: 'stringz', len: 6 },
			{ id: 'msg.key.pad.ins',   type: 'stringz', len: 6 },
			{ id: 'msg.key.pad.del',   type: 'stringz', len: 6 },
			{ id: 'msg.key.pad.sysrq', type: 'stringz', len: 6 },
			{ id: 'msg.key.fn',        type: 'stringz', len: 6 },
			{ id: 'msg.key.compose',   type: 'stringz', len: 6 },
			{ id: 'msg.key.f11',       type: 'stringz', len: 6 },
			{ id: 'msg.key.f12',       type: 'stringz', len: 6 },
			{ id: 'msg.key.extra',     type: 'stringz', len: 6 },
		];
	}
};
