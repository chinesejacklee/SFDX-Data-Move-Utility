/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */


import { MigrationJobTask, TaskOrgData } from "../../../modules/models";
import { DATA_MEDIA_TYPE } from "../../../modules/components/common_components/enumerations";
import { ISfdmuRunCustomAddonTaskData } from "../../modules/sfdmu-run/custom-addons/package";

export default class SfdmuRunAddonTaskData implements ISfdmuRunCustomAddonTaskData {

    #taskOrgData: TaskOrgData;

    constructor(taskOrgData: TaskOrgData) {
        this.#taskOrgData = taskOrgData;
    }

    get task(): MigrationJobTask {
        return this.#taskOrgData.task;
    }

    get mediaType(): DATA_MEDIA_TYPE {
        return this.#taskOrgData.org.media;
    }

    get sObjectName(): string {
        return this.#taskOrgData.task.sObjectName;
    }

    get isSource(): boolean {
        return this.#taskOrgData.isSource;
    }

    get idRecordsMap(): Map<string, any> {
        return this.#taskOrgData.idRecordsMap;
    }

    get extIdRecordsMap(): Map<string, string> {
        return this.#taskOrgData.extIdRecordsMap;
    }

    get records(): any[] {
        return this.#taskOrgData.records;
    }
}