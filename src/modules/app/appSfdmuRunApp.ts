/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */


import ISfdmuCommand from "../models/common_models/ISfdxCommand";
import { RunCommand } from "../commands_processors/runCommand";
import AppJsonMessages from './appJsonMessages';
import AppConsoleLogger from './appConsoleUxLogger';

import * as path from 'path';
import { IRunProcess } from "../commands_processors/IRunProcess";
import { IResourceBundle, IUxLogger } from "../components/common_components/logger";
import ISfdmuStatics from "../models/common_models/ISfdmuStatics";
import RunCommandExecutor from "../commands_processors/runCommandExecutor";
import { Common } from "../components/common_components/common";
import IAppSfdmuRunModuleArgs from "./IAppSfdmuRunModuleArgs";

const root = path.resolve(__dirname, '../../../');
const commandMessages = new AppJsonMessages(root, "run");
const resources = new AppJsonMessages(root, "resources");

export default class AppSfdmuRunApp implements IRunProcess {

    argv: Array<string>;
    exportJson: string;

    cmd: ISfdmuCommand;
    command: RunCommand;
    statics: ISfdmuStatics;

    exitProcess: boolean;

    m_ux: IUxLogger;
    m_flags: any = {};

    commandMessages: IResourceBundle;
    resources: IResourceBundle;

    constructor(args: IAppSfdmuRunModuleArgs) {

        this.m_ux = args.logger || new AppConsoleLogger();
        this.argv = args.argv.splice(2);

        this.exportJson = args.exportJson;

        this.commandMessages = args.commandMessages || commandMessages;
        this.resources = args.resources || resources;

        this.exitProcess = args.exitProcess;


        let flags = Common.parseArgv(...this.argv);
        Object.assign(this.m_flags, flags);

        this.statics = {
            name: "Run",
            plugin: {
                name: "sfdmu",
                root
            }
        };
        this.cmd = {
            statics: this.statics,
            argv: this.argv
        };
    }

    async runCommand(): Promise<any> {
        await RunCommandExecutor.execute(this);
    }

}
