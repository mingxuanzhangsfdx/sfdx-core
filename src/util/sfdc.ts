/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * Converts an 18 character Salesforce ID to 15 characters.
 *
 * @param id The id to convert.
 */
export function trimTo15(id: string): string;
export function trimTo15(id?: undefined): undefined;
export function trimTo15(id: string | undefined): string | undefined;
export function trimTo15(id: string | undefined): string | undefined {
  if (!id) {
    return undefined;
  }
  if (id.length && id.length > 15) {
    return id.substring(0, 15);
  }
  return id;
}

/**
 * Tests whether an API version matches the format `i.0`.
 *
 * @param value The API version as a string.
 */
export const validateApiVersion = (value: string): boolean => value == null || /^[1-9]\d\.0$/.test(value);

/**
 * Tests whether an email matches the format `me@my.org`
 *
 * @param value The email as a string.
 */
export const validateEmail = (value: string): boolean => /^[^.][^@]*@[^.]+(\.[^.\s]+)+$/.test(value);

/**
 * Tests whether a Salesforce ID is in the correct format, a 15- or 18-character length string with only letters and numbers
 *
 * @param value The ID as a string.
 */
export const validateSalesforceId = (value: string): boolean =>
  /[a-zA-Z0-9]{18}|[a-zA-Z0-9]{15}/.test(value) && (value.length === 15 || value.length === 18);

/**
 * Tests whether a path is in the correct format; the value doesn't include the characters "[", "]", "?", "<", ">", "?", "|"
 *
 * @param value The path as a string.
 */
export const validatePathDoesNotContainInvalidChars = (value: string): boolean =>
  // eslint-disable-next-line no-useless-escape
  !/[\["\?<>\|\]]+/.test(value);

export const accessTokenRegex = /(00D\w{12,15})![.\w]*/;
export const sfdxAuthUrlRegex =
  /force:\/\/([a-zA-Z0-9._-]+):([a-zA-Z0-9._-]*):([a-zA-Z0-9._-]+={0,2})@([a-zA-Z0-9._-]+)/;

/**
 * Tests whether a given string is an access token
 *
 * @param value
 */
export const matchesAccessToken = (value: string): boolean => accessTokenRegex.test(value);
