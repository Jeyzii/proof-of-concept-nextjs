"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'servicem8/1.0.0 (api/6.1.3)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this
     * request, [go here](/docs/filtering).
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_schedule**.
     *
     * @summary List all Allocation Windows
     * @throws FetchError<400, types.ListAllocationWindowsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.ListAllocationWindowsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.ListAllocationWindowsResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<429, types.ListAllocationWindowsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.ListAllocationWindowsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.listAllocationWindows = function () {
        return this.core.fetch('/allocationwindow.json', 'get');
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_schedule**.
     *
     *
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be
     * automatically generated for the new record and returned in the `x-record-uuid` response
     * header.
     *
     * @summary Create a new Allocation Window
     * @throws FetchError<400, types.CreateAllocationWindowsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.CreateAllocationWindowsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.CreateAllocationWindowsResponse403> Forbidden - You don't have permission to create this resource
     * @throws FetchError<429, types.CreateAllocationWindowsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.CreateAllocationWindowsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.createAllocationWindows = function (body) {
        return this.core.fetch('/allocationwindow.json', 'post', body);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_schedule**.
     *
     * @summary Retrieve an Allocation Window
     * @throws FetchError<400, types.GetAllocationWindowsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.GetAllocationWindowsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.GetAllocationWindowsResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<404, types.GetAllocationWindowsResponse404> Not Found - The requested record does not exist or has been deleted
     * @throws FetchError<429, types.GetAllocationWindowsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.GetAllocationWindowsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.getAllocationWindows = function (metadata) {
        return this.core.fetch('/allocationwindow/{uuid}.json', 'get', metadata);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_schedule**.
     *
     * @summary Update an Allocation Window
     * @throws FetchError<400, types.UpdateAllocationWindowsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.UpdateAllocationWindowsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.UpdateAllocationWindowsResponse403> Forbidden - You don't have permission to update this resource
     * @throws FetchError<404, types.UpdateAllocationWindowsResponse404> Not Found - The record to update does not exist or has been deleted
     * @throws FetchError<429, types.UpdateAllocationWindowsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.UpdateAllocationWindowsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.updateAllocationWindows = function (body, metadata) {
        return this.core.fetch('/allocationwindow/{uuid}.json', 'post', body, metadata);
    };
    /**
     * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
     * still accessible on the API, but are hidden in the UI. Inactive records can be restored
     * by setting their `active` field to `1`.
     *
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_schedule**.
     *
     * @summary Delete an Allocation Window
     * @throws FetchError<400, types.DeleteAllocationWindowsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.DeleteAllocationWindowsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.DeleteAllocationWindowsResponse403> Forbidden - You don't have permission to delete this resource
     * @throws FetchError<404, types.DeleteAllocationWindowsResponse404> Not Found - The record to delete does not exist or has already been deleted
     * @throws FetchError<429, types.DeleteAllocationWindowsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.DeleteAllocationWindowsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.deleteAllocationWindows = function (metadata) {
        return this.core.fetch('/allocationwindow/{uuid}.json', 'delete', metadata);
    };
    /**
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this
     * request, [go here](/docs/filtering).
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_assets**.
     *
     * @summary List all Assets
     * @throws FetchError<400, types.ListAssetsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.ListAssetsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.ListAssetsResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<429, types.ListAssetsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.ListAssetsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.listAssets = function () {
        return this.core.fetch('/asset.json', 'get');
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_assets**.
     *
     * @summary Retrieve an Asset
     * @throws FetchError<400, types.GetAssetsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.GetAssetsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.GetAssetsResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<404, types.GetAssetsResponse404> Not Found - The requested record does not exist or has been deleted
     * @throws FetchError<429, types.GetAssetsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.GetAssetsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.getAssets = function (metadata) {
        return this.core.fetch('/asset/{uuid}.json', 'get', metadata);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_assets**.
     *
     * @summary Update an Asset
     * @throws FetchError<400, types.UpdateAssetsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.UpdateAssetsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.UpdateAssetsResponse403> Forbidden - You don't have permission to update this resource
     * @throws FetchError<404, types.UpdateAssetsResponse404> Not Found - The record to update does not exist or has been deleted
     * @throws FetchError<429, types.UpdateAssetsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.UpdateAssetsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.updateAssets = function (body, metadata) {
        return this.core.fetch('/asset/{uuid}.json', 'post', body, metadata);
    };
    /**
     * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
     * still accessible on the API, but are hidden in the UI. Inactive records can be restored
     * by setting their `active` field to `1`.
     *
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_assets**.
     *
     * @summary Delete an Asset
     * @throws FetchError<400, types.DeleteAssetsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.DeleteAssetsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.DeleteAssetsResponse403> Forbidden - You don't have permission to delete this resource
     * @throws FetchError<404, types.DeleteAssetsResponse404> Not Found - The record to delete does not exist or has already been deleted
     * @throws FetchError<429, types.DeleteAssetsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.DeleteAssetsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.deleteAssets = function (metadata) {
        return this.core.fetch('/asset/{uuid}.json', 'delete', metadata);
    };
    /**
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this
     * request, [go here](/docs/filtering).
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_assets**.
     *
     * @summary List all Asset Types
     * @throws FetchError<400, types.ListAssetTypesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.ListAssetTypesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.ListAssetTypesResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<429, types.ListAssetTypesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.ListAssetTypesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.listAssetTypes = function () {
        return this.core.fetch('/assettype.json', 'get');
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_assets**.
     *
     *
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be
     * automatically generated for the new record and returned in the `x-record-uuid` response
     * header.
     *
     * @summary Create a new Asset Type
     * @throws FetchError<400, types.CreateAssetTypesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.CreateAssetTypesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.CreateAssetTypesResponse403> Forbidden - You don't have permission to create this resource
     * @throws FetchError<429, types.CreateAssetTypesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.CreateAssetTypesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.createAssetTypes = function (body) {
        return this.core.fetch('/assettype.json', 'post', body);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_assets**.
     *
     * @summary Retrieve an Asset Type
     * @throws FetchError<400, types.GetAssetTypesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.GetAssetTypesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.GetAssetTypesResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<404, types.GetAssetTypesResponse404> Not Found - The requested record does not exist or has been deleted
     * @throws FetchError<429, types.GetAssetTypesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.GetAssetTypesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.getAssetTypes = function (metadata) {
        return this.core.fetch('/assettype/{uuid}.json', 'get', metadata);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_assets**.
     *
     * @summary Update an Asset Type
     * @throws FetchError<400, types.UpdateAssetTypesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.UpdateAssetTypesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.UpdateAssetTypesResponse403> Forbidden - You don't have permission to update this resource
     * @throws FetchError<404, types.UpdateAssetTypesResponse404> Not Found - The record to update does not exist or has been deleted
     * @throws FetchError<429, types.UpdateAssetTypesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.UpdateAssetTypesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.updateAssetTypes = function (body, metadata) {
        return this.core.fetch('/assettype/{uuid}.json', 'post', body, metadata);
    };
    /**
     * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
     * still accessible on the API, but are hidden in the UI. Inactive records can be restored
     * by setting their `active` field to `1`.
     *
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_assets**.
     *
     * @summary Delete an Asset Type
     * @throws FetchError<400, types.DeleteAssetTypesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.DeleteAssetTypesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.DeleteAssetTypesResponse403> Forbidden - You don't have permission to delete this resource
     * @throws FetchError<404, types.DeleteAssetTypesResponse404> Not Found - The record to delete does not exist or has already been deleted
     * @throws FetchError<429, types.DeleteAssetTypesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.DeleteAssetTypesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.deleteAssetTypes = function (metadata) {
        return this.core.fetch('/assettype/{uuid}.json', 'delete', metadata);
    };
    /**
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this
     * request, [go here](/docs/filtering).
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_assets**.
     *
     * @summary List all Asset Type Fields
     * @throws FetchError<400, types.ListAssetTypeFieldsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.ListAssetTypeFieldsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.ListAssetTypeFieldsResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<429, types.ListAssetTypeFieldsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.ListAssetTypeFieldsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.listAssetTypeFields = function () {
        return this.core.fetch('/assettypefield.json', 'get');
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_assets**.
     *
     *
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be
     * automatically generated for the new record and returned in the `x-record-uuid` response
     * header.
     *
     * @summary Create a new Asset Type Field
     * @throws FetchError<400, types.CreateAssetTypeFieldsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.CreateAssetTypeFieldsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.CreateAssetTypeFieldsResponse403> Forbidden - You don't have permission to create this resource
     * @throws FetchError<429, types.CreateAssetTypeFieldsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.CreateAssetTypeFieldsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.createAssetTypeFields = function (body) {
        return this.core.fetch('/assettypefield.json', 'post', body);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_assets**.
     *
     * @summary Retrieve an Asset Type Field
     * @throws FetchError<400, types.GetAssetTypeFieldsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.GetAssetTypeFieldsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.GetAssetTypeFieldsResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<404, types.GetAssetTypeFieldsResponse404> Not Found - The requested record does not exist or has been deleted
     * @throws FetchError<429, types.GetAssetTypeFieldsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.GetAssetTypeFieldsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.getAssetTypeFields = function (metadata) {
        return this.core.fetch('/assettypefield/{uuid}.json', 'get', metadata);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_assets**.
     *
     * @summary Update an Asset Type Field
     * @throws FetchError<400, types.UpdateAssetTypeFieldsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.UpdateAssetTypeFieldsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.UpdateAssetTypeFieldsResponse403> Forbidden - You don't have permission to update this resource
     * @throws FetchError<404, types.UpdateAssetTypeFieldsResponse404> Not Found - The record to update does not exist or has been deleted
     * @throws FetchError<429, types.UpdateAssetTypeFieldsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.UpdateAssetTypeFieldsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.updateAssetTypeFields = function (body, metadata) {
        return this.core.fetch('/assettypefield/{uuid}.json', 'post', body, metadata);
    };
    /**
     * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
     * still accessible on the API, but are hidden in the UI. Inactive records can be restored
     * by setting their `active` field to `1`.
     *
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_assets**.
     *
     * @summary Delete an Asset Type Field
     * @throws FetchError<400, types.DeleteAssetTypeFieldsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.DeleteAssetTypeFieldsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.DeleteAssetTypeFieldsResponse403> Forbidden - You don't have permission to delete this resource
     * @throws FetchError<404, types.DeleteAssetTypeFieldsResponse404> Not Found - The record to delete does not exist or has already been deleted
     * @throws FetchError<429, types.DeleteAssetTypeFieldsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.DeleteAssetTypeFieldsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.deleteAssetTypeFields = function (metadata) {
        return this.core.fetch('/assettypefield/{uuid}.json', 'delete', metadata);
    };
    /**
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this
     * request, [go here](/docs/filtering).
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_attachments**.
     *
     * @summary List all Attachments
     * @throws FetchError<400, types.ListAttachmentsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.ListAttachmentsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.ListAttachmentsResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<429, types.ListAttachmentsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.ListAttachmentsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.listAttachments = function () {
        return this.core.fetch('/attachment.json', 'get');
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_attachments**.
     *
     *
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be
     * automatically generated for the new record and returned in the `x-record-uuid` response
     * header.
     *
     * @summary Create a new Attachment
     * @throws FetchError<400, types.CreateAttachmentsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.CreateAttachmentsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.CreateAttachmentsResponse403> Forbidden - You don't have permission to create this resource
     * @throws FetchError<429, types.CreateAttachmentsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.CreateAttachmentsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.createAttachments = function (body) {
        return this.core.fetch('/attachment.json', 'post', body);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_attachments**.
     *
     * @summary Retrieve an Attachment
     * @throws FetchError<400, types.GetAttachmentsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.GetAttachmentsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.GetAttachmentsResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<404, types.GetAttachmentsResponse404> Not Found - The requested record does not exist or has been deleted
     * @throws FetchError<429, types.GetAttachmentsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.GetAttachmentsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.getAttachments = function (metadata) {
        return this.core.fetch('/dboattachment/{uuid}.json', 'get', metadata);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_attachments**.
     *
     * @summary Update an Attachment
     * @throws FetchError<400, types.UpdateAttachmentsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.UpdateAttachmentsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.UpdateAttachmentsResponse403> Forbidden - You don't have permission to update this resource
     * @throws FetchError<404, types.UpdateAttachmentsResponse404> Not Found - The record to update does not exist or has been deleted
     * @throws FetchError<429, types.UpdateAttachmentsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.UpdateAttachmentsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.updateAttachments = function (body, metadata) {
        return this.core.fetch('/dboattachment/{uuid}.json', 'post', body, metadata);
    };
    /**
     * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
     * still accessible on the API, but are hidden in the UI. Inactive records can be restored
     * by setting their `active` field to `1`.
     *
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_attachments**.
     *
     * @summary Delete an Attachment
     * @throws FetchError<400, types.DeleteAttachmentsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.DeleteAttachmentsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.DeleteAttachmentsResponse403> Forbidden - You don't have permission to delete this resource
     * @throws FetchError<404, types.DeleteAttachmentsResponse404> Not Found - The record to delete does not exist or has already been deleted
     * @throws FetchError<429, types.DeleteAttachmentsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.DeleteAttachmentsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.deleteAttachments = function (metadata) {
        return this.core.fetch('/dboattachment/{uuid}.json', 'delete', metadata);
    };
    /**
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this
     * request, [go here](/docs/filtering).
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_badges**.
     *
     * @summary List all Badges
     * @throws FetchError<400, types.ListBadgesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.ListBadgesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.ListBadgesResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<429, types.ListBadgesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.ListBadgesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.listBadges = function () {
        return this.core.fetch('/badge.json', 'get');
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_badges**.
     *
     *
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be
     * automatically generated for the new record and returned in the `x-record-uuid` response
     * header.
     *
     * @summary Create a new Badge
     * @throws FetchError<400, types.CreateBadgesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.CreateBadgesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.CreateBadgesResponse403> Forbidden - You don't have permission to create this resource
     * @throws FetchError<429, types.CreateBadgesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.CreateBadgesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.createBadges = function (body) {
        return this.core.fetch('/badge.json', 'post', body);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_badges**.
     *
     * @summary Retrieve a Badge
     * @throws FetchError<400, types.GetBadgesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.GetBadgesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.GetBadgesResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<404, types.GetBadgesResponse404> Not Found - The requested record does not exist or has been deleted
     * @throws FetchError<429, types.GetBadgesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.GetBadgesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.getBadges = function (metadata) {
        return this.core.fetch('/badge/{uuid}.json', 'get', metadata);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_badges**.
     *
     * @summary Update a Badge
     * @throws FetchError<400, types.UpdateBadgesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.UpdateBadgesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.UpdateBadgesResponse403> Forbidden - You don't have permission to update this resource
     * @throws FetchError<404, types.UpdateBadgesResponse404> Not Found - The record to update does not exist or has been deleted
     * @throws FetchError<429, types.UpdateBadgesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.UpdateBadgesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.updateBadges = function (body, metadata) {
        return this.core.fetch('/badge/{uuid}.json', 'post', body, metadata);
    };
    /**
     * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
     * still accessible on the API, but are hidden in the UI. Inactive records can be restored
     * by setting their `active` field to `1`.
     *
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_badges**.
     *
     * @summary Delete a Badge
     * @throws FetchError<400, types.DeleteBadgesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.DeleteBadgesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.DeleteBadgesResponse403> Forbidden - You don't have permission to delete this resource
     * @throws FetchError<404, types.DeleteBadgesResponse404> Not Found - The record to delete does not exist or has already been deleted
     * @throws FetchError<429, types.DeleteBadgesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.DeleteBadgesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.deleteBadges = function (metadata) {
        return this.core.fetch('/badge/{uuid}.json', 'delete', metadata);
    };
    /**
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this
     * request, [go here](/docs/filtering).
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_job_categories**.
     *
     * @summary List all Categories
     * @throws FetchError<400, types.ListCategoriesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.ListCategoriesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.ListCategoriesResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<429, types.ListCategoriesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.ListCategoriesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.listCategories = function () {
        return this.core.fetch('/category.json', 'get');
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_job_categories**.
     *
     *
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be
     * automatically generated for the new record and returned in the `x-record-uuid` response
     * header.
     *
     * @summary Create a new Category
     * @throws FetchError<400, types.CreateCategoriesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.CreateCategoriesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.CreateCategoriesResponse403> Forbidden - You don't have permission to create this resource
     * @throws FetchError<429, types.CreateCategoriesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.CreateCategoriesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.createCategories = function (body) {
        return this.core.fetch('/category.json', 'post', body);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_job_categories**.
     *
     * @summary Retrieve a Category
     * @throws FetchError<400, types.GetCategoriesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.GetCategoriesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.GetCategoriesResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<404, types.GetCategoriesResponse404> Not Found - The requested record does not exist or has been deleted
     * @throws FetchError<429, types.GetCategoriesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.GetCategoriesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.getCategories = function (metadata) {
        return this.core.fetch('/category/{uuid}.json', 'get', metadata);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_job_categories**.
     *
     * @summary Update a Category
     * @throws FetchError<400, types.UpdateCategoriesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.UpdateCategoriesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.UpdateCategoriesResponse403> Forbidden - You don't have permission to update this resource
     * @throws FetchError<404, types.UpdateCategoriesResponse404> Not Found - The record to update does not exist or has been deleted
     * @throws FetchError<429, types.UpdateCategoriesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.UpdateCategoriesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.updateCategories = function (body, metadata) {
        return this.core.fetch('/category/{uuid}.json', 'post', body, metadata);
    };
    /**
     * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
     * still accessible on the API, but are hidden in the UI. Inactive records can be restored
     * by setting their `active` field to `1`.
     *
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_job_categories**.
     *
     * @summary Delete a Category
     * @throws FetchError<400, types.DeleteCategoriesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.DeleteCategoriesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.DeleteCategoriesResponse403> Forbidden - You don't have permission to delete this resource
     * @throws FetchError<404, types.DeleteCategoriesResponse404> Not Found - The record to delete does not exist or has already been deleted
     * @throws FetchError<429, types.DeleteCategoriesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.DeleteCategoriesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.deleteCategories = function (metadata) {
        return this.core.fetch('/category/{uuid}.json', 'delete', metadata);
    };
    /**
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this
     * request, [go here](/docs/filtering).
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_customers**.
     *
     * @summary List all Clients
     * @throws FetchError<400, types.ListClientsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.ListClientsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.ListClientsResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<429, types.ListClientsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.ListClientsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.listClients = function () {
        return this.core.fetch('/company.json', 'get');
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_customers**.
     *
     *
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be
     * automatically generated for the new record and returned in the `x-record-uuid` response
     * header.
     *
     * @summary Create a new Client
     * @throws FetchError<400, types.CreateClientsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.CreateClientsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.CreateClientsResponse403> Forbidden - You don't have permission to create this resource
     * @throws FetchError<429, types.CreateClientsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.CreateClientsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.createClients = function (body) {
        return this.core.fetch('/company.json', 'post', body);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_customers**.
     *
     * @summary Retrieve a Client
     * @throws FetchError<400, types.GetClientsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.GetClientsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.GetClientsResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<404, types.GetClientsResponse404> Not Found - The requested record does not exist or has been deleted
     * @throws FetchError<429, types.GetClientsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.GetClientsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.getClients = function (metadata) {
        return this.core.fetch('/company/{uuid}.json', 'get', metadata);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_customers**.
     *
     * @summary Update a Client
     * @throws FetchError<400, types.UpdateClientsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.UpdateClientsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.UpdateClientsResponse403> Forbidden - You don't have permission to update this resource
     * @throws FetchError<404, types.UpdateClientsResponse404> Not Found - The record to update does not exist or has been deleted
     * @throws FetchError<429, types.UpdateClientsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.UpdateClientsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.updateClients = function (body, metadata) {
        return this.core.fetch('/company/{uuid}.json', 'post', body, metadata);
    };
    /**
     * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
     * still accessible on the API, but are hidden in the UI. Inactive records can be restored
     * by setting their `active` field to `1`.
     *
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_customers**.
     *
     * @summary Delete a Client
     * @throws FetchError<400, types.DeleteClientsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.DeleteClientsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.DeleteClientsResponse403> Forbidden - You don't have permission to delete this resource
     * @throws FetchError<404, types.DeleteClientsResponse404> Not Found - The record to delete does not exist or has already been deleted
     * @throws FetchError<429, types.DeleteClientsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.DeleteClientsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.deleteClients = function (metadata) {
        return this.core.fetch('/company/{uuid}.json', 'delete', metadata);
    };
    /**
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this
     * request, [go here](/docs/filtering).
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_customer_contacts**.
     *
     * @summary List all Company Contacts
     * @throws FetchError<400, types.ListCompanyContactsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.ListCompanyContactsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.ListCompanyContactsResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<429, types.ListCompanyContactsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.ListCompanyContactsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.listCompanyContacts = function () {
        return this.core.fetch('/companycontact.json', 'get');
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_customer_contacts**.
     *
     *
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be
     * automatically generated for the new record and returned in the `x-record-uuid` response
     * header.
     *
     * @summary Create a new Company Contact
     * @throws FetchError<400, types.CreateCompanyContactsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.CreateCompanyContactsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.CreateCompanyContactsResponse403> Forbidden - You don't have permission to create this resource
     * @throws FetchError<429, types.CreateCompanyContactsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.CreateCompanyContactsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.createCompanyContacts = function (body) {
        return this.core.fetch('/companycontact.json', 'post', body);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_customer_contacts**.
     *
     * @summary Retrieve a Company Contact
     * @throws FetchError<400, types.GetCompanyContactsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.GetCompanyContactsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.GetCompanyContactsResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<404, types.GetCompanyContactsResponse404> Not Found - The requested record does not exist or has been deleted
     * @throws FetchError<429, types.GetCompanyContactsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.GetCompanyContactsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.getCompanyContacts = function (metadata) {
        return this.core.fetch('/companycontact/{uuid}.json', 'get', metadata);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_customer_contacts**.
     *
     * @summary Update a Company Contact
     * @throws FetchError<400, types.UpdateCompanyContactsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.UpdateCompanyContactsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.UpdateCompanyContactsResponse403> Forbidden - You don't have permission to update this resource
     * @throws FetchError<404, types.UpdateCompanyContactsResponse404> Not Found - The record to update does not exist or has been deleted
     * @throws FetchError<429, types.UpdateCompanyContactsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.UpdateCompanyContactsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.updateCompanyContacts = function (body, metadata) {
        return this.core.fetch('/companycontact/{uuid}.json', 'post', body, metadata);
    };
    /**
     * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
     * still accessible on the API, but are hidden in the UI. Inactive records can be restored
     * by setting their `active` field to `1`.
     *
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_customer_contacts**.
     *
     * @summary Delete a Company Contact
     * @throws FetchError<400, types.DeleteCompanyContactsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.DeleteCompanyContactsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.DeleteCompanyContactsResponse403> Forbidden - You don't have permission to delete this resource
     * @throws FetchError<404, types.DeleteCompanyContactsResponse404> Not Found - The record to delete does not exist or has already been deleted
     * @throws FetchError<429, types.DeleteCompanyContactsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.DeleteCompanyContactsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.deleteCompanyContacts = function (metadata) {
        return this.core.fetch('/companycontact/{uuid}.json', 'delete', metadata);
    };
    /**
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this
     * request, [go here](/docs/filtering).
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_templates**.
     *
     * @summary List all Document Templates
     * @throws FetchError<400, types.ListDocumentTemplatesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.ListDocumentTemplatesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.ListDocumentTemplatesResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<429, types.ListDocumentTemplatesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.ListDocumentTemplatesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.listDocumentTemplates = function () {
        return this.core.fetch('/documenttemplate.json', 'get');
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_templates**.
     *
     *
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be
     * automatically generated for the new record and returned in the `x-record-uuid` response
     * header.
     *
     * @summary Create a new Document Template
     * @throws FetchError<400, types.CreateDocumentTemplatesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.CreateDocumentTemplatesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.CreateDocumentTemplatesResponse403> Forbidden - You don't have permission to create this resource
     * @throws FetchError<429, types.CreateDocumentTemplatesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.CreateDocumentTemplatesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.createDocumentTemplates = function (body) {
        return this.core.fetch('/documenttemplate.json', 'post', body);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_templates**.
     *
     * @summary Retrieve a Document Template
     * @throws FetchError<400, types.GetDocumentTemplatesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.GetDocumentTemplatesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.GetDocumentTemplatesResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<404, types.GetDocumentTemplatesResponse404> Not Found - The requested record does not exist or has been deleted
     * @throws FetchError<429, types.GetDocumentTemplatesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.GetDocumentTemplatesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.getDocumentTemplates = function (metadata) {
        return this.core.fetch('/documenttemplate/{uuid}.json', 'get', metadata);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_templates**.
     *
     * @summary Update a Document Template
     * @throws FetchError<400, types.UpdateDocumentTemplatesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.UpdateDocumentTemplatesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.UpdateDocumentTemplatesResponse403> Forbidden - You don't have permission to update this resource
     * @throws FetchError<404, types.UpdateDocumentTemplatesResponse404> Not Found - The record to update does not exist or has been deleted
     * @throws FetchError<429, types.UpdateDocumentTemplatesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.UpdateDocumentTemplatesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.updateDocumentTemplates = function (body, metadata) {
        return this.core.fetch('/documenttemplate/{uuid}.json', 'post', body, metadata);
    };
    /**
     * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
     * still accessible on the API, but are hidden in the UI. Inactive records can be restored
     * by setting their `active` field to `1`.
     *
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_templates**.
     *
     * @summary Delete a Document Template
     * @throws FetchError<400, types.DeleteDocumentTemplatesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.DeleteDocumentTemplatesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.DeleteDocumentTemplatesResponse403> Forbidden - You don't have permission to delete this resource
     * @throws FetchError<404, types.DeleteDocumentTemplatesResponse404> Not Found - The record to delete does not exist or has already been deleted
     * @throws FetchError<429, types.DeleteDocumentTemplatesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.DeleteDocumentTemplatesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.deleteDocumentTemplates = function (metadata) {
        return this.core.fetch('/documenttemplate/{uuid}.json', 'delete', metadata);
    };
    /**
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this
     * request, [go here](/docs/filtering).
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_templates**.
     *
     * @summary List all Email Templates
     * @throws FetchError<400, types.ListEmailTemplatesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.ListEmailTemplatesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.ListEmailTemplatesResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<429, types.ListEmailTemplatesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.ListEmailTemplatesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.listEmailTemplates = function () {
        return this.core.fetch('/emailtemplate.json', 'get');
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_templates**.
     *
     *
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be
     * automatically generated for the new record and returned in the `x-record-uuid` response
     * header.
     *
     * @summary Create a new Email Template
     * @throws FetchError<400, types.CreateEmailTemplatesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.CreateEmailTemplatesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.CreateEmailTemplatesResponse403> Forbidden - You don't have permission to create this resource
     * @throws FetchError<429, types.CreateEmailTemplatesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.CreateEmailTemplatesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.createEmailTemplates = function (body) {
        return this.core.fetch('/emailtemplate.json', 'post', body);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_templates**.
     *
     * @summary Retrieve an Email Template
     * @throws FetchError<400, types.GetEmailTemplatesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.GetEmailTemplatesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.GetEmailTemplatesResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<404, types.GetEmailTemplatesResponse404> Not Found - The requested record does not exist or has been deleted
     * @throws FetchError<429, types.GetEmailTemplatesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.GetEmailTemplatesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.getEmailTemplates = function (metadata) {
        return this.core.fetch('/emailtemplate/{uuid}.json', 'get', metadata);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_templates**.
     *
     * @summary Update an Email Template
     * @throws FetchError<400, types.UpdateEmailTemplatesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.UpdateEmailTemplatesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.UpdateEmailTemplatesResponse403> Forbidden - You don't have permission to update this resource
     * @throws FetchError<404, types.UpdateEmailTemplatesResponse404> Not Found - The record to update does not exist or has been deleted
     * @throws FetchError<429, types.UpdateEmailTemplatesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.UpdateEmailTemplatesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.updateEmailTemplates = function (body, metadata) {
        return this.core.fetch('/emailtemplate/{uuid}.json', 'post', body, metadata);
    };
    /**
     * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
     * still accessible on the API, but are hidden in the UI. Inactive records can be restored
     * by setting their `active` field to `1`.
     *
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_templates**.
     *
     * @summary Delete an Email Template
     * @throws FetchError<400, types.DeleteEmailTemplatesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.DeleteEmailTemplatesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.DeleteEmailTemplatesResponse403> Forbidden - You don't have permission to delete this resource
     * @throws FetchError<404, types.DeleteEmailTemplatesResponse404> Not Found - The record to delete does not exist or has already been deleted
     * @throws FetchError<429, types.DeleteEmailTemplatesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.DeleteEmailTemplatesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.deleteEmailTemplates = function (metadata) {
        return this.core.fetch('/emailtemplate/{uuid}.json', 'delete', metadata);
    };
    /**
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this
     * request, [go here](/docs/filtering).
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_feedback**.
     *
     * @summary List all Feedback
     * @throws FetchError<400, types.ListFeedbackResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.ListFeedbackResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.ListFeedbackResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<429, types.ListFeedbackResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.ListFeedbackResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.listFeedback = function () {
        return this.core.fetch('/feedback.json', 'get');
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_feedback**.
     *
     *
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be
     * automatically generated for the new record and returned in the `x-record-uuid` response
     * header.
     *
     * @summary Create a new Feedback
     * @throws FetchError<400, types.CreateFeedbackResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.CreateFeedbackResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.CreateFeedbackResponse403> Forbidden - You don't have permission to create this resource
     * @throws FetchError<429, types.CreateFeedbackResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.CreateFeedbackResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.createFeedback = function (body) {
        return this.core.fetch('/feedback.json', 'post', body);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_feedback**.
     *
     * @summary Retrieve a Feedback
     * @throws FetchError<400, types.GetFeedbackResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.GetFeedbackResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.GetFeedbackResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<404, types.GetFeedbackResponse404> Not Found - The requested record does not exist or has been deleted
     * @throws FetchError<429, types.GetFeedbackResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.GetFeedbackResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.getFeedback = function (metadata) {
        return this.core.fetch('/feedback/{uuid}.json', 'get', metadata);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_feedback**.
     *
     * @summary Update a Feedback
     * @throws FetchError<400, types.UpdateFeedbackResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.UpdateFeedbackResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.UpdateFeedbackResponse403> Forbidden - You don't have permission to update this resource
     * @throws FetchError<404, types.UpdateFeedbackResponse404> Not Found - The record to update does not exist or has been deleted
     * @throws FetchError<429, types.UpdateFeedbackResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.UpdateFeedbackResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.updateFeedback = function (body, metadata) {
        return this.core.fetch('/feedback/{uuid}.json', 'post', body, metadata);
    };
    /**
     * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
     * still accessible on the API, but are hidden in the UI. Inactive records can be restored
     * by setting their `active` field to `1`.
     *
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_feedback**.
     *
     * @summary Delete a Feedback
     * @throws FetchError<400, types.DeleteFeedbackResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.DeleteFeedbackResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.DeleteFeedbackResponse403> Forbidden - You don't have permission to delete this resource
     * @throws FetchError<404, types.DeleteFeedbackResponse404> Not Found - The record to delete does not exist or has already been deleted
     * @throws FetchError<429, types.DeleteFeedbackResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.DeleteFeedbackResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.deleteFeedback = function (metadata) {
        return this.core.fetch('/feedback/{uuid}.json', 'delete', metadata);
    };
    /**
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this
     * request, [go here](/docs/filtering).
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_forms**.
     *
     * @summary List all Forms
     * @throws FetchError<400, types.ListFormsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.ListFormsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.ListFormsResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<429, types.ListFormsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.ListFormsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.listForms = function () {
        return this.core.fetch('/form.json', 'get');
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_forms**.
     *
     *
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be
     * automatically generated for the new record and returned in the `x-record-uuid` response
     * header.
     *
     * @summary Create a new Form
     * @throws FetchError<400, types.CreateFormsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.CreateFormsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.CreateFormsResponse403> Forbidden - You don't have permission to create this resource
     * @throws FetchError<429, types.CreateFormsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.CreateFormsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.createForms = function (body) {
        return this.core.fetch('/form.json', 'post', body);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_forms**.
     *
     * @summary Retrieve a Form
     * @throws FetchError<400, types.GetFormsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.GetFormsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.GetFormsResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<404, types.GetFormsResponse404> Not Found - The requested record does not exist or has been deleted
     * @throws FetchError<429, types.GetFormsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.GetFormsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.getForms = function (metadata) {
        return this.core.fetch('/form/{uuid}.json', 'get', metadata);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_forms**.
     *
     * @summary Update a Form
     * @throws FetchError<400, types.UpdateFormsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.UpdateFormsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.UpdateFormsResponse403> Forbidden - You don't have permission to update this resource
     * @throws FetchError<404, types.UpdateFormsResponse404> Not Found - The record to update does not exist or has been deleted
     * @throws FetchError<429, types.UpdateFormsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.UpdateFormsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.updateForms = function (body, metadata) {
        return this.core.fetch('/form/{uuid}.json', 'post', body, metadata);
    };
    /**
     * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
     * still accessible on the API, but are hidden in the UI. Inactive records can be restored
     * by setting their `active` field to `1`.
     *
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_forms**.
     *
     * @summary Delete a Form
     * @throws FetchError<400, types.DeleteFormsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.DeleteFormsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.DeleteFormsResponse403> Forbidden - You don't have permission to delete this resource
     * @throws FetchError<404, types.DeleteFormsResponse404> Not Found - The record to delete does not exist or has already been deleted
     * @throws FetchError<429, types.DeleteFormsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.DeleteFormsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.deleteForms = function (metadata) {
        return this.core.fetch('/form/{uuid}.json', 'delete', metadata);
    };
    /**
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this
     * request, [go here](/docs/filtering).
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_forms**.
     *
     * @summary List all Form Fields
     * @throws FetchError<400, types.ListFormFieldsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.ListFormFieldsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.ListFormFieldsResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<429, types.ListFormFieldsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.ListFormFieldsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.listFormFields = function () {
        return this.core.fetch('/formfield.json', 'get');
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_forms**.
     *
     *
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be
     * automatically generated for the new record and returned in the `x-record-uuid` response
     * header.
     *
     * @summary Create a new Form Field
     * @throws FetchError<400, types.CreateFormFieldsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.CreateFormFieldsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.CreateFormFieldsResponse403> Forbidden - You don't have permission to create this resource
     * @throws FetchError<429, types.CreateFormFieldsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.CreateFormFieldsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.createFormFields = function (body) {
        return this.core.fetch('/formfield.json', 'post', body);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_forms**.
     *
     * @summary Retrieve a Form Field
     * @throws FetchError<400, types.GetFormFieldsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.GetFormFieldsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.GetFormFieldsResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<404, types.GetFormFieldsResponse404> Not Found - The requested record does not exist or has been deleted
     * @throws FetchError<429, types.GetFormFieldsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.GetFormFieldsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.getFormFields = function (metadata) {
        return this.core.fetch('/formfield/{uuid}.json', 'get', metadata);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_forms**.
     *
     * @summary Update a Form Field
     * @throws FetchError<400, types.UpdateFormFieldsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.UpdateFormFieldsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.UpdateFormFieldsResponse403> Forbidden - You don't have permission to update this resource
     * @throws FetchError<404, types.UpdateFormFieldsResponse404> Not Found - The record to update does not exist or has been deleted
     * @throws FetchError<429, types.UpdateFormFieldsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.UpdateFormFieldsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.updateFormFields = function (body, metadata) {
        return this.core.fetch('/formfield/{uuid}.json', 'post', body, metadata);
    };
    /**
     * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
     * still accessible on the API, but are hidden in the UI. Inactive records can be restored
     * by setting their `active` field to `1`.
     *
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_forms**.
     *
     * @summary Delete a Form Field
     * @throws FetchError<400, types.DeleteFormFieldsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.DeleteFormFieldsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.DeleteFormFieldsResponse403> Forbidden - You don't have permission to delete this resource
     * @throws FetchError<404, types.DeleteFormFieldsResponse404> Not Found - The record to delete does not exist or has already been deleted
     * @throws FetchError<429, types.DeleteFormFieldsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.DeleteFormFieldsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.deleteFormFields = function (metadata) {
        return this.core.fetch('/formfield/{uuid}.json', 'delete', metadata);
    };
    /**
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this
     * request, [go here](/docs/filtering).
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_forms**.
     *
     * @summary List all Form Responses
     * @throws FetchError<400, types.ListFormResponsesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.ListFormResponsesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.ListFormResponsesResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<429, types.ListFormResponsesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.ListFormResponsesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.listFormResponses = function () {
        return this.core.fetch('/formresponse.json', 'get');
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_forms**.
     *
     *
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be
     * automatically generated for the new record and returned in the `x-record-uuid` response
     * header.
     *
     * @summary Create a new Form Response
     * @throws FetchError<400, types.CreateFormResponsesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.CreateFormResponsesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.CreateFormResponsesResponse403> Forbidden - You don't have permission to create this resource
     * @throws FetchError<429, types.CreateFormResponsesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.CreateFormResponsesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.createFormResponses = function (body) {
        return this.core.fetch('/formresponse.json', 'post', body);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_forms**.
     *
     * @summary Retrieve a Form Response
     * @throws FetchError<400, types.GetFormResponsesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.GetFormResponsesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.GetFormResponsesResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<404, types.GetFormResponsesResponse404> Not Found - The requested record does not exist or has been deleted
     * @throws FetchError<429, types.GetFormResponsesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.GetFormResponsesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.getFormResponses = function (metadata) {
        return this.core.fetch('/formresponse/{uuid}.json', 'get', metadata);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_forms**.
     *
     * @summary Update a Form Response
     * @throws FetchError<400, types.UpdateFormResponsesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.UpdateFormResponsesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.UpdateFormResponsesResponse403> Forbidden - You don't have permission to update this resource
     * @throws FetchError<404, types.UpdateFormResponsesResponse404> Not Found - The record to update does not exist or has been deleted
     * @throws FetchError<429, types.UpdateFormResponsesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.UpdateFormResponsesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.updateFormResponses = function (body, metadata) {
        return this.core.fetch('/formresponse/{uuid}.json', 'post', body, metadata);
    };
    /**
     * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
     * still accessible on the API, but are hidden in the UI. Inactive records can be restored
     * by setting their `active` field to `1`.
     *
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_forms**.
     *
     * @summary Delete a Form Response
     * @throws FetchError<400, types.DeleteFormResponsesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.DeleteFormResponsesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.DeleteFormResponsesResponse403> Forbidden - You don't have permission to delete this resource
     * @throws FetchError<404, types.DeleteFormResponsesResponse404> Not Found - The record to delete does not exist or has already been deleted
     * @throws FetchError<429, types.DeleteFormResponsesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.DeleteFormResponsesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.deleteFormResponses = function (metadata) {
        return this.core.fetch('/formresponse/{uuid}.json', 'delete', metadata);
    };
    /**
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this
     * request, [go here](/docs/filtering).
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_jobs**.
     *
     * @summary List all Jobs
     * @throws FetchError<400, types.ListJobsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.ListJobsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.ListJobsResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<429, types.ListJobsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.ListJobsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.listJobs = function () {
        return this.core.fetch('/job.json', 'get');
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **create_jobs**.
     *
     *
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be
     * automatically generated for the new record and returned in the `x-record-uuid` response
     * header.
     *
     * @summary Create a new Job
     * @throws FetchError<400, types.CreateJobsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.CreateJobsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.CreateJobsResponse403> Forbidden - You don't have permission to create this resource
     * @throws FetchError<429, types.CreateJobsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.CreateJobsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.createJobs = function (body) {
        return this.core.fetch('/job.json', 'post', body);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_jobs**.
     *
     * @summary Retrieve a Job
     * @throws FetchError<400, types.GetJobsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.GetJobsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.GetJobsResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<404, types.GetJobsResponse404> Not Found - The requested record does not exist or has been deleted
     * @throws FetchError<429, types.GetJobsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.GetJobsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.getJobs = function (metadata) {
        return this.core.fetch('/job/{uuid}.json', 'get', metadata);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_jobs**.
     *
     * @summary Update a Job
     * @throws FetchError<400, types.UpdateJobsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.UpdateJobsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.UpdateJobsResponse403> Forbidden - You don't have permission to update this resource
     * @throws FetchError<404, types.UpdateJobsResponse404> Not Found - The record to update does not exist or has been deleted
     * @throws FetchError<429, types.UpdateJobsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.UpdateJobsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.updateJobs = function (body, metadata) {
        return this.core.fetch('/job/{uuid}.json', 'post', body, metadata);
    };
    /**
     * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
     * still accessible on the API, but are hidden in the UI. Inactive records can be restored
     * by setting their `active` field to `1`.
     *
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_jobs**.
     *
     * @summary Delete a Job
     * @throws FetchError<400, types.DeleteJobsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.DeleteJobsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.DeleteJobsResponse403> Forbidden - You don't have permission to delete this resource
     * @throws FetchError<404, types.DeleteJobsResponse404> Not Found - The record to delete does not exist or has already been deleted
     * @throws FetchError<429, types.DeleteJobsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.DeleteJobsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.deleteJobs = function (metadata) {
        return this.core.fetch('/job/{uuid}.json', 'delete', metadata);
    };
    /**
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this
     * request, [go here](/docs/filtering).
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_schedule**.
     *
     * @summary List all Job Activities
     * @throws FetchError<400, types.ListJobActivitiesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.ListJobActivitiesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.ListJobActivitiesResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<429, types.ListJobActivitiesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.ListJobActivitiesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.listJobActivities = function () {
        return this.core.fetch('/jobactivity.json', 'get');
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_schedule**.
     *
     *
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be
     * automatically generated for the new record and returned in the `x-record-uuid` response
     * header.
     *
     * @summary Create a new Job Activity
     * @throws FetchError<400, types.CreateJobActivitiesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.CreateJobActivitiesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.CreateJobActivitiesResponse403> Forbidden - You don't have permission to create this resource
     * @throws FetchError<429, types.CreateJobActivitiesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.CreateJobActivitiesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.createJobActivities = function (body) {
        return this.core.fetch('/jobactivity.json', 'post', body);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_schedule**.
     *
     * @summary Retrieve a Job Activity
     * @throws FetchError<400, types.GetJobActivitiesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.GetJobActivitiesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.GetJobActivitiesResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<404, types.GetJobActivitiesResponse404> Not Found - The requested record does not exist or has been deleted
     * @throws FetchError<429, types.GetJobActivitiesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.GetJobActivitiesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.getJobActivities = function (metadata) {
        return this.core.fetch('/jobactivity/{uuid}.json', 'get', metadata);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_schedule**.
     *
     * @summary Update a Job Activity
     * @throws FetchError<400, types.UpdateJobActivitiesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.UpdateJobActivitiesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.UpdateJobActivitiesResponse403> Forbidden - You don't have permission to update this resource
     * @throws FetchError<404, types.UpdateJobActivitiesResponse404> Not Found - The record to update does not exist or has been deleted
     * @throws FetchError<429, types.UpdateJobActivitiesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.UpdateJobActivitiesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.updateJobActivities = function (body, metadata) {
        return this.core.fetch('/jobactivity/{uuid}.json', 'post', body, metadata);
    };
    /**
     * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
     * still accessible on the API, but are hidden in the UI. Inactive records can be restored
     * by setting their `active` field to `1`.
     *
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_schedule**.
     *
     * @summary Delete a Job Activity
     * @throws FetchError<400, types.DeleteJobActivitiesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.DeleteJobActivitiesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.DeleteJobActivitiesResponse403> Forbidden - You don't have permission to delete this resource
     * @throws FetchError<404, types.DeleteJobActivitiesResponse404> Not Found - The record to delete does not exist or has already been deleted
     * @throws FetchError<429, types.DeleteJobActivitiesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.DeleteJobActivitiesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.deleteJobActivities = function (metadata) {
        return this.core.fetch('/jobactivity/{uuid}.json', 'delete', metadata);
    };
    /**
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this
     * request, [go here](/docs/filtering).
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_schedule**.
     *
     * @summary List all Job Allocations
     * @throws FetchError<400, types.ListJobAllocationsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.ListJobAllocationsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.ListJobAllocationsResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<429, types.ListJobAllocationsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.ListJobAllocationsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.listJobAllocations = function () {
        return this.core.fetch('/joballocation.json', 'get');
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_schedule**.
     *
     *
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be
     * automatically generated for the new record and returned in the `x-record-uuid` response
     * header.
     *
     * @summary Create a new Job Allocation
     * @throws FetchError<400, types.CreateJobAllocationsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.CreateJobAllocationsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.CreateJobAllocationsResponse403> Forbidden - You don't have permission to create this resource
     * @throws FetchError<429, types.CreateJobAllocationsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.CreateJobAllocationsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.createJobAllocations = function (body) {
        return this.core.fetch('/joballocation.json', 'post', body);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_schedule**.
     *
     * @summary Retrieve a Job Allocation
     * @throws FetchError<400, types.GetJobAllocationsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.GetJobAllocationsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.GetJobAllocationsResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<404, types.GetJobAllocationsResponse404> Not Found - The requested record does not exist or has been deleted
     * @throws FetchError<429, types.GetJobAllocationsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.GetJobAllocationsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.getJobAllocations = function (metadata) {
        return this.core.fetch('/joballocation/{uuid}.json', 'get', metadata);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_schedule**.
     *
     * @summary Update a Job Allocation
     * @throws FetchError<400, types.UpdateJobAllocationsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.UpdateJobAllocationsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.UpdateJobAllocationsResponse403> Forbidden - You don't have permission to update this resource
     * @throws FetchError<404, types.UpdateJobAllocationsResponse404> Not Found - The record to update does not exist or has been deleted
     * @throws FetchError<429, types.UpdateJobAllocationsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.UpdateJobAllocationsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.updateJobAllocations = function (body, metadata) {
        return this.core.fetch('/joballocation/{uuid}.json', 'post', body, metadata);
    };
    /**
     * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
     * still accessible on the API, but are hidden in the UI. Inactive records can be restored
     * by setting their `active` field to `1`.
     *
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_schedule**.
     *
     * @summary Delete a Job Allocation
     * @throws FetchError<400, types.DeleteJobAllocationsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.DeleteJobAllocationsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.DeleteJobAllocationsResponse403> Forbidden - You don't have permission to delete this resource
     * @throws FetchError<404, types.DeleteJobAllocationsResponse404> Not Found - The record to delete does not exist or has already been deleted
     * @throws FetchError<429, types.DeleteJobAllocationsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.DeleteJobAllocationsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.deleteJobAllocations = function (metadata) {
        return this.core.fetch('/joballocation/{uuid}.json', 'delete', metadata);
    };
    /**
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this
     * request, [go here](/docs/filtering).
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_job_checklists**.
     *
     * @summary List all Job Checklists
     * @throws FetchError<400, types.ListJobChecklistsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.ListJobChecklistsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.ListJobChecklistsResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<429, types.ListJobChecklistsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.ListJobChecklistsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.listJobChecklists = function () {
        return this.core.fetch('/jobchecklist.json', 'get');
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_job_checklists**.
     *
     *
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be
     * automatically generated for the new record and returned in the `x-record-uuid` response
     * header.
     *
     * @summary Create a new Job Checklist
     * @throws FetchError<400, types.CreateJobChecklistsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.CreateJobChecklistsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.CreateJobChecklistsResponse403> Forbidden - You don't have permission to create this resource
     * @throws FetchError<429, types.CreateJobChecklistsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.CreateJobChecklistsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.createJobChecklists = function (body) {
        return this.core.fetch('/jobchecklist.json', 'post', body);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_job_checklists**.
     *
     * @summary Retrieve a Job Checklist
     * @throws FetchError<400, types.GetJobChecklistsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.GetJobChecklistsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.GetJobChecklistsResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<404, types.GetJobChecklistsResponse404> Not Found - The requested record does not exist or has been deleted
     * @throws FetchError<429, types.GetJobChecklistsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.GetJobChecklistsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.getJobChecklists = function (metadata) {
        return this.core.fetch('/jobchecklist/{uuid}.json', 'get', metadata);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_job_checklists**.
     *
     * @summary Update a Job Checklist
     * @throws FetchError<400, types.UpdateJobChecklistsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.UpdateJobChecklistsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.UpdateJobChecklistsResponse403> Forbidden - You don't have permission to update this resource
     * @throws FetchError<404, types.UpdateJobChecklistsResponse404> Not Found - The record to update does not exist or has been deleted
     * @throws FetchError<429, types.UpdateJobChecklistsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.UpdateJobChecklistsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.updateJobChecklists = function (body, metadata) {
        return this.core.fetch('/jobchecklist/{uuid}.json', 'post', body, metadata);
    };
    /**
     * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
     * still accessible on the API, but are hidden in the UI. Inactive records can be restored
     * by setting their `active` field to `1`.
     *
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_job_checklists**.
     *
     * @summary Delete a Job Checklist
     * @throws FetchError<400, types.DeleteJobChecklistsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.DeleteJobChecklistsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.DeleteJobChecklistsResponse403> Forbidden - You don't have permission to delete this resource
     * @throws FetchError<404, types.DeleteJobChecklistsResponse404> Not Found - The record to delete does not exist or has already been deleted
     * @throws FetchError<429, types.DeleteJobChecklistsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.DeleteJobChecklistsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.deleteJobChecklists = function (metadata) {
        return this.core.fetch('/jobchecklist/{uuid}.json', 'delete', metadata);
    };
    /**
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this
     * request, [go here](/docs/filtering).
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_job_contacts**.
     *
     * @summary List all Job Contacts
     * @throws FetchError<400, types.ListJobContactsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.ListJobContactsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.ListJobContactsResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<429, types.ListJobContactsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.ListJobContactsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.listJobContacts = function () {
        return this.core.fetch('/jobcontact.json', 'get');
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_job_contacts**.
     *
     *
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be
     * automatically generated for the new record and returned in the `x-record-uuid` response
     * header.
     *
     * @summary Create a new Job Contact
     * @throws FetchError<400, types.CreateJobContactsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.CreateJobContactsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.CreateJobContactsResponse403> Forbidden - You don't have permission to create this resource
     * @throws FetchError<429, types.CreateJobContactsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.CreateJobContactsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.createJobContacts = function (body) {
        return this.core.fetch('/jobcontact.json', 'post', body);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_job_contacts**.
     *
     * @summary Retrieve a Job Contact
     * @throws FetchError<400, types.GetJobContactsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.GetJobContactsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.GetJobContactsResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<404, types.GetJobContactsResponse404> Not Found - The requested record does not exist or has been deleted
     * @throws FetchError<429, types.GetJobContactsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.GetJobContactsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.getJobContacts = function (metadata) {
        return this.core.fetch('/jobcontact/{uuid}.json', 'get', metadata);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_job_contacts**.
     *
     * @summary Update a Job Contact
     * @throws FetchError<400, types.UpdateJobContactsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.UpdateJobContactsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.UpdateJobContactsResponse403> Forbidden - You don't have permission to update this resource
     * @throws FetchError<404, types.UpdateJobContactsResponse404> Not Found - The record to update does not exist or has been deleted
     * @throws FetchError<429, types.UpdateJobContactsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.UpdateJobContactsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.updateJobContacts = function (body, metadata) {
        return this.core.fetch('/jobcontact/{uuid}.json', 'post', body, metadata);
    };
    /**
     * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
     * still accessible on the API, but are hidden in the UI. Inactive records can be restored
     * by setting their `active` field to `1`.
     *
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_job_contacts**.
     *
     * @summary Delete a Job Contact
     * @throws FetchError<400, types.DeleteJobContactsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.DeleteJobContactsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.DeleteJobContactsResponse403> Forbidden - You don't have permission to delete this resource
     * @throws FetchError<404, types.DeleteJobContactsResponse404> Not Found - The record to delete does not exist or has already been deleted
     * @throws FetchError<429, types.DeleteJobContactsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.DeleteJobContactsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.deleteJobContacts = function (metadata) {
        return this.core.fetch('/jobcontact/{uuid}.json', 'delete', metadata);
    };
    /**
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this
     * request, [go here](/docs/filtering).
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_job_materials**.
     *
     * @summary List all Job Materials
     * @throws FetchError<400, types.ListJobMaterialsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.ListJobMaterialsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.ListJobMaterialsResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<429, types.ListJobMaterialsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.ListJobMaterialsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.listJobMaterials = function () {
        return this.core.fetch('/jobmaterial.json', 'get');
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_job_materials**.
     *
     *
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be
     * automatically generated for the new record and returned in the `x-record-uuid` response
     * header.
     *
     * @summary Create a new Job Material
     * @throws FetchError<400, types.CreateJobMaterialsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.CreateJobMaterialsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.CreateJobMaterialsResponse403> Forbidden - You don't have permission to create this resource
     * @throws FetchError<429, types.CreateJobMaterialsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.CreateJobMaterialsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.createJobMaterials = function (body) {
        return this.core.fetch('/jobmaterial.json', 'post', body);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_job_materials**.
     *
     * @summary Retrieve a Job Material
     * @throws FetchError<400, types.GetJobMaterialsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.GetJobMaterialsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.GetJobMaterialsResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<404, types.GetJobMaterialsResponse404> Not Found - The requested record does not exist or has been deleted
     * @throws FetchError<429, types.GetJobMaterialsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.GetJobMaterialsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.getJobMaterials = function (metadata) {
        return this.core.fetch('/jobmaterial/{uuid}.json', 'get', metadata);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_job_materials**.
     *
     * @summary Update a Job Material
     * @throws FetchError<400, types.UpdateJobMaterialsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.UpdateJobMaterialsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.UpdateJobMaterialsResponse403> Forbidden - You don't have permission to update this resource
     * @throws FetchError<404, types.UpdateJobMaterialsResponse404> Not Found - The record to update does not exist or has been deleted
     * @throws FetchError<429, types.UpdateJobMaterialsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.UpdateJobMaterialsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.updateJobMaterials = function (body, metadata) {
        return this.core.fetch('/jobmaterial/{uuid}.json', 'post', body, metadata);
    };
    /**
     * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
     * still accessible on the API, but are hidden in the UI. Inactive records can be restored
     * by setting their `active` field to `1`.
     *
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_job_materials**.
     *
     * @summary Delete a Job Material
     * @throws FetchError<400, types.DeleteJobMaterialsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.DeleteJobMaterialsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.DeleteJobMaterialsResponse403> Forbidden - You don't have permission to delete this resource
     * @throws FetchError<404, types.DeleteJobMaterialsResponse404> Not Found - The record to delete does not exist or has already been deleted
     * @throws FetchError<429, types.DeleteJobMaterialsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.DeleteJobMaterialsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.deleteJobMaterials = function (metadata) {
        return this.core.fetch('/jobmaterial/{uuid}.json', 'delete', metadata);
    };
    /**
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this
     * request, [go here](/docs/filtering).
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_job_materials**.
     *
     * @summary List all Job Material Bundles
     * @throws FetchError<400, types.ListJobMaterialBundlesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.ListJobMaterialBundlesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.ListJobMaterialBundlesResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<429, types.ListJobMaterialBundlesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.ListJobMaterialBundlesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.listJobMaterialBundles = function () {
        return this.core.fetch('/jobmaterialbundle.json', 'get');
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_job_materials**.
     *
     *
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be
     * automatically generated for the new record and returned in the `x-record-uuid` response
     * header.
     *
     * @summary Create a new Job Material Bundle
     * @throws FetchError<400, types.CreateJobMaterialBundlesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.CreateJobMaterialBundlesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.CreateJobMaterialBundlesResponse403> Forbidden - You don't have permission to create this resource
     * @throws FetchError<429, types.CreateJobMaterialBundlesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.CreateJobMaterialBundlesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.createJobMaterialBundles = function (body) {
        return this.core.fetch('/jobmaterialbundle.json', 'post', body);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_job_materials**.
     *
     * @summary Retrieve a Job Material Bundle
     * @throws FetchError<400, types.GetJobMaterialBundlesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.GetJobMaterialBundlesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.GetJobMaterialBundlesResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<404, types.GetJobMaterialBundlesResponse404> Not Found - The requested record does not exist or has been deleted
     * @throws FetchError<429, types.GetJobMaterialBundlesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.GetJobMaterialBundlesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.getJobMaterialBundles = function (metadata) {
        return this.core.fetch('/jobmaterialbundle/{uuid}.json', 'get', metadata);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_job_materials**.
     *
     * @summary Update a Job Material Bundle
     * @throws FetchError<400, types.UpdateJobMaterialBundlesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.UpdateJobMaterialBundlesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.UpdateJobMaterialBundlesResponse403> Forbidden - You don't have permission to update this resource
     * @throws FetchError<404, types.UpdateJobMaterialBundlesResponse404> Not Found - The record to update does not exist or has been deleted
     * @throws FetchError<429, types.UpdateJobMaterialBundlesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.UpdateJobMaterialBundlesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.updateJobMaterialBundles = function (body, metadata) {
        return this.core.fetch('/jobmaterialbundle/{uuid}.json', 'post', body, metadata);
    };
    /**
     * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
     * still accessible on the API, but are hidden in the UI. Inactive records can be restored
     * by setting their `active` field to `1`.
     *
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_job_materials**.
     *
     * @summary Delete a Job Material Bundle
     * @throws FetchError<400, types.DeleteJobMaterialBundlesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.DeleteJobMaterialBundlesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.DeleteJobMaterialBundlesResponse403> Forbidden - You don't have permission to delete this resource
     * @throws FetchError<404, types.DeleteJobMaterialBundlesResponse404> Not Found - The record to delete does not exist or has already been deleted
     * @throws FetchError<429, types.DeleteJobMaterialBundlesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.DeleteJobMaterialBundlesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.deleteJobMaterialBundles = function (metadata) {
        return this.core.fetch('/jobmaterialbundle/{uuid}.json', 'delete', metadata);
    };
    /**
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this
     * request, [go here](/docs/filtering).
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_job_payments**.
     *
     * @summary List all Job Payments
     * @throws FetchError<400, types.ListJobPaymentsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.ListJobPaymentsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.ListJobPaymentsResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<429, types.ListJobPaymentsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.ListJobPaymentsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.listJobPayments = function () {
        return this.core.fetch('/jobpayment.json', 'get');
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_job_payments**.
     *
     *
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be
     * automatically generated for the new record and returned in the `x-record-uuid` response
     * header.
     *
     * @summary Create a new Job Payment
     * @throws FetchError<400, types.CreateJobPaymentsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.CreateJobPaymentsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.CreateJobPaymentsResponse403> Forbidden - You don't have permission to create this resource
     * @throws FetchError<429, types.CreateJobPaymentsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.CreateJobPaymentsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.createJobPayments = function (body) {
        return this.core.fetch('/jobpayment.json', 'post', body);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_job_payments**.
     *
     * @summary Retrieve a Job Payment
     * @throws FetchError<400, types.GetJobPaymentsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.GetJobPaymentsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.GetJobPaymentsResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<404, types.GetJobPaymentsResponse404> Not Found - The requested record does not exist or has been deleted
     * @throws FetchError<429, types.GetJobPaymentsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.GetJobPaymentsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.getJobPayments = function (metadata) {
        return this.core.fetch('/jobpayment/{uuid}.json', 'get', metadata);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_job_payments**.
     *
     * @summary Update a Job Payment
     * @throws FetchError<400, types.UpdateJobPaymentsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.UpdateJobPaymentsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.UpdateJobPaymentsResponse403> Forbidden - You don't have permission to update this resource
     * @throws FetchError<404, types.UpdateJobPaymentsResponse404> Not Found - The record to update does not exist or has been deleted
     * @throws FetchError<429, types.UpdateJobPaymentsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.UpdateJobPaymentsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.updateJobPayments = function (body, metadata) {
        return this.core.fetch('/jobpayment/{uuid}.json', 'post', body, metadata);
    };
    /**
     * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
     * still accessible on the API, but are hidden in the UI. Inactive records can be restored
     * by setting their `active` field to `1`.
     *
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_job_payments**.
     *
     * @summary Delete a Job Payment
     * @throws FetchError<400, types.DeleteJobPaymentsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.DeleteJobPaymentsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.DeleteJobPaymentsResponse403> Forbidden - You don't have permission to delete this resource
     * @throws FetchError<404, types.DeleteJobPaymentsResponse404> Not Found - The record to delete does not exist or has already been deleted
     * @throws FetchError<429, types.DeleteJobPaymentsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.DeleteJobPaymentsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.deleteJobPayments = function (metadata) {
        return this.core.fetch('/jobpayment/{uuid}.json', 'delete', metadata);
    };
    /**
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this
     * request, [go here](/docs/filtering).
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_jobs**.
     *
     * @summary List all Job Templates
     * @throws FetchError<400, types.ListJobTemplatesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.ListJobTemplatesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.ListJobTemplatesResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<429, types.ListJobTemplatesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.ListJobTemplatesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.listJobTemplates = function () {
        return this.core.fetch('/jobtemplate.json', 'get');
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_jobs**.
     *
     * @summary Retrieve a Job Template
     * @throws FetchError<400, types.GetJobTemplatesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.GetJobTemplatesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.GetJobTemplatesResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<404, types.GetJobTemplatesResponse404> Not Found - The requested record does not exist or has been deleted
     * @throws FetchError<429, types.GetJobTemplatesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.GetJobTemplatesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.getJobTemplates = function (metadata) {
        return this.core.fetch('/jobtemplate/{uuid}.json', 'get', metadata);
    };
    /**
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this
     * request, [go here](/docs/filtering).
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_knowledge**.
     *
     * @summary List all Knowledge Articles
     * @throws FetchError<400, types.ListKnowledgeArticlesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.ListKnowledgeArticlesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.ListKnowledgeArticlesResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<429, types.ListKnowledgeArticlesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.ListKnowledgeArticlesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.listKnowledgeArticles = function () {
        return this.core.fetch('/knowledgearticle.json', 'get');
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_knowledge**.
     *
     *
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be
     * automatically generated for the new record and returned in the `x-record-uuid` response
     * header.
     *
     * @summary Create a new Knowledge Article
     * @throws FetchError<400, types.CreateKnowledgeArticlesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.CreateKnowledgeArticlesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.CreateKnowledgeArticlesResponse403> Forbidden - You don't have permission to create this resource
     * @throws FetchError<429, types.CreateKnowledgeArticlesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.CreateKnowledgeArticlesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.createKnowledgeArticles = function (body) {
        return this.core.fetch('/knowledgearticle.json', 'post', body);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_knowledge**.
     *
     * @summary Retrieve a Knowledge Article
     * @throws FetchError<400, types.GetKnowledgeArticlesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.GetKnowledgeArticlesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.GetKnowledgeArticlesResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<404, types.GetKnowledgeArticlesResponse404> Not Found - The requested record does not exist or has been deleted
     * @throws FetchError<429, types.GetKnowledgeArticlesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.GetKnowledgeArticlesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.getKnowledgeArticles = function (metadata) {
        return this.core.fetch('/knowledgearticle/{uuid}.json', 'get', metadata);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_knowledge**.
     *
     * @summary Update a Knowledge Article
     * @throws FetchError<400, types.UpdateKnowledgeArticlesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.UpdateKnowledgeArticlesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.UpdateKnowledgeArticlesResponse403> Forbidden - You don't have permission to update this resource
     * @throws FetchError<404, types.UpdateKnowledgeArticlesResponse404> Not Found - The record to update does not exist or has been deleted
     * @throws FetchError<429, types.UpdateKnowledgeArticlesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.UpdateKnowledgeArticlesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.updateKnowledgeArticles = function (body, metadata) {
        return this.core.fetch('/knowledgearticle/{uuid}.json', 'post', body, metadata);
    };
    /**
     * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
     * still accessible on the API, but are hidden in the UI. Inactive records can be restored
     * by setting their `active` field to `1`.
     *
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_knowledge**.
     *
     * @summary Delete a Knowledge Article
     * @throws FetchError<400, types.DeleteKnowledgeArticlesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.DeleteKnowledgeArticlesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.DeleteKnowledgeArticlesResponse403> Forbidden - You don't have permission to delete this resource
     * @throws FetchError<404, types.DeleteKnowledgeArticlesResponse404> Not Found - The record to delete does not exist or has already been deleted
     * @throws FetchError<429, types.DeleteKnowledgeArticlesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.DeleteKnowledgeArticlesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.deleteKnowledgeArticles = function (metadata) {
        return this.core.fetch('/knowledgearticle/{uuid}.json', 'delete', metadata);
    };
    /**
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this
     * request, [go here](/docs/filtering).
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_locations**.
     *
     * @summary List all Locations
     * @throws FetchError<400, types.ListLocationsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.ListLocationsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.ListLocationsResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<429, types.ListLocationsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.ListLocationsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.listLocations = function () {
        return this.core.fetch('/location.json', 'get');
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_locations**.
     *
     *
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be
     * automatically generated for the new record and returned in the `x-record-uuid` response
     * header.
     *
     * @summary Create a new Location
     * @throws FetchError<400, types.CreateLocationsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.CreateLocationsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.CreateLocationsResponse403> Forbidden - You don't have permission to create this resource
     * @throws FetchError<429, types.CreateLocationsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.CreateLocationsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.createLocations = function (body) {
        return this.core.fetch('/location.json', 'post', body);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_locations**.
     *
     * @summary Retrieve a Location
     * @throws FetchError<400, types.GetLocationsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.GetLocationsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.GetLocationsResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<404, types.GetLocationsResponse404> Not Found - The requested record does not exist or has been deleted
     * @throws FetchError<429, types.GetLocationsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.GetLocationsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.getLocations = function (metadata) {
        return this.core.fetch('/location/{uuid}.json', 'get', metadata);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_locations**.
     *
     * @summary Update a Location
     * @throws FetchError<400, types.UpdateLocationsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.UpdateLocationsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.UpdateLocationsResponse403> Forbidden - You don't have permission to update this resource
     * @throws FetchError<404, types.UpdateLocationsResponse404> Not Found - The record to update does not exist or has been deleted
     * @throws FetchError<429, types.UpdateLocationsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.UpdateLocationsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.updateLocations = function (body, metadata) {
        return this.core.fetch('/location/{uuid}.json', 'post', body, metadata);
    };
    /**
     * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
     * still accessible on the API, but are hidden in the UI. Inactive records can be restored
     * by setting their `active` field to `1`.
     *
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_locations**.
     *
     * @summary Delete a Location
     * @throws FetchError<400, types.DeleteLocationsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.DeleteLocationsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.DeleteLocationsResponse403> Forbidden - You don't have permission to delete this resource
     * @throws FetchError<404, types.DeleteLocationsResponse404> Not Found - The record to delete does not exist or has already been deleted
     * @throws FetchError<429, types.DeleteLocationsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.DeleteLocationsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.deleteLocations = function (metadata) {
        return this.core.fetch('/location/{uuid}.json', 'delete', metadata);
    };
    /**
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this
     * request, [go here](/docs/filtering).
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_inventory**.
     *
     * @summary List all Materials
     * @throws FetchError<400, types.ListMaterialsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.ListMaterialsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.ListMaterialsResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<429, types.ListMaterialsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.ListMaterialsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.listMaterials = function () {
        return this.core.fetch('/material.json', 'get');
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_inventory**.
     *
     *
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be
     * automatically generated for the new record and returned in the `x-record-uuid` response
     * header.
     *
     * @summary Create a new Material
     * @throws FetchError<400, types.CreateMaterialsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.CreateMaterialsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.CreateMaterialsResponse403> Forbidden - You don't have permission to create this resource
     * @throws FetchError<429, types.CreateMaterialsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.CreateMaterialsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.createMaterials = function (body) {
        return this.core.fetch('/material.json', 'post', body);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_inventory**.
     *
     * @summary Retrieve a Material
     * @throws FetchError<400, types.GetMaterialsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.GetMaterialsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.GetMaterialsResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<404, types.GetMaterialsResponse404> Not Found - The requested record does not exist or has been deleted
     * @throws FetchError<429, types.GetMaterialsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.GetMaterialsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.getMaterials = function (metadata) {
        return this.core.fetch('/material/{uuid}.json', 'get', metadata);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_inventory**.
     *
     * @summary Update a Material
     * @throws FetchError<400, types.UpdateMaterialsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.UpdateMaterialsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.UpdateMaterialsResponse403> Forbidden - You don't have permission to update this resource
     * @throws FetchError<404, types.UpdateMaterialsResponse404> Not Found - The record to update does not exist or has been deleted
     * @throws FetchError<429, types.UpdateMaterialsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.UpdateMaterialsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.updateMaterials = function (body, metadata) {
        return this.core.fetch('/material/{uuid}.json', 'post', body, metadata);
    };
    /**
     * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
     * still accessible on the API, but are hidden in the UI. Inactive records can be restored
     * by setting their `active` field to `1`.
     *
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_inventory**.
     *
     * @summary Delete a Material
     * @throws FetchError<400, types.DeleteMaterialsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.DeleteMaterialsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.DeleteMaterialsResponse403> Forbidden - You don't have permission to delete this resource
     * @throws FetchError<404, types.DeleteMaterialsResponse404> Not Found - The record to delete does not exist or has already been deleted
     * @throws FetchError<429, types.DeleteMaterialsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.DeleteMaterialsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.deleteMaterials = function (metadata) {
        return this.core.fetch('/material/{uuid}.json', 'delete', metadata);
    };
    /**
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this
     * request, [go here](/docs/filtering).
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_inventory**.
     *
     * @summary List all Bundles
     * @throws FetchError<400, types.ListBundlesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.ListBundlesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.ListBundlesResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<429, types.ListBundlesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.ListBundlesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.listBundles = function () {
        return this.core.fetch('/materialbundle.json', 'get');
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_inventory**.
     *
     *
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be
     * automatically generated for the new record and returned in the `x-record-uuid` response
     * header.
     *
     * @summary Create a new Bundle
     * @throws FetchError<400, types.CreateBundlesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.CreateBundlesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.CreateBundlesResponse403> Forbidden - You don't have permission to create this resource
     * @throws FetchError<429, types.CreateBundlesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.CreateBundlesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.createBundles = function (body) {
        return this.core.fetch('/materialbundle.json', 'post', body);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_inventory**.
     *
     * @summary Retrieve a Bundle
     * @throws FetchError<400, types.GetBundlesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.GetBundlesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.GetBundlesResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<404, types.GetBundlesResponse404> Not Found - The requested record does not exist or has been deleted
     * @throws FetchError<429, types.GetBundlesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.GetBundlesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.getBundles = function (metadata) {
        return this.core.fetch('/materialbundle/{uuid}.json', 'get', metadata);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_inventory**.
     *
     * @summary Update a Bundle
     * @throws FetchError<400, types.UpdateBundlesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.UpdateBundlesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.UpdateBundlesResponse403> Forbidden - You don't have permission to update this resource
     * @throws FetchError<404, types.UpdateBundlesResponse404> Not Found - The record to update does not exist or has been deleted
     * @throws FetchError<429, types.UpdateBundlesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.UpdateBundlesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.updateBundles = function (body, metadata) {
        return this.core.fetch('/materialbundle/{uuid}.json', 'post', body, metadata);
    };
    /**
     * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
     * still accessible on the API, but are hidden in the UI. Inactive records can be restored
     * by setting their `active` field to `1`.
     *
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_inventory**.
     *
     * @summary Delete a Bundle
     * @throws FetchError<400, types.DeleteBundlesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.DeleteBundlesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.DeleteBundlesResponse403> Forbidden - You don't have permission to delete this resource
     * @throws FetchError<404, types.DeleteBundlesResponse404> Not Found - The record to delete does not exist or has already been deleted
     * @throws FetchError<429, types.DeleteBundlesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.DeleteBundlesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.deleteBundles = function (metadata) {
        return this.core.fetch('/materialbundle/{uuid}.json', 'delete', metadata);
    };
    /**
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this
     * request, [go here](/docs/filtering).
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_job_notes**.
     *
     * @summary List all Notes
     * @throws FetchError<400, types.ListNotesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.ListNotesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.ListNotesResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<429, types.ListNotesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.ListNotesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.listNotes = function () {
        return this.core.fetch('/note.json', 'get');
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **publish_job_notes**.
     *
     *
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be
     * automatically generated for the new record and returned in the `x-record-uuid` response
     * header.
     *
     * @summary Create a new Note
     * @throws FetchError<400, types.CreateNotesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.CreateNotesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.CreateNotesResponse403> Forbidden - You don't have permission to create this resource
     * @throws FetchError<429, types.CreateNotesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.CreateNotesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.createNotes = function (body) {
        return this.core.fetch('/note.json', 'post', body);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_job_notes**.
     *
     * @summary Retrieve a Note
     * @throws FetchError<400, types.GetNotesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.GetNotesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.GetNotesResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<404, types.GetNotesResponse404> Not Found - The requested record does not exist or has been deleted
     * @throws FetchError<429, types.GetNotesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.GetNotesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.getNotes = function (metadata) {
        return this.core.fetch('/dbonote/{uuid}.json', 'get', metadata);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **publish_job_notes**.
     *
     * @summary Update a Note
     * @throws FetchError<400, types.UpdateNotesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.UpdateNotesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.UpdateNotesResponse403> Forbidden - You don't have permission to update this resource
     * @throws FetchError<404, types.UpdateNotesResponse404> Not Found - The record to update does not exist or has been deleted
     * @throws FetchError<429, types.UpdateNotesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.UpdateNotesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.updateNotes = function (body, metadata) {
        return this.core.fetch('/dbonote/{uuid}.json', 'post', body, metadata);
    };
    /**
     * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
     * still accessible on the API, but are hidden in the UI. Inactive records can be restored
     * by setting their `active` field to `1`.
     *
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **publish_job_notes**.
     *
     * @summary Delete a Note
     * @throws FetchError<400, types.DeleteNotesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.DeleteNotesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.DeleteNotesResponse403> Forbidden - You don't have permission to delete this resource
     * @throws FetchError<404, types.DeleteNotesResponse404> Not Found - The record to delete does not exist or has already been deleted
     * @throws FetchError<429, types.DeleteNotesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.DeleteNotesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.deleteNotes = function (metadata) {
        return this.core.fetch('/dbonote/{uuid}.json', 'delete', metadata);
    };
    /**
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this
     * request, [go here](/docs/filtering).
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_job_queues**.
     *
     * @summary List all Job Queues
     * @throws FetchError<400, types.ListJobQueuesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.ListJobQueuesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.ListJobQueuesResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<429, types.ListJobQueuesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.ListJobQueuesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.listJobQueues = function () {
        return this.core.fetch('/queue.json', 'get');
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_job_queues**.
     *
     *
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be
     * automatically generated for the new record and returned in the `x-record-uuid` response
     * header.
     *
     * @summary Create a new Job Queue
     * @throws FetchError<400, types.CreateJobQueuesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.CreateJobQueuesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.CreateJobQueuesResponse403> Forbidden - You don't have permission to create this resource
     * @throws FetchError<429, types.CreateJobQueuesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.CreateJobQueuesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.createJobQueues = function (body) {
        return this.core.fetch('/queue.json', 'post', body);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_job_queues**.
     *
     * @summary Retrieve a Job Queue
     * @throws FetchError<400, types.GetJobQueuesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.GetJobQueuesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.GetJobQueuesResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<404, types.GetJobQueuesResponse404> Not Found - The requested record does not exist or has been deleted
     * @throws FetchError<429, types.GetJobQueuesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.GetJobQueuesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.getJobQueues = function (metadata) {
        return this.core.fetch('/queue/{uuid}.json', 'get', metadata);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_job_queues**.
     *
     * @summary Update a Job Queue
     * @throws FetchError<400, types.UpdateJobQueuesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.UpdateJobQueuesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.UpdateJobQueuesResponse403> Forbidden - You don't have permission to update this resource
     * @throws FetchError<404, types.UpdateJobQueuesResponse404> Not Found - The record to update does not exist or has been deleted
     * @throws FetchError<429, types.UpdateJobQueuesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.UpdateJobQueuesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.updateJobQueues = function (body, metadata) {
        return this.core.fetch('/queue/{uuid}.json', 'post', body, metadata);
    };
    /**
     * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
     * still accessible on the API, but are hidden in the UI. Inactive records can be restored
     * by setting their `active` field to `1`.
     *
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_job_queues**.
     *
     * @summary Delete a Job Queue
     * @throws FetchError<400, types.DeleteJobQueuesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.DeleteJobQueuesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.DeleteJobQueuesResponse403> Forbidden - You don't have permission to delete this resource
     * @throws FetchError<404, types.DeleteJobQueuesResponse404> Not Found - The record to delete does not exist or has already been deleted
     * @throws FetchError<429, types.DeleteJobQueuesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.DeleteJobQueuesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.deleteJobQueues = function (metadata) {
        return this.core.fetch('/queue/{uuid}.json', 'delete', metadata);
    };
    /**
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this
     * request, [go here](/docs/filtering).
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_security_roles**.
     *
     * @summary List all Security Roles
     * @throws FetchError<400, types.ListSecurityRolesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.ListSecurityRolesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.ListSecurityRolesResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<429, types.ListSecurityRolesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.ListSecurityRolesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.listSecurityRoles = function () {
        return this.core.fetch('/securityrole.json', 'get');
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_security_roles**.
     *
     * @summary Retrieve a Security Role
     * @throws FetchError<400, types.GetSecurityRolesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.GetSecurityRolesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.GetSecurityRolesResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<404, types.GetSecurityRolesResponse404> Not Found - The requested record does not exist or has been deleted
     * @throws FetchError<429, types.GetSecurityRolesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.GetSecurityRolesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.getSecurityRoles = function (metadata) {
        return this.core.fetch('/securityrole/{uuid}.json', 'get', metadata);
    };
    /**
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this
     * request, [go here](/docs/filtering).
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_templates**.
     *
     * @summary List all SMS Templates
     * @throws FetchError<400, types.ListSmsTemplatesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.ListSmsTemplatesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.ListSmsTemplatesResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<429, types.ListSmsTemplatesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.ListSmsTemplatesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.listSMSTemplates = function () {
        return this.core.fetch('/smstemplate.json', 'get');
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_templates**.
     *
     *
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be
     * automatically generated for the new record and returned in the `x-record-uuid` response
     * header.
     *
     * @summary Create a new SMS Template
     * @throws FetchError<400, types.CreateSmsTemplatesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.CreateSmsTemplatesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.CreateSmsTemplatesResponse403> Forbidden - You don't have permission to create this resource
     * @throws FetchError<429, types.CreateSmsTemplatesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.CreateSmsTemplatesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.createSMSTemplates = function (body) {
        return this.core.fetch('/smstemplate.json', 'post', body);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_templates**.
     *
     * @summary Retrieve a SMS Template
     * @throws FetchError<400, types.GetSmsTemplatesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.GetSmsTemplatesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.GetSmsTemplatesResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<404, types.GetSmsTemplatesResponse404> Not Found - The requested record does not exist or has been deleted
     * @throws FetchError<429, types.GetSmsTemplatesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.GetSmsTemplatesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.getSMSTemplates = function (metadata) {
        return this.core.fetch('/smstemplate/{uuid}.json', 'get', metadata);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_templates**.
     *
     * @summary Update a SMS Template
     * @throws FetchError<400, types.UpdateSmsTemplatesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.UpdateSmsTemplatesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.UpdateSmsTemplatesResponse403> Forbidden - You don't have permission to update this resource
     * @throws FetchError<404, types.UpdateSmsTemplatesResponse404> Not Found - The record to update does not exist or has been deleted
     * @throws FetchError<429, types.UpdateSmsTemplatesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.UpdateSmsTemplatesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.updateSMSTemplates = function (body, metadata) {
        return this.core.fetch('/smstemplate/{uuid}.json', 'post', body, metadata);
    };
    /**
     * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
     * still accessible on the API, but are hidden in the UI. Inactive records can be restored
     * by setting their `active` field to `1`.
     *
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_templates**.
     *
     * @summary Delete a SMS Template
     * @throws FetchError<400, types.DeleteSmsTemplatesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.DeleteSmsTemplatesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.DeleteSmsTemplatesResponse403> Forbidden - You don't have permission to delete this resource
     * @throws FetchError<404, types.DeleteSmsTemplatesResponse404> Not Found - The record to delete does not exist or has already been deleted
     * @throws FetchError<429, types.DeleteSmsTemplatesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.DeleteSmsTemplatesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.deleteSMSTemplates = function (metadata) {
        return this.core.fetch('/smstemplate/{uuid}.json', 'delete', metadata);
    };
    /**
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this
     * request, [go here](/docs/filtering).
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_staff**.
     *
     * @summary List all Staff Members
     * @throws FetchError<400, types.ListStaffMembersResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.ListStaffMembersResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.ListStaffMembersResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<429, types.ListStaffMembersResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.ListStaffMembersResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.listStaffMembers = function () {
        return this.core.fetch('/staff.json', 'get');
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_staff**.
     *
     *
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be
     * automatically generated for the new record and returned in the `x-record-uuid` response
     * header.
     *
     * @summary Create a new Staff Member
     * @throws FetchError<400, types.CreateStaffMembersResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.CreateStaffMembersResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.CreateStaffMembersResponse403> Forbidden - You don't have permission to create this resource
     * @throws FetchError<429, types.CreateStaffMembersResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.CreateStaffMembersResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.createStaffMembers = function (body) {
        return this.core.fetch('/staff.json', 'post', body);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_staff**.
     *
     * @summary Retrieve a Staff Member
     * @throws FetchError<400, types.GetStaffMembersResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.GetStaffMembersResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.GetStaffMembersResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<404, types.GetStaffMembersResponse404> Not Found - The requested record does not exist or has been deleted
     * @throws FetchError<429, types.GetStaffMembersResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.GetStaffMembersResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.getStaffMembers = function (metadata) {
        return this.core.fetch('/staff/{uuid}.json', 'get', metadata);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_staff**.
     *
     * @summary Update a Staff Member
     * @throws FetchError<400, types.UpdateStaffMembersResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.UpdateStaffMembersResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.UpdateStaffMembersResponse403> Forbidden - You don't have permission to update this resource
     * @throws FetchError<404, types.UpdateStaffMembersResponse404> Not Found - The record to update does not exist or has been deleted
     * @throws FetchError<429, types.UpdateStaffMembersResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.UpdateStaffMembersResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.updateStaffMembers = function (body, metadata) {
        return this.core.fetch('/staff/{uuid}.json', 'post', body, metadata);
    };
    /**
     * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
     * still accessible on the API, but are hidden in the UI. Inactive records can be restored
     * by setting their `active` field to `1`.
     *
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_staff**.
     *
     * @summary Delete a Staff Member
     * @throws FetchError<400, types.DeleteStaffMembersResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.DeleteStaffMembersResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.DeleteStaffMembersResponse403> Forbidden - You don't have permission to delete this resource
     * @throws FetchError<404, types.DeleteStaffMembersResponse404> Not Found - The record to delete does not exist or has already been deleted
     * @throws FetchError<429, types.DeleteStaffMembersResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.DeleteStaffMembersResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.deleteStaffMembers = function (metadata) {
        return this.core.fetch('/staff/{uuid}.json', 'delete', metadata);
    };
    /**
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this
     * request, [go here](/docs/filtering).
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_messages**.
     *
     * @summary List all Staff Messages
     * @throws FetchError<400, types.ListStaffMessagesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.ListStaffMessagesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.ListStaffMessagesResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<429, types.ListStaffMessagesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.ListStaffMessagesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.listStaffMessages = function () {
        return this.core.fetch('/staffmessage.json', 'get');
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **publish_messages**.
     *
     *
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be
     * automatically generated for the new record and returned in the `x-record-uuid` response
     * header.
     *
     * @summary Create a new Staff Message
     * @throws FetchError<400, types.CreateStaffMessagesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.CreateStaffMessagesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.CreateStaffMessagesResponse403> Forbidden - You don't have permission to create this resource
     * @throws FetchError<429, types.CreateStaffMessagesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.CreateStaffMessagesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.createStaffMessages = function (body) {
        return this.core.fetch('/staffmessage.json', 'post', body);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_messages**.
     *
     * @summary Retrieve a Staff Message
     * @throws FetchError<400, types.GetStaffMessagesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.GetStaffMessagesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.GetStaffMessagesResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<404, types.GetStaffMessagesResponse404> Not Found - The requested record does not exist or has been deleted
     * @throws FetchError<429, types.GetStaffMessagesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.GetStaffMessagesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.getStaffMessages = function (metadata) {
        return this.core.fetch('/staffmessage/{uuid}.json', 'get', metadata);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **publish_messages**.
     *
     * @summary Update a Staff Message
     * @throws FetchError<400, types.UpdateStaffMessagesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.UpdateStaffMessagesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.UpdateStaffMessagesResponse403> Forbidden - You don't have permission to update this resource
     * @throws FetchError<404, types.UpdateStaffMessagesResponse404> Not Found - The record to update does not exist or has been deleted
     * @throws FetchError<429, types.UpdateStaffMessagesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.UpdateStaffMessagesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.updateStaffMessages = function (body, metadata) {
        return this.core.fetch('/staffmessage/{uuid}.json', 'post', body, metadata);
    };
    /**
     * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
     * still accessible on the API, but are hidden in the UI. Inactive records can be restored
     * by setting their `active` field to `1`.
     *
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **publish_messages**.
     *
     * @summary Delete a Staff Message
     * @throws FetchError<400, types.DeleteStaffMessagesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.DeleteStaffMessagesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.DeleteStaffMessagesResponse403> Forbidden - You don't have permission to delete this resource
     * @throws FetchError<404, types.DeleteStaffMessagesResponse404> Not Found - The record to delete does not exist or has already been deleted
     * @throws FetchError<429, types.DeleteStaffMessagesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.DeleteStaffMessagesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.deleteStaffMessages = function (metadata) {
        return this.core.fetch('/staffmessage/{uuid}.json', 'delete', metadata);
    };
    /**
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this
     * request, [go here](/docs/filtering).
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_suppliers**.
     *
     * @summary List all Suppliers
     * @throws FetchError<400, types.ListSuppliersResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.ListSuppliersResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.ListSuppliersResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<429, types.ListSuppliersResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.ListSuppliersResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.listSuppliers = function () {
        return this.core.fetch('/supplier.json', 'get');
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_suppliers**.
     *
     *
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be
     * automatically generated for the new record and returned in the `x-record-uuid` response
     * header.
     *
     * @summary Create a new Supplier
     * @throws FetchError<400, types.CreateSuppliersResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.CreateSuppliersResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.CreateSuppliersResponse403> Forbidden - You don't have permission to create this resource
     * @throws FetchError<429, types.CreateSuppliersResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.CreateSuppliersResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.createSuppliers = function (body) {
        return this.core.fetch('/supplier.json', 'post', body);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_suppliers**.
     *
     * @summary Retrieve a Supplier
     * @throws FetchError<400, types.GetSuppliersResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.GetSuppliersResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.GetSuppliersResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<404, types.GetSuppliersResponse404> Not Found - The requested record does not exist or has been deleted
     * @throws FetchError<429, types.GetSuppliersResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.GetSuppliersResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.getSuppliers = function (metadata) {
        return this.core.fetch('/supplier/{uuid}.json', 'get', metadata);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_suppliers**.
     *
     * @summary Update a Supplier
     * @throws FetchError<400, types.UpdateSuppliersResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.UpdateSuppliersResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.UpdateSuppliersResponse403> Forbidden - You don't have permission to update this resource
     * @throws FetchError<404, types.UpdateSuppliersResponse404> Not Found - The record to update does not exist or has been deleted
     * @throws FetchError<429, types.UpdateSuppliersResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.UpdateSuppliersResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.updateSuppliers = function (body, metadata) {
        return this.core.fetch('/supplier/{uuid}.json', 'post', body, metadata);
    };
    /**
     * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
     * still accessible on the API, but are hidden in the UI. Inactive records can be restored
     * by setting their `active` field to `1`.
     *
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_suppliers**.
     *
     * @summary Delete a Supplier
     * @throws FetchError<400, types.DeleteSuppliersResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.DeleteSuppliersResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.DeleteSuppliersResponse403> Forbidden - You don't have permission to delete this resource
     * @throws FetchError<404, types.DeleteSuppliersResponse404> Not Found - The record to delete does not exist or has already been deleted
     * @throws FetchError<429, types.DeleteSuppliersResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.DeleteSuppliersResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.deleteSuppliers = function (metadata) {
        return this.core.fetch('/supplier/{uuid}.json', 'delete', metadata);
    };
    /**
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this
     * request, [go here](/docs/filtering).
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_tasks**.
     *
     * @summary List all Tasks
     * @throws FetchError<400, types.ListTasksResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.ListTasksResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.ListTasksResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<429, types.ListTasksResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.ListTasksResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.listTasks = function () {
        return this.core.fetch('/task.json', 'get');
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_tasks**.
     *
     *
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be
     * automatically generated for the new record and returned in the `x-record-uuid` response
     * header.
     *
     * @summary Create a new Task
     * @throws FetchError<400, types.CreateTasksResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.CreateTasksResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.CreateTasksResponse403> Forbidden - You don't have permission to create this resource
     * @throws FetchError<429, types.CreateTasksResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.CreateTasksResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.createTasks = function (body) {
        return this.core.fetch('/task.json', 'post', body);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_tasks**.
     *
     * @summary Retrieve a Task
     * @throws FetchError<400, types.GetTasksResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.GetTasksResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.GetTasksResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<404, types.GetTasksResponse404> Not Found - The requested record does not exist or has been deleted
     * @throws FetchError<429, types.GetTasksResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.GetTasksResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.getTasks = function (metadata) {
        return this.core.fetch('/task/{uuid}.json', 'get', metadata);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_tasks**.
     *
     * @summary Update a Task
     * @throws FetchError<400, types.UpdateTasksResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.UpdateTasksResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.UpdateTasksResponse403> Forbidden - You don't have permission to update this resource
     * @throws FetchError<404, types.UpdateTasksResponse404> Not Found - The record to update does not exist or has been deleted
     * @throws FetchError<429, types.UpdateTasksResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.UpdateTasksResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.updateTasks = function (body, metadata) {
        return this.core.fetch('/task/{uuid}.json', 'post', body, metadata);
    };
    /**
     * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
     * still accessible on the API, but are hidden in the UI. Inactive records can be restored
     * by setting their `active` field to `1`.
     *
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_tasks**.
     *
     * @summary Delete a Task
     * @throws FetchError<400, types.DeleteTasksResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.DeleteTasksResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.DeleteTasksResponse403> Forbidden - You don't have permission to delete this resource
     * @throws FetchError<404, types.DeleteTasksResponse404> Not Found - The record to delete does not exist or has already been deleted
     * @throws FetchError<429, types.DeleteTasksResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.DeleteTasksResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.deleteTasks = function (metadata) {
        return this.core.fetch('/task/{uuid}.json', 'delete', metadata);
    };
    /**
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this
     * request, [go here](/docs/filtering).
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_tax_rates**.
     *
     * @summary List all Tax Rates
     * @throws FetchError<400, types.ListTaxRatesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.ListTaxRatesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.ListTaxRatesResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<429, types.ListTaxRatesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.ListTaxRatesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.listTaxRates = function () {
        return this.core.fetch('/taxrate.json', 'get');
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_tax_rates**.
     *
     *
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be
     * automatically generated for the new record and returned in the `x-record-uuid` response
     * header.
     *
     * @summary Create a new Tax Rate
     * @throws FetchError<400, types.CreateTaxRatesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.CreateTaxRatesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.CreateTaxRatesResponse403> Forbidden - You don't have permission to create this resource
     * @throws FetchError<429, types.CreateTaxRatesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.CreateTaxRatesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.createTaxRates = function (body) {
        return this.core.fetch('/taxrate.json', 'post', body);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_tax_rates**.
     *
     * @summary Retrieve a Tax Rate
     * @throws FetchError<400, types.GetTaxRatesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.GetTaxRatesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.GetTaxRatesResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<404, types.GetTaxRatesResponse404> Not Found - The requested record does not exist or has been deleted
     * @throws FetchError<429, types.GetTaxRatesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.GetTaxRatesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.getTaxRates = function (metadata) {
        return this.core.fetch('/taxrate/{uuid}.json', 'get', metadata);
    };
    /**
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_tax_rates**.
     *
     * @summary Update a Tax Rate
     * @throws FetchError<400, types.UpdateTaxRatesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.UpdateTaxRatesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.UpdateTaxRatesResponse403> Forbidden - You don't have permission to update this resource
     * @throws FetchError<404, types.UpdateTaxRatesResponse404> Not Found - The record to update does not exist or has been deleted
     * @throws FetchError<429, types.UpdateTaxRatesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.UpdateTaxRatesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.updateTaxRates = function (body, metadata) {
        return this.core.fetch('/taxrate/{uuid}.json', 'post', body, metadata);
    };
    /**
     * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
     * still accessible on the API, but are hidden in the UI. Inactive records can be restored
     * by setting their `active` field to `1`.
     *
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_tax_rates**.
     *
     * @summary Delete a Tax Rate
     * @throws FetchError<400, types.DeleteTaxRatesResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.DeleteTaxRatesResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.DeleteTaxRatesResponse403> Forbidden - You don't have permission to delete this resource
     * @throws FetchError<404, types.DeleteTaxRatesResponse404> Not Found - The record to delete does not exist or has already been deleted
     * @throws FetchError<429, types.DeleteTaxRatesResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.DeleteTaxRatesResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.deleteTaxRates = function (metadata) {
        return this.core.fetch('/taxrate/{uuid}.json', 'delete', metadata);
    };
    /**
     * Vendor account information
     *
     *
     *
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this
     * request, [go here](/docs/filtering).
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **vendor**.
     *
     * @summary List all Vendors
     * @throws FetchError<400, types.ListVendorsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.ListVendorsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.ListVendorsResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<429, types.ListVendorsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.ListVendorsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.listVendors = function () {
        return this.core.fetch('/vendor.json', 'get');
    };
    /**
     * Vendor account information
     *
     *
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **vendor**.
     *
     * @summary Retrieve a Vendor
     * @throws FetchError<400, types.GetVendorsResponse400> Bad Request - The request is malformed or contains invalid parameters
     * @throws FetchError<401, types.GetVendorsResponse401> Unauthorized - Authentication credentials are missing or invalid
     * @throws FetchError<403, types.GetVendorsResponse403> Forbidden - You don't have permission to access this resource
     * @throws FetchError<404, types.GetVendorsResponse404> Not Found - The requested record does not exist or has been deleted
     * @throws FetchError<429, types.GetVendorsResponse429> Too Many Requests - You have exceeded the rate limit
     * @throws FetchError<500, types.GetVendorsResponse500> Internal Server Error - An unexpected error occurred on the server
     */
    SDK.prototype.getVendors = function (metadata) {
        return this.core.fetch('/vendor/{uuid}.json', 'get', metadata);
    };
    /**
     * Creates a new job by cloning an existing job template. All template entities (tasks,
     * materials, checklists, quotes, custom fields) are cloned to the new job.
     *
     * #### Field Overrides
     * Only the following fields can be overridden when creating a job from a template:
     * - `job_description` - Job description
     * - `company_uuid` - UUID of the company/client
     * - `company_name` - Name of the company/client (will lookup existing or create new)
     * - `job_address` - Street address for the job
     *
     * **Note:** You cannot specify both `company_uuid` and `company_name`. If `company_name`
     * is provided, the system will first search for an existing company with that name. If
     * found, it will use that company's UUID. If not found, a new company will be created.
     *
     * Any other fields in the request body will be ignored.
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **create_jobs**.
     *
     * @summary Create a job from a template
     * @throws FetchError<400, types.CreateJobFromTemplateResponse400> Bad request - Invalid input data
     * @throws FetchError<403, types.CreateJobFromTemplateResponse403> Forbidden - Missing required OAuth scope
     * @throws FetchError<404, types.CreateJobFromTemplateResponse404> Not Found - Template UUID not found or inactive
     * @throws FetchError<405, types.CreateJobFromTemplateResponse405> Method Not Allowed
     * @throws FetchError<500, types.CreateJobFromTemplateResponse500> Internal Server Error
     */
    SDK.prototype.createJobFromTemplate = function (body, metadata) {
        return this.core.fetch('/jobtemplate/{uuid}/job.json', 'post', body, metadata);
    };
    /**
     * Performs a text search across jobs, companies, and materials. Returns combined results
     * sorted by relevance.
     *
     * @summary Search across multiple object types
     * @throws FetchError<400, types.GeneralSearchResponse400> Bad request - Missing query parameter
     * @throws FetchError<500, types.GeneralSearchResponse500> Internal server error
     */
    SDK.prototype.generalSearch = function (metadata) {
        return this.core.fetch('/search.json', 'get', metadata);
    };
    /**
     * Performs a text search within a specific object type. Supported types: job, company,
     * material, knowledgearticle, attachment, formresponse, asset, materialbundle
     *
     * @summary Search within a specific object type
     * @throws FetchError<400, types.ObjectSearchResponse400> Bad request
     * @throws FetchError<429, types.ObjectSearchResponse429> Too many requests - Search throttled
     * @throws FetchError<500, types.ObjectSearchResponse500> Internal server error
     */
    SDK.prototype.objectSearch = function (metadata) {
        return this.core.fetch('/search/{objectType}.json', 'get', metadata);
    };
    /**
     * Harness the power of advanced AI embeddings to revolutionise how you search through job
     * data. This endpoint transforms your search query into high-dimensional vector
     * embeddings, then intelligently matches it against our entire job database using semantic
     * similarity algorithms.
     *
     * How it works:
     * 1. AI Query Understanding - Your search terms are processed through neural embedding
     * models that understand context, intent, and meaning
     * 2. Vector-Based Matching - The system compares your query against vector representations
     * of all job content in real-time
     * 3. Intelligent Ranking - Returns results ranked by semantic similarity, not just keyword
     * matching
     *
     * Why this matters:
     * - Find jobs about "plumbing repairs" even when searching for "fixing pipes"
     * - Discover relevant work orders that use different terminology but share the same intent
     * - Uncover hidden patterns and connections in your job data that traditional search would
     * miss
     *
     * This isn't just search—it's AI that truly understands what you're looking for and
     * delivers the most relevant results, even when the exact words don't match.
     *
     * @summary Semantic search for jobs
     * @throws FetchError<400, types.JobEmbeddingSearchResponse400> Bad request
     * @throws FetchError<500, types.JobEmbeddingSearchResponse500> Internal server error
     * @throws FetchError<503, types.JobEmbeddingSearchResponse503> Service unavailable - Embedding search not available
     */
    SDK.prototype.jobEmbeddingSearch = function (metadata) {
        return this.core.fetch('/search/job/embedding.json', 'get', metadata);
    };
    /**
     * Retrieves a paginated list of inbox messages with optional filtering
     *
     * @summary List inbox messages
     * @throws FetchError<400, types.ListInboxMessagesResponse400> Service Unavailable - Inbox not enabled
     * @throws FetchError<403, types.ListInboxMessagesResponse403> Forbidden - Missing permission or OAuth scope
     */
    SDK.prototype.listInboxMessages = function (metadata) {
        return this.core.fetch('/inboxmessage.json', 'get', metadata);
    };
    /**
     * Creates a new inbox message that will appear in the inbox
     *
     * @summary Create a new inbox message
     * @throws FetchError<400, types.CreateInboxMessageResponse400> Bad request - Invalid input
     * @throws FetchError<403, types.CreateInboxMessageResponse403> Forbidden - Missing permission or OAuth scope
     * @throws FetchError<404, types.CreateInboxMessageResponse404> Not found - Related entity not found
     * @throws FetchError<500, types.CreateInboxMessageResponse500> Internal server error
     */
    SDK.prototype.createInboxMessage = function (body) {
        return this.core.fetch('/inboxmessage.json', 'post', body);
    };
    /**
     * Retrieves detailed information about a specific inbox message including attachments and
     * conversation history
     *
     * @summary Get inbox message details
     * @throws FetchError<404, types.GetInboxMessageResponse404> Message not found
     */
    SDK.prototype.getInboxMessage = function (metadata) {
        return this.core.fetch('/inboxmessage/{uuid}.json', 'get', metadata);
    };
    /**
     * Marks an inbox message as read
     *
     * @summary Mark message as read
     * @throws FetchError<404, types.MarkInboxMessageAsReadResponse404> Message not found
     */
    SDK.prototype.markInboxMessageAsRead = function (metadata) {
        return this.core.fetch('/inboxmessage/{uuid}/read.json', 'put', metadata);
    };
    /**
     * Archives or unarchives an inbox message
     *
     * @summary Archive or unarchive message
     */
    SDK.prototype.archiveInboxMessage = function (body, metadata) {
        return this.core.fetch('/inboxmessage/{uuid}/archive.json', 'put', body, metadata);
    };
    /**
     * Snoozes a message until a specified date/time or unsnoozes it
     *
     * @summary Snooze or unsnooze message
     * @throws FetchError<400, types.SnoozeInboxMessageResponse400> Bad request - Invalid snooze date
     */
    SDK.prototype.snoozeInboxMessage = function (body, metadata) {
        return this.core.fetch('/inboxmessage/{uuid}/snooze.json', 'put', body, metadata);
    };
    /**
     * Converts an inbox message into a new job, optionally using a job template
     *
     * @summary Convert message to job
     */
    SDK.prototype.convertInboxMessageToJob = function (body, metadata) {
        return this.core.fetch('/inboxmessage/{uuid}/convert-to-job.json', 'post', body, metadata);
    };
    /**
     * Attaches an inbox message to an existing job
     *
     * @summary Attach message to existing job
     * @throws FetchError<404, types.AttachInboxMessageToJobResponse404> Job not found
     */
    SDK.prototype.attachInboxMessageToJob = function (body, metadata) {
        return this.core.fetch('/inboxmessage/{uuid}/attach-to-job.json', 'post', body, metadata);
    };
    /**
     * Adds a note to an inbox message
     *
     * @summary Add note to message
     * @throws FetchError<400, types.AddNoteToInboxMessageResponse400> Bad request - Empty note
     */
    SDK.prototype.addNoteToInboxMessage = function (body, metadata) {
        return this.core.fetch('/inboxmessage/{uuid}/notes.json', 'post', body, metadata);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
