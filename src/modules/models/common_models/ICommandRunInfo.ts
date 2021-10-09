/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import IPluginInfo from "./IPluginInfo";






/**
 * The information about currently running SFDMU command
 */
export default interface ICommandRunInfo {

    /**
     * --sourceusername command flag 
     */
    sourceUsername: string,

    /**
     * --targetusername command flag
     */
    targetUsername: string,

    /**
     * --apiversion command flag
     */
    apiVersion: string,

    /**
     * the directory location where the Plugin was started
     */
    readonly basePath: string,
    
    /**
     * the information about the Plugin and the framework
     */
    readonly pinfo: IPluginInfo
}
