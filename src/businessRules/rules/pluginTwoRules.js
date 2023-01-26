/**
 * @file pluginTwoRules.js
 * @module pluginTwoRules
 * @description Contains all of the business rules for the pluginTwo plugin.
 * @requires module:plugin.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/async|@haystacks/async}
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2023/01/16
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as plg from '../../constants/plugin.constants.js';
// External imports
import haystacks from '@haystacks/async';
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, msg, num, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// plugins.plugin-two.businessRules.rules.pluginTwoRules.
const namespacePrefix = wrd.cplugins + bas.cDot + plg.cpluginName + bas.cDot + sys.cbusinessRules + bas.cDot +
  wrd.crules + bas.cDot + baseFileName + bas.cDot;

/**
 * @function pluginTwoRule01
 * @description Outputs pluginTwoRule01,
 * to verify that the business rule has been loaded when the plugin was loaded.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The string "pluginTwoRules.pluginTwoRule01".
 * @author Seth Hollingsead
 * @date 2023/01/16
 */
async function pluginTwoRule01(inputData, inputMetaData) {
  let functionName = pluginTwoRule01.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`inputData is: ${inputData}`);
  // console.log(`inputMetaData is: ${inputMetaData}`);
  let returnData = '';
  returnData = wrd.cplugin + num.cTwo + wrd.cRule + num.c01;
  console.log(namespacePrefix + returnData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + returnData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  // console.log(`returnData is: ${returnData}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

/**
 * @function pluginTwoRule02
 * @description Outputs pluginTwoRule02,
 * to verify that the business rule has been loaded when the plugin was loaded.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The string "pluginTwoRules.pluginTwoRule02".
 * @author Seth Hollingsead
 * @date 2023/01/16
 */
async function pluginTwoRule02(inputData, inputMetaData) {
  let functionName = pluginTwoRule02.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`inputData is: ${inputData}`);
  // console.log(`inputMetaData is: ${inputMetaData}`);
  let returnData = '';
  returnData = wrd.cplugin + num.cTwo + wrd.cRule + num.c02;
  console.log(namespacePrefix + returnData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + returnData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  // console.log(`returnData is: ${returnData}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

export default {
  pluginTwoRule01,
  pluginTwoRule02
};