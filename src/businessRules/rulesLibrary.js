/**
 * @file rulesLibrary.js
 * @module rulesLibrary
 * @description Contains all of the plugin defined business rules as a map between function names and function calls.
 * @requires module:pluginTwoRules
 * @requires module:plugin.business.constants
 * @requires module:plugin.constants
 * @requires module:pluginData
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2023/01/16
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import pluginTwoRules from './rules/pluginTwoRules.js';
import * as plg_biz from '../constants/plugin.business.constants.js';
import * as plg from '../constants/plugin.constants.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// plugins.plugin-two.businessRules.rulesLibrary
const namespacePrefix = wrd.cplugins + bas.cDot + plg.cpluginName + bas.cDot + sys.cbusinessRules + bas.cDot + baseFileName + bas.cDot;

const initPluginRulesLibrary = function() {
  // let functionName = initPluginRulesLibrary.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  let returnData = {};
  returnData[sys.cbusinessRules] = {};
  returnData[sys.cbusinessRules] = {
    // Business Rules
    // ***********************************************************************
    // BEGIN pluginTwo category
    // ***********************************************************************
    [plg_biz.cpluginTwoRule01]: (inputData, inputMetaData) => pluginTwoRules.pluginTwoRule01(inputData, inputMetaData),
    [plg_biz.cpluginTwoRule02]: (inputData, inputMetaData) => pluginTwoRules.pluginTwoRule02(inputData, inputMetaData),
    // ***********************************************************************
    // END pluginTwo category
    // ***********************************************************************
  };
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

export default {
  initPluginRulesLibrary
};