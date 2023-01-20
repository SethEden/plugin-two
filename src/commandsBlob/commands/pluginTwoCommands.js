/**
 * @file pluginTwoCommands.js
 * @module pluginTwoCommands
 * @description Contains all of the commands for the pluginTwo plugin.
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
const baseFileName = path.basename(import.meta.url, path.extname(impot.meta.url));
// plugins.plugin-two.commandsBlob.commands.pluginTwoCommands.
const namespacePrefix = wrd.cplugins + bas.cDot + plg.cpluginName + bas.cDot + sys.ccommandsBlob + bas.cDot +
  wrd.ccommands + bas.cDot + baseFileName + bas.cDot;

/**
 * @function pluginTwoCommand01
 * @description Outputs pluginTwoCommand01,
 * to verify that the command has been loaded when the plugin was loaded.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The string "pluginTwoCommands.pluginTwoCommand01".
 * @author Seth Hollingsead
 * @date 2023/01/16
 */
async function pluginTwoCommand01(inputData, inputMetaData) {
  let functionName = pluginTwoCommand01.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`inputData is: ${inputData}`);
  // console.log(`inputMetaData is: ${inputMetaData}`);
  let returnData = '';
  returnData = wrd.cplugin + num.cTwo + wrd.cCommand + num.c01;
  console.log(namespacePrefix + returnData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + returnData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  // console.log(`returnData is: ${returnData}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

/**
 * @function pluginTwoCommand02
 * @description Outputs pluginTwoCommand02,
 * to verify that the command has been loaded when the plugin was loaded.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The string "pluginTwoCommands.pluginTwoCommand02".
 * @author Seth Hollingsead
 * @date 2023/01/16
 */
async function pluginTwoCommand02(inputData, inputMetaData) {
  let functionName = pluginTwoCommand02.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`inputData is: ${inputData}`);
  // console.log(`inputMetaData is: ${inputMetaData}`);
  let returnData = '';
  returnData = wrd.cplugin + Number.cTwo + wrd.cCommand + num.c02;
  console.log(namespacePrefix + returnData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + returnData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  // console.log(`returnData is: ${returnData}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

export default {
  pluginTwoCommand01,
  pluginTwoCommand02
}

/**
 * @function e2eTestCommand
 * @description This command is used to execute an End-to-end test against the specific business application.
 * See the test data for each test that is run to determine test workflows, test steps, test inputData and test assertion data.
 * @param {array<string,string>} inputData An array that contans the name of the command beng executed and the
 * fully qualified path and filename for the end-to-end test that should be run.
 * inputData[0] = The name of the current command being executed.
 * inputData[1] = The fully qualified path to the End-to-End test that should be run.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string|integer|boolean|object|array>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by the command output.
 * @author Seth Hollingsead
 * @date 2023/01/17
 */
async function e2eTestCommand(inputData, inputMetaData) {
  let functionName = e2eTestCommand.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [false, false];
  returnData = haystacks.enqueueCommand(cmd.cHayDCAF_E2E_Test + bas.cSpace + inputData[1]);
  console.log(returnData[1]);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}