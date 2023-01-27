/**
 * @file chiefRules.js
 * @module chiefRules
 * @description Contains all of the top-level functions to manage the business rules for the plugin.
 * @requires module:ruleBroker
 * @requires module:plugin.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2023/01/20
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import ruleBroker from '../brokers/ruleBroker.js';
import * as plg from '../constants/plugin.constants.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, msg, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// plugins.plugin-two.controllers.chiefRules.
const namespacePrefix = wrd.cplugins + bas.cDot + plg.cpluginName + bas.cDot + wrd.ccontrollers + bas.cDot + baseFileName + bas.cDot;

/**
 * @function initBusinessRules
 * @description Initializes all of the business rules for the plugin,
 * so they can be loaded by the Haystacks platform and used by the application.
 * @return {object} A JSON object that contains an array of function objects that map function name to function call for all the business rules in the plugin.
 * @author Seth Hollingsead
 * @date 2023/01/20
 */
async function initBusinessRules() {
  // let functionName = initBusinessRules.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  let returnData = {};
  returnData = await ruleBroker.bootStrapBusinessRules();
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

export default {
  initBusinessRules
};