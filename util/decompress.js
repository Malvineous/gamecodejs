/*
 * Decompress an .exe if it is compressed, otherwise return it unchanged.
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

import { cmp_lzexe } from '@camoto/gamecomp';

/**
 * Decompress the executable, if it is compressed.
 */
export default function decompress(content)
{
	let output = content;

	if (cmp_lzexe.identify(content).valid) {
		output = cmp_lzexe.reveal(content);
	}

	return output;
}
