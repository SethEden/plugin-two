/**
 * @file plugin.constants.js
 * @module plugin.constants
 * @description Contains many re-usable plugin constants.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Seth Hollingsead
 * @date 2023/01/16
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// External imports
import hayConst from '@haystacks/constants';
const {bas, num, sys, wrd} = hayConst;

// Plugin constants
export const cpluginName = wrd.cplugin + bas.cDash + num.ctwo; // plugin-two
export const cPluginDevPath = bas.cFowardSlash + wrd.csrc + bas.cForwardSlash; // /src/
export const cPluginProdPath = bas.cForwardSlash + wrd.cbin + bas.cForwardSlash; // /bin/
export const cResourcesCommonPath = wrd.cresources + bas.cForwardSlash; // resources/
export const cCommandsCommonPath = wrd.ccommands + bas.cForwardSlash; // commands/
export const cConstantsPath = wrd.cconstants + bas.cForwardSlash; // constants/
export const cConfigurationCommonPath = wrd.cconfiguration + bas.cForwardSlash; // configuration/
export const cWorkflowsCommonPath = wrd.cworkflows + bas.cForwardSlash; // workflows/

// Full Dev paths
export const cFullDevResourcesPath = cPluginDevPath + cResourcesCommonPath; // /src/resources/
export const cFullDevCommandsPath = cFullDevResourcesPath + cCommandsCommonPath; // /src/resources/commands/
export const cFullDevConstantsPath = cPluginDevPath + cConstantsPath; // /src/constants/
export const cFullDvConfigurationPath = cFullDevResourcesPath + cConfigurationCommonPath; // /src/resources/configuration/
export const cFullDevWorkflowsPath = cFullDevResourcesPath + cWorkflowsCommonPath; // /src/resources/workflows/
export const cmetaDataDevPath = cFullDevResourcesPath + sys.cmetaDatadotJson; // /src/resources/metaData.json

// Full Prod paths
export const cFullProdResourcesPath = cPluginProdPath + cResourcesCommonPath; // /bn/resources/
export const cFullProdCommandsPath = cFullProdResourcesPath + cCommandsCommonPath; // /bin/resources/commands/
export const cFullProdConstantsPath = cPluginProdPath + cConstantsPath; // /bin/constants/
export const cFullProdConfigurationPath = cFullProdResourcesPath + cConfigurationCommonPath; // /bin/resources/configuration/
export const cFullProdWorkflowsPath = cFullProdResourcesPath + cWorkflowsCommonPath; // /bin/resources/workflows/
export const cmetaDataProdPath = cFullProdResourcesPath + sys.cmetaDatadotJson; // /bin/resources/metaData.json