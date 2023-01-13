/**
 * @file dataBroker.js
 * @module dataBroker
 * @description Contains middle or low-level data management functions.
 * @requires module:plugin.constants
 * @requires module:pluginData
 * @requires {@link https://www.npmjs.com/package/@haystacks/async|@haystacks/async}
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2023/01/13
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as plg from '../constants/plugin.constants.js';
import D from '../structures/pluginData.js';
// External imports
import haystacks from '@haystacks/async';
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, cfg, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// plugins.plugin-two.brokers.dataBroker.
const namespacePrefix = wrd.cplugins + bas.cDot + plg.cpluginName + bas.cDot + wrd.cbrokers + bas.cDot + baseFileName + bas.cDot;

/**
 * @function initData
 * @description Initialize the data that will be used by
 * the plugin to load al of the plugin context and export it to the Haystacks platform.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2023/01/13
 */
async function initData() {
  // let functionName = initData.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  D.data = {}; // Make sure it's initialized, should have been done when we called import above.
  // console.log(`END ${namespacePrefix}${functionName} function`);
}

/**
 * @function loadConfigPath
 * @description Calls the Haystacks platform to load the configuration data, parse it and return it as a JSON objet.
 * @param {string} configPath The path to the plugin configuration data that must be loaded.
 * @return {object} A JSON object that contains all of the configuration data loaded and parsed from the specified path.
 * @author Seth Hollingsead
 * @date 2023/01/13
 */
async function loadConfigData(configPath) {
  // let functionName = loadConfigData.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`configPath is: ${configPath}`);
  let returnData = {};
  // NOTE: This is the first call back to Haystacks to load data,
  // We will need to pass the Haystacks data back nto this instance of Haystacks before we try to call it to get it to do any kind of work.
  if (await haystacks.accouterFramework(D[wrd.cdata][cfg.chaystacksContextObject]) === true) {
    // console.log('Done loading the Haystacks dependency data, now try and use Haystacks to load the config data, from the configPath.');
    returnData = await haystacks.loadPlugnResourceData(wrd.cconfiguration, configPath);
  } else {
    // FATAL ERROR: Unable to oad the specified plugn config path, Haystacks framework data dependency failure:
    console.log(msg.cloadConfigDataErrorMessage01 + configPath);
  }
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

/**
 * @function loadCommandAliasesData
 * @description Loads the plugin command aliases data by calling the Haystacks platform to
 * load and parse the command aliases data from the specified path.
 * @param {string} aliasesPath The fully qualified path to the command aliases folder with all of the command aliases data for the plugin.
 * @return {object} A JSON object that contains all of the command aliases data loaded and parsed from the specified path.
 * @author Seth Hollingsead
 * @date 2023/01/13
 */
async function loadCommandAliasesData(aliasesPath) {
  // let functionName = loadCommandAliasesData.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`aliasesPath is: ${aliasesPath}`);
  let returnData = {};
  returnData = await haystacks.loadPlugnResourceData(wrd.ccommand + wrd.cAliases, aliasesPath);
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

/**
 * @function loadWorkflowsData
 * @description Loads the plugin workflows data by calling the Haystacks platform to
 * load and parse the workflows data from the specified path.
 * @param {string} workflowsPath The fully qualified path to the workflows folder with all of the workflows data for the plugin.
 * @return {object} A JSON object that contains all of the workflows data loaded and parsed from the specified path.
 * @author Seth Hollingsead
 * @date 2022/01/13
 */
async function loadWorkflowsData(workflowsPath) {
  // let functionName = loadWorkflowsData.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`workflowsPath is: ${workflowsPath}`);
  let returnData = {};
  returnData = await haystacks.loadPlugnResourceData(wrd.cworkfows, workflowsPath);
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

export default {
  initData,
  loadConfigData,
  loadCommandAliasesData,
  loadWorkflowsData
}