/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/autoProvisioningSettingsMappers";
import * as Parameters from "../models/parameters";
import { SecurityCenterContext } from "../securityCenterContext";

/** Class representing a AutoProvisioningSettings. */
export class AutoProvisioningSettings {
  private readonly client: SecurityCenterContext;

  /**
   * Create a AutoProvisioningSettings.
   * @param {SecurityCenterContext} client Reference to the service client.
   */
  constructor(client: SecurityCenterContext) {
    this.client = client;
  }

  /**
   * Exposes the auto provisioning settings of the subscriptions
   * @param [options] The optional parameters
   * @returns Promise<Models.AutoProvisioningSettingsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.AutoProvisioningSettingsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.AutoProvisioningSettingList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AutoProvisioningSettingList>): void;
  list(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.AutoProvisioningSettingList>): Promise<Models.AutoProvisioningSettingsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.AutoProvisioningSettingsListResponse>;
  }

  /**
   * Details of a specific setting
   * @param settingName Auto provisioning setting key
   * @param [options] The optional parameters
   * @returns Promise<Models.AutoProvisioningSettingsGetResponse>
   */
  get(settingName: string, options?: msRest.RequestOptionsBase): Promise<Models.AutoProvisioningSettingsGetResponse>;
  /**
   * @param settingName Auto provisioning setting key
   * @param callback The callback
   */
  get(settingName: string, callback: msRest.ServiceCallback<Models.AutoProvisioningSetting>): void;
  /**
   * @param settingName Auto provisioning setting key
   * @param options The optional parameters
   * @param callback The callback
   */
  get(settingName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AutoProvisioningSetting>): void;
  get(settingName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.AutoProvisioningSetting>): Promise<Models.AutoProvisioningSettingsGetResponse> {
    return this.client.sendOperationRequest(
      {
        settingName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.AutoProvisioningSettingsGetResponse>;
  }

  /**
   * Details of a specific setting
   * @param settingName Auto provisioning setting key
   * @param setting Auto provisioning setting key
   * @param [options] The optional parameters
   * @returns Promise<Models.AutoProvisioningSettingsCreateResponse>
   */
  create(settingName: string, setting: Models.AutoProvisioningSetting, options?: msRest.RequestOptionsBase): Promise<Models.AutoProvisioningSettingsCreateResponse>;
  /**
   * @param settingName Auto provisioning setting key
   * @param setting Auto provisioning setting key
   * @param callback The callback
   */
  create(settingName: string, setting: Models.AutoProvisioningSetting, callback: msRest.ServiceCallback<Models.AutoProvisioningSetting>): void;
  /**
   * @param settingName Auto provisioning setting key
   * @param setting Auto provisioning setting key
   * @param options The optional parameters
   * @param callback The callback
   */
  create(settingName: string, setting: Models.AutoProvisioningSetting, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AutoProvisioningSetting>): void;
  create(settingName: string, setting: Models.AutoProvisioningSetting, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.AutoProvisioningSetting>): Promise<Models.AutoProvisioningSettingsCreateResponse> {
    return this.client.sendOperationRequest(
      {
        settingName,
        setting,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.AutoProvisioningSettingsCreateResponse>;
  }

  /**
   * Exposes the auto provisioning settings of the subscriptions
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AutoProvisioningSettingsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.AutoProvisioningSettingsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AutoProvisioningSettingList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AutoProvisioningSettingList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.AutoProvisioningSettingList>): Promise<Models.AutoProvisioningSettingsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.AutoProvisioningSettingsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/autoProvisioningSettings",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AutoProvisioningSettingList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/autoProvisioningSettings/{settingName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.settingName0
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AutoProvisioningSetting
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/autoProvisioningSettings/{settingName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.settingName0
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "setting",
    mapper: {
      ...Mappers.AutoProvisioningSetting,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AutoProvisioningSetting
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AutoProvisioningSettingList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
