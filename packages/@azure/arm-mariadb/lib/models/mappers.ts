/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "ms-rest-azure-js";
import * as msRest from "ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const ProxyResource: msRest.CompositeMapper = {
  serializedName: "ProxyResource",
  type: {
    name: "Composite",
    className: "ProxyResource",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TrackedResource: msRest.CompositeMapper = {
  serializedName: "TrackedResource",
  type: {
    name: "Composite",
    className: "TrackedResource",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      location: {
        required: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const StorageProfile: msRest.CompositeMapper = {
  serializedName: "StorageProfile",
  type: {
    name: "Composite",
    className: "StorageProfile",
    modelProperties: {
      backupRetentionDays: {
        serializedName: "backupRetentionDays",
        type: {
          name: "Number"
        }
      },
      geoRedundantBackup: {
        serializedName: "geoRedundantBackup",
        type: {
          name: "String"
        }
      },
      storageMB: {
        serializedName: "storageMB",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ServerPropertiesForCreate: msRest.CompositeMapper = {
  serializedName: "ServerPropertiesForCreate",
  type: {
    name: "Composite",
    polymorphicDiscriminator: {
      serializedName: "createMode",
      clientName: "createMode"
    },
    uberParent: "ServerPropertiesForCreate",
    className: "ServerPropertiesForCreate",
    modelProperties: {
      version: {
        serializedName: "version",
        type: {
          name: "String"
        }
      },
      sslEnforcement: {
        serializedName: "sslEnforcement",
        type: {
          name: "Enum",
          allowedValues: [
            "Enabled",
            "Disabled"
          ]
        }
      },
      storageProfile: {
        serializedName: "storageProfile",
        type: {
          name: "Composite",
          className: "StorageProfile"
        }
      },
      createMode: {
        required: true,
        serializedName: "createMode",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServerPropertiesForDefaultCreate: msRest.CompositeMapper = {
  serializedName: "Default",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ServerPropertiesForCreate.type.polymorphicDiscriminator,
    uberParent: "ServerPropertiesForCreate",
    className: "ServerPropertiesForDefaultCreate",
    modelProperties: {
      ...ServerPropertiesForCreate.type.modelProperties,
      administratorLogin: {
        required: true,
        serializedName: "administratorLogin",
        type: {
          name: "String"
        }
      },
      administratorLoginPassword: {
        required: true,
        serializedName: "administratorLoginPassword",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServerPropertiesForRestore: msRest.CompositeMapper = {
  serializedName: "PointInTimeRestore",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ServerPropertiesForCreate.type.polymorphicDiscriminator,
    uberParent: "ServerPropertiesForCreate",
    className: "ServerPropertiesForRestore",
    modelProperties: {
      ...ServerPropertiesForCreate.type.modelProperties,
      sourceServerId: {
        required: true,
        serializedName: "sourceServerId",
        type: {
          name: "String"
        }
      },
      restorePointInTime: {
        required: true,
        serializedName: "restorePointInTime",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const ServerPropertiesForGeoRestore: msRest.CompositeMapper = {
  serializedName: "GeoRestore",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ServerPropertiesForCreate.type.polymorphicDiscriminator,
    uberParent: "ServerPropertiesForCreate",
    className: "ServerPropertiesForGeoRestore",
    modelProperties: {
      ...ServerPropertiesForCreate.type.modelProperties,
      sourceServerId: {
        required: true,
        serializedName: "sourceServerId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Sku: msRest.CompositeMapper = {
  serializedName: "Sku",
  type: {
    name: "Composite",
    className: "Sku",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      tier: {
        serializedName: "tier",
        type: {
          name: "String"
        }
      },
      capacity: {
        serializedName: "capacity",
        constraints: {
          InclusiveMinimum: 0
        },
        type: {
          name: "Number"
        }
      },
      size: {
        serializedName: "size",
        type: {
          name: "String"
        }
      },
      family: {
        serializedName: "family",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Server: msRest.CompositeMapper = {
  serializedName: "Server",
  type: {
    name: "Composite",
    className: "Server",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      administratorLogin: {
        serializedName: "properties.administratorLogin",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "properties.version",
        type: {
          name: "String"
        }
      },
      sslEnforcement: {
        serializedName: "properties.sslEnforcement",
        type: {
          name: "Enum",
          allowedValues: [
            "Enabled",
            "Disabled"
          ]
        }
      },
      userVisibleState: {
        serializedName: "properties.userVisibleState",
        type: {
          name: "String"
        }
      },
      fullyQualifiedDomainName: {
        serializedName: "properties.fullyQualifiedDomainName",
        type: {
          name: "String"
        }
      },
      earliestRestoreDate: {
        serializedName: "properties.earliestRestoreDate",
        type: {
          name: "DateTime"
        }
      },
      storageProfile: {
        serializedName: "properties.storageProfile",
        type: {
          name: "Composite",
          className: "StorageProfile"
        }
      }
    }
  }
};

export const ServerForCreate: msRest.CompositeMapper = {
  serializedName: "ServerForCreate",
  type: {
    name: "Composite",
    className: "ServerForCreate",
    modelProperties: {
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      properties: {
        required: true,
        serializedName: "properties",
        type: {
          name: "Composite",
          polymorphicDiscriminator: {
            serializedName: "createMode",
            clientName: "createMode"
          },
          uberParent: "ServerPropertiesForCreate",
          className: "ServerPropertiesForCreate"
        }
      },
      location: {
        required: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ServerUpdateParameters: msRest.CompositeMapper = {
  serializedName: "ServerUpdateParameters",
  type: {
    name: "Composite",
    className: "ServerUpdateParameters",
    modelProperties: {
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      storageProfile: {
        serializedName: "properties.storageProfile",
        type: {
          name: "Composite",
          className: "StorageProfile"
        }
      },
      administratorLoginPassword: {
        serializedName: "properties.administratorLoginPassword",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "properties.version",
        type: {
          name: "String"
        }
      },
      sslEnforcement: {
        serializedName: "properties.sslEnforcement",
        type: {
          name: "Enum",
          allowedValues: [
            "Enabled",
            "Disabled"
          ]
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const FirewallRule: msRest.CompositeMapper = {
  serializedName: "FirewallRule",
  type: {
    name: "Composite",
    className: "FirewallRule",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      startIpAddress: {
        required: true,
        serializedName: "properties.startIpAddress",
        constraints: {
          Pattern: /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/
        },
        type: {
          name: "String"
        }
      },
      endIpAddress: {
        required: true,
        serializedName: "properties.endIpAddress",
        constraints: {
          Pattern: /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/
        },
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualNetworkRule: msRest.CompositeMapper = {
  serializedName: "VirtualNetworkRule",
  type: {
    name: "Composite",
    className: "VirtualNetworkRule",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      virtualNetworkSubnetId: {
        required: true,
        serializedName: "properties.virtualNetworkSubnetId",
        type: {
          name: "String"
        }
      },
      ignoreMissingVnetServiceEndpoint: {
        serializedName: "properties.ignoreMissingVnetServiceEndpoint",
        type: {
          name: "Boolean"
        }
      },
      state: {
        readOnly: true,
        serializedName: "properties.state",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Database: msRest.CompositeMapper = {
  serializedName: "Database",
  type: {
    name: "Composite",
    className: "Database",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      charset: {
        serializedName: "properties.charset",
        type: {
          name: "String"
        }
      },
      collation: {
        serializedName: "properties.collation",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Configuration: msRest.CompositeMapper = {
  serializedName: "Configuration",
  type: {
    name: "Composite",
    className: "Configuration",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      value: {
        serializedName: "properties.value",
        type: {
          name: "String"
        }
      },
      description: {
        readOnly: true,
        serializedName: "properties.description",
        type: {
          name: "String"
        }
      },
      defaultValue: {
        readOnly: true,
        serializedName: "properties.defaultValue",
        type: {
          name: "String"
        }
      },
      dataType: {
        readOnly: true,
        serializedName: "properties.dataType",
        type: {
          name: "String"
        }
      },
      allowedValues: {
        readOnly: true,
        serializedName: "properties.allowedValues",
        type: {
          name: "String"
        }
      },
      source: {
        serializedName: "properties.source",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationDisplay: msRest.CompositeMapper = {
  serializedName: "OperationDisplay",
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        readOnly: true,
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        readOnly: true,
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        readOnly: true,
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      description: {
        readOnly: true,
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Operation: msRest.CompositeMapper = {
  serializedName: "Operation",
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      display: {
        readOnly: true,
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      },
      origin: {
        readOnly: true,
        serializedName: "origin",
        type: {
          name: "String"
        }
      },
      properties: {
        readOnly: true,
        serializedName: "properties",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Object"
            }
          }
        }
      }
    }
  }
};

export const OperationListResult: msRest.CompositeMapper = {
  serializedName: "OperationListResult",
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      }
    }
  }
};

export const LogFile: msRest.CompositeMapper = {
  serializedName: "LogFile",
  type: {
    name: "Composite",
    className: "LogFile",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      sizeInKB: {
        serializedName: "properties.sizeInKB",
        type: {
          name: "Number"
        }
      },
      createdTime: {
        readOnly: true,
        serializedName: "properties.createdTime",
        type: {
          name: "DateTime"
        }
      },
      lastModifiedTime: {
        readOnly: true,
        serializedName: "properties.lastModifiedTime",
        type: {
          name: "DateTime"
        }
      },
      logFileType: {
        serializedName: "properties.type",
        type: {
          name: "String"
        }
      },
      url: {
        readOnly: true,
        serializedName: "properties.url",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PerformanceTierServiceLevelObjectives: msRest.CompositeMapper = {
  serializedName: "PerformanceTierServiceLevelObjectives",
  type: {
    name: "Composite",
    className: "PerformanceTierServiceLevelObjectives",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      edition: {
        serializedName: "edition",
        type: {
          name: "String"
        }
      },
      vCore: {
        serializedName: "vCore",
        type: {
          name: "Number"
        }
      },
      hardwareGeneration: {
        serializedName: "hardwareGeneration",
        type: {
          name: "String"
        }
      },
      maxBackupRetentionDays: {
        serializedName: "maxBackupRetentionDays",
        type: {
          name: "Number"
        }
      },
      minBackupRetentionDays: {
        serializedName: "minBackupRetentionDays",
        type: {
          name: "Number"
        }
      },
      maxStorageMB: {
        serializedName: "maxStorageMB",
        type: {
          name: "Number"
        }
      },
      minStorageMB: {
        serializedName: "minStorageMB",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const PerformanceTierProperties: msRest.CompositeMapper = {
  serializedName: "PerformanceTierProperties",
  type: {
    name: "Composite",
    className: "PerformanceTierProperties",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      serviceLevelObjectives: {
        serializedName: "serviceLevelObjectives",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PerformanceTierServiceLevelObjectives"
            }
          }
        }
      }
    }
  }
};

export const NameAvailabilityRequest: msRest.CompositeMapper = {
  serializedName: "NameAvailabilityRequest",
  type: {
    name: "Composite",
    className: "NameAvailabilityRequest",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NameAvailability: msRest.CompositeMapper = {
  serializedName: "NameAvailability",
  type: {
    name: "Composite",
    className: "NameAvailability",
    modelProperties: {
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      nameAvailable: {
        serializedName: "nameAvailable",
        type: {
          name: "Boolean"
        }
      },
      reason: {
        serializedName: "reason",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServerSecurityAlertPolicy: msRest.CompositeMapper = {
  serializedName: "ServerSecurityAlertPolicy",
  type: {
    name: "Composite",
    className: "ServerSecurityAlertPolicy",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      state: {
        required: true,
        serializedName: "properties.state",
        type: {
          name: "Enum",
          allowedValues: [
            "Enabled",
            "Disabled"
          ]
        }
      },
      disabledAlerts: {
        serializedName: "properties.disabledAlerts",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      emailAddresses: {
        serializedName: "properties.emailAddresses",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      emailAccountAdmins: {
        serializedName: "properties.emailAccountAdmins",
        type: {
          name: "Boolean"
        }
      },
      storageEndpoint: {
        serializedName: "properties.storageEndpoint",
        type: {
          name: "String"
        }
      },
      storageAccountAccessKey: {
        serializedName: "properties.storageAccountAccessKey",
        type: {
          name: "String"
        }
      },
      retentionDays: {
        serializedName: "properties.retentionDays",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ServerListResult: msRest.CompositeMapper = {
  serializedName: "ServerListResult",
  type: {
    name: "Composite",
    className: "ServerListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Server"
            }
          }
        }
      }
    }
  }
};

export const FirewallRuleListResult: msRest.CompositeMapper = {
  serializedName: "FirewallRuleListResult",
  type: {
    name: "Composite",
    className: "FirewallRuleListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FirewallRule"
            }
          }
        }
      }
    }
  }
};

export const VirtualNetworkRuleListResult: msRest.CompositeMapper = {
  serializedName: "VirtualNetworkRuleListResult",
  type: {
    name: "Composite",
    className: "VirtualNetworkRuleListResult",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualNetworkRule"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DatabaseListResult: msRest.CompositeMapper = {
  serializedName: "DatabaseListResult",
  type: {
    name: "Composite",
    className: "DatabaseListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Database"
            }
          }
        }
      }
    }
  }
};

export const ConfigurationListResult: msRest.CompositeMapper = {
  serializedName: "ConfigurationListResult",
  type: {
    name: "Composite",
    className: "ConfigurationListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Configuration"
            }
          }
        }
      }
    }
  }
};

export const LogFileListResult: msRest.CompositeMapper = {
  serializedName: "LogFileListResult",
  type: {
    name: "Composite",
    className: "LogFileListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LogFile"
            }
          }
        }
      }
    }
  }
};

export const PerformanceTierListResult: msRest.CompositeMapper = {
  serializedName: "PerformanceTierListResult",
  type: {
    name: "Composite",
    className: "PerformanceTierListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PerformanceTierProperties"
            }
          }
        }
      }
    }
  }
};

export const discriminators = {
  'ServerPropertiesForCreate' : ServerPropertiesForCreate,
  'ServerPropertiesForCreate.Default' : ServerPropertiesForDefaultCreate,
  'ServerPropertiesForCreate.PointInTimeRestore' : ServerPropertiesForRestore,
  'ServerPropertiesForCreate.GeoRestore' : ServerPropertiesForGeoRestore
};
