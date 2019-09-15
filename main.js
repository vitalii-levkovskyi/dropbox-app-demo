/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/d/index.js":
/*!*********************************!*\
  !*** ./node_modules/d/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isValue         = __webpack_require__(/*! type/value/is */ \"./node_modules/type/value/is.js\")\n  , isPlainFunction = __webpack_require__(/*! type/plain-function/is */ \"./node_modules/type/plain-function/is.js\")\n  , assign          = __webpack_require__(/*! es5-ext/object/assign */ \"./node_modules/es5-ext/object/assign/index.js\")\n  , normalizeOpts   = __webpack_require__(/*! es5-ext/object/normalize-options */ \"./node_modules/es5-ext/object/normalize-options.js\")\n  , contains        = __webpack_require__(/*! es5-ext/string/#/contains */ \"./node_modules/es5-ext/string/#/contains/index.js\");\n\nvar d = (module.exports = function (dscr, value/*, options*/) {\n\tvar c, e, w, options, desc;\n\tif (arguments.length < 2 || typeof dscr !== \"string\") {\n\t\toptions = value;\n\t\tvalue = dscr;\n\t\tdscr = null;\n\t} else {\n\t\toptions = arguments[2];\n\t}\n\tif (isValue(dscr)) {\n\t\tc = contains.call(dscr, \"c\");\n\t\te = contains.call(dscr, \"e\");\n\t\tw = contains.call(dscr, \"w\");\n\t} else {\n\t\tc = w = true;\n\t\te = false;\n\t}\n\n\tdesc = { value: value, configurable: c, enumerable: e, writable: w };\n\treturn !options ? desc : assign(normalizeOpts(options), desc);\n});\n\nd.gs = function (dscr, get, set/*, options*/) {\n\tvar c, e, options, desc;\n\tif (typeof dscr !== \"string\") {\n\t\toptions = set;\n\t\tset = get;\n\t\tget = dscr;\n\t\tdscr = null;\n\t} else {\n\t\toptions = arguments[3];\n\t}\n\tif (!isValue(get)) {\n\t\tget = undefined;\n\t} else if (!isPlainFunction(get)) {\n\t\toptions = get;\n\t\tget = set = undefined;\n\t} else if (!isValue(set)) {\n\t\tset = undefined;\n\t} else if (!isPlainFunction(set)) {\n\t\toptions = set;\n\t\tset = undefined;\n\t}\n\tif (isValue(dscr)) {\n\t\tc = contains.call(dscr, \"c\");\n\t\te = contains.call(dscr, \"e\");\n\t} else {\n\t\tc = true;\n\t\te = false;\n\t}\n\n\tdesc = { get: get, set: set, configurable: c, enumerable: e };\n\treturn !options ? desc : assign(normalizeOpts(options), desc);\n};\n\n\n//# sourceURL=webpack:///./node_modules/d/index.js?");

/***/ }),

/***/ "./node_modules/dropbox/dist/Dropbox-sdk.min.js":
/*!******************************************************!*\
  !*** ./node_modules/dropbox/dist/Dropbox-sdk.min.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("!function(e,t){ true?module.exports=t():undefined}(this,function(){\"use strict\";function e(){return\"undefined\"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope||\"undefined\"==typeof module||\"undefined\"!=typeof window}function t(e){return\"https://\"+e+\".dropboxapi.com/2/\"}function r(e){return JSON.stringify(e).replace(/[\\u007f-\\uffff]/g,function(e){return\"\\\\u\"+(\"000\"+e.charCodeAt(0).toString(16)).slice(-4)})}function n(e){var t=e.length;if(t%4>0)throw Error(\"Invalid string. Length must be a multiple of 4\");return\"=\"===e[t-2]?2:\"=\"===e[t-1]?1:0}var i={};i.authTokenFromOauth1=function(e){return this.request(\"auth/token/from_oauth1\",e,\"app\",\"api\",\"rpc\")},i.authTokenRevoke=function(e){return this.request(\"auth/token/revoke\",e,\"user\",\"api\",\"rpc\")},i.contactsDeleteManualContacts=function(e){return this.request(\"contacts/delete_manual_contacts\",e,\"user\",\"api\",\"rpc\")},i.contactsDeleteManualContactsBatch=function(e){return this.request(\"contacts/delete_manual_contacts_batch\",e,\"user\",\"api\",\"rpc\")},i.filePropertiesPropertiesAdd=function(e){return this.request(\"file_properties/properties/add\",e,\"user\",\"api\",\"rpc\")},i.filePropertiesPropertiesOverwrite=function(e){return this.request(\"file_properties/properties/overwrite\",e,\"user\",\"api\",\"rpc\")},i.filePropertiesPropertiesRemove=function(e){return this.request(\"file_properties/properties/remove\",e,\"user\",\"api\",\"rpc\")},i.filePropertiesPropertiesSearch=function(e){return this.request(\"file_properties/properties/search\",e,\"user\",\"api\",\"rpc\")},i.filePropertiesPropertiesSearchContinue=function(e){return this.request(\"file_properties/properties/search/continue\",e,\"user\",\"api\",\"rpc\")},i.filePropertiesPropertiesUpdate=function(e){return this.request(\"file_properties/properties/update\",e,\"user\",\"api\",\"rpc\")},i.filePropertiesTemplatesAddForTeam=function(e){return this.request(\"file_properties/templates/add_for_team\",e,\"team\",\"api\",\"rpc\")},i.filePropertiesTemplatesAddForUser=function(e){return this.request(\"file_properties/templates/add_for_user\",e,\"user\",\"api\",\"rpc\")},i.filePropertiesTemplatesGetForTeam=function(e){return this.request(\"file_properties/templates/get_for_team\",e,\"team\",\"api\",\"rpc\")},i.filePropertiesTemplatesGetForUser=function(e){return this.request(\"file_properties/templates/get_for_user\",e,\"user\",\"api\",\"rpc\")},i.filePropertiesTemplatesListForTeam=function(e){return this.request(\"file_properties/templates/list_for_team\",e,\"team\",\"api\",\"rpc\")},i.filePropertiesTemplatesListForUser=function(e){return this.request(\"file_properties/templates/list_for_user\",e,\"user\",\"api\",\"rpc\")},i.filePropertiesTemplatesRemoveForTeam=function(e){return this.request(\"file_properties/templates/remove_for_team\",e,\"team\",\"api\",\"rpc\")},i.filePropertiesTemplatesRemoveForUser=function(e){return this.request(\"file_properties/templates/remove_for_user\",e,\"user\",\"api\",\"rpc\")},i.filePropertiesTemplatesUpdateForTeam=function(e){return this.request(\"file_properties/templates/update_for_team\",e,\"team\",\"api\",\"rpc\")},i.filePropertiesTemplatesUpdateForUser=function(e){return this.request(\"file_properties/templates/update_for_user\",e,\"user\",\"api\",\"rpc\")},i.fileRequestsCount=function(e){return this.request(\"file_requests/count\",e,\"user\",\"api\",\"rpc\")},i.fileRequestsCreate=function(e){return this.request(\"file_requests/create\",e,\"user\",\"api\",\"rpc\")},i.fileRequestsDelete=function(e){return this.request(\"file_requests/delete\",e,\"user\",\"api\",\"rpc\")},i.fileRequestsDeleteAllClosed=function(e){return this.request(\"file_requests/delete_all_closed\",e,\"user\",\"api\",\"rpc\")},i.fileRequestsGet=function(e){return this.request(\"file_requests/get\",e,\"user\",\"api\",\"rpc\")},i.fileRequestsListV2=function(e){return this.request(\"file_requests/list_v2\",e,\"user\",\"api\",\"rpc\")},i.fileRequestsList=function(e){return this.request(\"file_requests/list\",e,\"user\",\"api\",\"rpc\")},i.fileRequestsListContinue=function(e){return this.request(\"file_requests/list/continue\",e,\"user\",\"api\",\"rpc\")},i.fileRequestsUpdate=function(e){return this.request(\"file_requests/update\",e,\"user\",\"api\",\"rpc\")},i.filesAlphaGetMetadata=function(e){return this.request(\"files/alpha/get_metadata\",e,\"user\",\"api\",\"rpc\")},i.filesAlphaUpload=function(e){return this.request(\"files/alpha/upload\",e,\"user\",\"content\",\"upload\")},i.filesCopyV2=function(e){return this.request(\"files/copy_v2\",e,\"user\",\"api\",\"rpc\")},i.filesCopy=function(e){return this.request(\"files/copy\",e,\"user\",\"api\",\"rpc\")},i.filesCopyBatchV2=function(e){return this.request(\"files/copy_batch_v2\",e,\"user\",\"api\",\"rpc\")},i.filesCopyBatch=function(e){return this.request(\"files/copy_batch\",e,\"user\",\"api\",\"rpc\")},i.filesCopyBatchCheckV2=function(e){return this.request(\"files/copy_batch/check_v2\",e,\"user\",\"api\",\"rpc\")},i.filesCopyBatchCheck=function(e){return this.request(\"files/copy_batch/check\",e,\"user\",\"api\",\"rpc\")},i.filesCopyReferenceGet=function(e){return this.request(\"files/copy_reference/get\",e,\"user\",\"api\",\"rpc\")},i.filesCopyReferenceSave=function(e){return this.request(\"files/copy_reference/save\",e,\"user\",\"api\",\"rpc\")},i.filesCreateFolderV2=function(e){return this.request(\"files/create_folder_v2\",e,\"user\",\"api\",\"rpc\")},i.filesCreateFolder=function(e){return this.request(\"files/create_folder\",e,\"user\",\"api\",\"rpc\")},i.filesCreateFolderBatch=function(e){return this.request(\"files/create_folder_batch\",e,\"user\",\"api\",\"rpc\")},i.filesCreateFolderBatchCheck=function(e){return this.request(\"files/create_folder_batch/check\",e,\"user\",\"api\",\"rpc\")},i.filesDeleteV2=function(e){return this.request(\"files/delete_v2\",e,\"user\",\"api\",\"rpc\")},i.filesDelete=function(e){return this.request(\"files/delete\",e,\"user\",\"api\",\"rpc\")},i.filesDeleteBatch=function(e){return this.request(\"files/delete_batch\",e,\"user\",\"api\",\"rpc\")},i.filesDeleteBatchCheck=function(e){return this.request(\"files/delete_batch/check\",e,\"user\",\"api\",\"rpc\")},i.filesDownload=function(e){return this.request(\"files/download\",e,\"user\",\"content\",\"download\")},i.filesDownloadZip=function(e){return this.request(\"files/download_zip\",e,\"user\",\"content\",\"download\")},i.filesExport=function(e){return this.request(\"files/export\",e,\"user\",\"content\",\"download\")},i.filesGetMetadata=function(e){return this.request(\"files/get_metadata\",e,\"user\",\"api\",\"rpc\")},i.filesGetPreview=function(e){return this.request(\"files/get_preview\",e,\"user\",\"content\",\"download\")},i.filesGetTemporaryLink=function(e){return this.request(\"files/get_temporary_link\",e,\"user\",\"api\",\"rpc\")},i.filesGetTemporaryUploadLink=function(e){return this.request(\"files/get_temporary_upload_link\",e,\"user\",\"api\",\"rpc\")},i.filesGetThumbnail=function(e){return this.request(\"files/get_thumbnail\",e,\"user\",\"content\",\"download\")},i.filesGetThumbnailBatch=function(e){return this.request(\"files/get_thumbnail_batch\",e,\"user\",\"content\",\"rpc\")},i.filesListFolder=function(e){return this.request(\"files/list_folder\",e,\"user\",\"api\",\"rpc\")},i.filesListFolderContinue=function(e){return this.request(\"files/list_folder/continue\",e,\"user\",\"api\",\"rpc\")},i.filesListFolderGetLatestCursor=function(e){return this.request(\"files/list_folder/get_latest_cursor\",e,\"user\",\"api\",\"rpc\")},i.filesListFolderLongpoll=function(e){return this.request(\"files/list_folder/longpoll\",e,\"noauth\",\"notify\",\"rpc\")},i.filesListRevisions=function(e){return this.request(\"files/list_revisions\",e,\"user\",\"api\",\"rpc\")},i.filesMoveV2=function(e){return this.request(\"files/move_v2\",e,\"user\",\"api\",\"rpc\")},i.filesMove=function(e){return this.request(\"files/move\",e,\"user\",\"api\",\"rpc\")},i.filesMoveBatchV2=function(e){return this.request(\"files/move_batch_v2\",e,\"user\",\"api\",\"rpc\")},i.filesMoveBatch=function(e){return this.request(\"files/move_batch\",e,\"user\",\"api\",\"rpc\")},i.filesMoveBatchCheckV2=function(e){return this.request(\"files/move_batch/check_v2\",e,\"user\",\"api\",\"rpc\")},i.filesMoveBatchCheck=function(e){return this.request(\"files/move_batch/check\",e,\"user\",\"api\",\"rpc\")},i.filesPermanentlyDelete=function(e){return this.request(\"files/permanently_delete\",e,\"user\",\"api\",\"rpc\")},i.filesPropertiesAdd=function(e){return this.request(\"files/properties/add\",e,\"user\",\"api\",\"rpc\")},i.filesPropertiesOverwrite=function(e){return this.request(\"files/properties/overwrite\",e,\"user\",\"api\",\"rpc\")},i.filesPropertiesRemove=function(e){return this.request(\"files/properties/remove\",e,\"user\",\"api\",\"rpc\")},i.filesPropertiesTemplateGet=function(e){return this.request(\"files/properties/template/get\",e,\"user\",\"api\",\"rpc\")},i.filesPropertiesTemplateList=function(e){return this.request(\"files/properties/template/list\",e,\"user\",\"api\",\"rpc\")},i.filesPropertiesUpdate=function(e){return this.request(\"files/properties/update\",e,\"user\",\"api\",\"rpc\")},i.filesRestore=function(e){return this.request(\"files/restore\",e,\"user\",\"api\",\"rpc\")},i.filesSaveUrl=function(e){return this.request(\"files/save_url\",e,\"user\",\"api\",\"rpc\")},i.filesSaveUrlCheckJobStatus=function(e){return this.request(\"files/save_url/check_job_status\",e,\"user\",\"api\",\"rpc\")},i.filesSearch=function(e){return this.request(\"files/search\",e,\"user\",\"api\",\"rpc\")},i.filesUpload=function(e){return this.request(\"files/upload\",e,\"user\",\"content\",\"upload\")},i.filesUploadSessionAppendV2=function(e){return this.request(\"files/upload_session/append_v2\",e,\"user\",\"content\",\"upload\")},i.filesUploadSessionAppend=function(e){return this.request(\"files/upload_session/append\",e,\"user\",\"content\",\"upload\")},i.filesUploadSessionFinish=function(e){return this.request(\"files/upload_session/finish\",e,\"user\",\"content\",\"upload\")},i.filesUploadSessionFinishBatch=function(e){return this.request(\"files/upload_session/finish_batch\",e,\"user\",\"api\",\"rpc\")},i.filesUploadSessionFinishBatchCheck=function(e){return this.request(\"files/upload_session/finish_batch/check\",e,\"user\",\"api\",\"rpc\")},i.filesUploadSessionStart=function(e){return this.request(\"files/upload_session/start\",e,\"user\",\"content\",\"upload\")},i.paperDocsArchive=function(e){return this.request(\"paper/docs/archive\",e,\"user\",\"api\",\"rpc\")},i.paperDocsCreate=function(e){return this.request(\"paper/docs/create\",e,\"user\",\"api\",\"upload\")},i.paperDocsDownload=function(e){return this.request(\"paper/docs/download\",e,\"user\",\"api\",\"download\")},i.paperDocsFolderUsersList=function(e){return this.request(\"paper/docs/folder_users/list\",e,\"user\",\"api\",\"rpc\")},i.paperDocsFolderUsersListContinue=function(e){return this.request(\"paper/docs/folder_users/list/continue\",e,\"user\",\"api\",\"rpc\")},i.paperDocsGetFolderInfo=function(e){return this.request(\"paper/docs/get_folder_info\",e,\"user\",\"api\",\"rpc\")},i.paperDocsList=function(e){return this.request(\"paper/docs/list\",e,\"user\",\"api\",\"rpc\")},i.paperDocsListContinue=function(e){return this.request(\"paper/docs/list/continue\",e,\"user\",\"api\",\"rpc\")},i.paperDocsPermanentlyDelete=function(e){return this.request(\"paper/docs/permanently_delete\",e,\"user\",\"api\",\"rpc\")},i.paperDocsSharingPolicyGet=function(e){return this.request(\"paper/docs/sharing_policy/get\",e,\"user\",\"api\",\"rpc\")},i.paperDocsSharingPolicySet=function(e){return this.request(\"paper/docs/sharing_policy/set\",e,\"user\",\"api\",\"rpc\")},i.paperDocsUpdate=function(e){return this.request(\"paper/docs/update\",e,\"user\",\"api\",\"upload\")},i.paperDocsUsersAdd=function(e){return this.request(\"paper/docs/users/add\",e,\"user\",\"api\",\"rpc\")},i.paperDocsUsersList=function(e){return this.request(\"paper/docs/users/list\",e,\"user\",\"api\",\"rpc\")},i.paperDocsUsersListContinue=function(e){return this.request(\"paper/docs/users/list/continue\",e,\"user\",\"api\",\"rpc\")},i.paperDocsUsersRemove=function(e){return this.request(\"paper/docs/users/remove\",e,\"user\",\"api\",\"rpc\")},i.sharingAddFileMember=function(e){return this.request(\"sharing/add_file_member\",e,\"user\",\"api\",\"rpc\")},i.sharingAddFolderMember=function(e){return this.request(\"sharing/add_folder_member\",e,\"user\",\"api\",\"rpc\")},i.sharingChangeFileMemberAccess=function(e){return this.request(\"sharing/change_file_member_access\",e,\"user\",\"api\",\"rpc\")},i.sharingCheckJobStatus=function(e){return this.request(\"sharing/check_job_status\",e,\"user\",\"api\",\"rpc\")},i.sharingCheckRemoveMemberJobStatus=function(e){return this.request(\"sharing/check_remove_member_job_status\",e,\"user\",\"api\",\"rpc\")},i.sharingCheckShareJobStatus=function(e){return this.request(\"sharing/check_share_job_status\",e,\"user\",\"api\",\"rpc\")},i.sharingCreateSharedLink=function(e){return this.request(\"sharing/create_shared_link\",e,\"user\",\"api\",\"rpc\")},i.sharingCreateSharedLinkWithSettings=function(e){return this.request(\"sharing/create_shared_link_with_settings\",e,\"user\",\"api\",\"rpc\")},i.sharingGetFileMetadata=function(e){return this.request(\"sharing/get_file_metadata\",e,\"user\",\"api\",\"rpc\")},i.sharingGetFileMetadataBatch=function(e){return this.request(\"sharing/get_file_metadata/batch\",e,\"user\",\"api\",\"rpc\")},i.sharingGetFolderMetadata=function(e){return this.request(\"sharing/get_folder_metadata\",e,\"user\",\"api\",\"rpc\")},i.sharingGetSharedLinkFile=function(e){return this.request(\"sharing/get_shared_link_file\",e,\"user\",\"content\",\"download\")},i.sharingGetSharedLinkMetadata=function(e){return this.request(\"sharing/get_shared_link_metadata\",e,\"user\",\"api\",\"rpc\")},i.sharingGetSharedLinks=function(e){return this.request(\"sharing/get_shared_links\",e,\"user\",\"api\",\"rpc\")},i.sharingListFileMembers=function(e){return this.request(\"sharing/list_file_members\",e,\"user\",\"api\",\"rpc\")},i.sharingListFileMembersBatch=function(e){return this.request(\"sharing/list_file_members/batch\",e,\"user\",\"api\",\"rpc\")},i.sharingListFileMembersContinue=function(e){return this.request(\"sharing/list_file_members/continue\",e,\"user\",\"api\",\"rpc\")},i.sharingListFolderMembers=function(e){return this.request(\"sharing/list_folder_members\",e,\"user\",\"api\",\"rpc\")},i.sharingListFolderMembersContinue=function(e){return this.request(\"sharing/list_folder_members/continue\",e,\"user\",\"api\",\"rpc\")},i.sharingListFolders=function(e){return this.request(\"sharing/list_folders\",e,\"user\",\"api\",\"rpc\")},i.sharingListFoldersContinue=function(e){return this.request(\"sharing/list_folders/continue\",e,\"user\",\"api\",\"rpc\")},i.sharingListMountableFolders=function(e){return this.request(\"sharing/list_mountable_folders\",e,\"user\",\"api\",\"rpc\")},i.sharingListMountableFoldersContinue=function(e){return this.request(\"sharing/list_mountable_folders/continue\",e,\"user\",\"api\",\"rpc\")},i.sharingListReceivedFiles=function(e){return this.request(\"sharing/list_received_files\",e,\"user\",\"api\",\"rpc\")},i.sharingListReceivedFilesContinue=function(e){return this.request(\"sharing/list_received_files/continue\",e,\"user\",\"api\",\"rpc\")},i.sharingListSharedLinks=function(e){return this.request(\"sharing/list_shared_links\",e,\"user\",\"api\",\"rpc\")},i.sharingModifySharedLinkSettings=function(e){return this.request(\"sharing/modify_shared_link_settings\",e,\"user\",\"api\",\"rpc\")},i.sharingMountFolder=function(e){return this.request(\"sharing/mount_folder\",e,\"user\",\"api\",\"rpc\")},i.sharingRelinquishFileMembership=function(e){return this.request(\"sharing/relinquish_file_membership\",e,\"user\",\"api\",\"rpc\")},i.sharingRelinquishFolderMembership=function(e){return this.request(\"sharing/relinquish_folder_membership\",e,\"user\",\"api\",\"rpc\")},i.sharingRemoveFileMember=function(e){return this.request(\"sharing/remove_file_member\",e,\"user\",\"api\",\"rpc\")},i.sharingRemoveFileMember2=function(e){return this.request(\"sharing/remove_file_member_2\",e,\"user\",\"api\",\"rpc\")},i.sharingRemoveFolderMember=function(e){return this.request(\"sharing/remove_folder_member\",e,\"user\",\"api\",\"rpc\")},i.sharingRevokeSharedLink=function(e){return this.request(\"sharing/revoke_shared_link\",e,\"user\",\"api\",\"rpc\")},i.sharingSetAccessInheritance=function(e){return this.request(\"sharing/set_access_inheritance\",e,\"user\",\"api\",\"rpc\")},i.sharingShareFolder=function(e){return this.request(\"sharing/share_folder\",e,\"user\",\"api\",\"rpc\")},i.sharingTransferFolder=function(e){return this.request(\"sharing/transfer_folder\",e,\"user\",\"api\",\"rpc\")},i.sharingUnmountFolder=function(e){return this.request(\"sharing/unmount_folder\",e,\"user\",\"api\",\"rpc\")},i.sharingUnshareFile=function(e){return this.request(\"sharing/unshare_file\",e,\"user\",\"api\",\"rpc\")},i.sharingUnshareFolder=function(e){return this.request(\"sharing/unshare_folder\",e,\"user\",\"api\",\"rpc\")},i.sharingUpdateFileMember=function(e){return this.request(\"sharing/update_file_member\",e,\"user\",\"api\",\"rpc\")},i.sharingUpdateFolderMember=function(e){return this.request(\"sharing/update_folder_member\",e,\"user\",\"api\",\"rpc\")},i.sharingUpdateFolderPolicy=function(e){return this.request(\"sharing/update_folder_policy\",e,\"user\",\"api\",\"rpc\")},i.teamLogGetEvents=function(e){return this.request(\"team_log/get_events\",e,\"team\",\"api\",\"rpc\")},i.teamLogGetEventsContinue=function(e){return this.request(\"team_log/get_events/continue\",e,\"team\",\"api\",\"rpc\")},i.usersGetAccount=function(e){return this.request(\"users/get_account\",e,\"user\",\"api\",\"rpc\")},i.usersGetAccountBatch=function(e){return this.request(\"users/get_account_batch\",e,\"user\",\"api\",\"rpc\")},i.usersGetCurrentAccount=function(e){return this.request(\"users/get_current_account\",e,\"user\",\"api\",\"rpc\")},i.usersGetSpaceUsage=function(e){return this.request(\"users/get_space_usage\",e,\"user\",\"api\",\"rpc\")};for(var s=function(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")},o=function(){function e(e,t){for(var r=0;t.length>r;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,\"value\"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=function(e,t){if(\"function\"!=typeof t&&null!==t)throw new TypeError(\"Super expression must either be null or a function, not \"+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){if(!e)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return!t||\"object\"!=typeof t&&\"function\"!=typeof t?e:t},c=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,i=!1,s=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){i=!0,s=e}finally{try{!n&&u.return&&u.return()}finally{if(i)throw s}}return r}(e,t);throw new TypeError(\"Invalid attempt to destructure non-iterable instance\")}}(),p=function(e){return 3*e.length/4-n(e)},f=function(e){var t,r,i,s,o,u=e.length;s=n(e),o=new d(3*u/4-s),r=s>0?u-4:u;var a=0;for(t=0;r>t;t+=4)i=m[e.charCodeAt(t)]<<18|m[e.charCodeAt(t+1)]<<12|m[e.charCodeAt(t+2)]<<6|m[e.charCodeAt(t+3)],o[a++]=i>>16&255,o[a++]=i>>8&255,o[a++]=255&i;return 2===s?(i=m[e.charCodeAt(t)]<<2|m[e.charCodeAt(t+1)]>>4,o[a++]=255&i):1===s&&(i=m[e.charCodeAt(t)]<<10|m[e.charCodeAt(t+1)]<<4|m[e.charCodeAt(t+2)]>>2,o[a++]=i>>8&255,o[a++]=255&i),o},h=function(e){for(var t,r=e.length,n=r%3,i=\"\",s=[],o=0,u=r-n;u>o;o+=16383)s.push(function(e,t,r){for(var n=[],i=t;r>i;i+=3)n.push(function(e){return l[e>>18&63]+l[e>>12&63]+l[e>>6&63]+l[63&e]}((e[i]<<16)+(e[i+1]<<8)+e[i+2]));return n.join(\"\")}(e,o,o+16383>u?u:o+16383));return 1===n?(i+=l[(t=e[r-1])>>2],i+=l[t<<4&63],i+=\"==\"):2===n&&(i+=l[(t=(e[r-2]<<8)+e[r-1])>>10],i+=l[t>>4&63],i+=l[t<<2&63],i+=\"=\"),s.push(i),s.join(\"\")},l=[],m=[],d=\"undefined\"!=typeof Uint8Array?Uint8Array:Array,g=\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\",_=0;64>_;++_)l[_]=g[_],m[g.charCodeAt(_)]=_;m[45]=62,m[95]=63;var b={byteLength:p,toByteArray:f,fromByteArray:h},v={read:function(e,t,r,n,i){var s,o,u=8*i-n-1,a=(1<<u)-1,c=a>>1,p=-7,f=r?i-1:0,h=r?-1:1,l=e[t+f];for(f+=h,s=l&(1<<-p)-1,l>>=-p,p+=u;p>0;s=256*s+e[t+f],f+=h,p-=8);for(o=s&(1<<-p)-1,s>>=-p,p+=n;p>0;o=256*o+e[t+f],f+=h,p-=8);if(0===s)s=1-c;else{if(s===a)return o?NaN:1/0*(l?-1:1);o+=Math.pow(2,n),s-=c}return(l?-1:1)*o*Math.pow(2,s-n)},write:function(e,t,r,n,i,s){var o,u,a,c=8*s-i-1,p=(1<<c)-1,f=p>>1,h=23===i?5.960464477539062e-8:0,l=n?0:s-1,m=n?1:-1,d=0>t||0===t&&0>1/t?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(u=isNaN(t)?1:0,o=p):(o=Math.floor(Math.log(t)/Math.LN2),1>t*(a=Math.pow(2,-o))&&(o--,a*=2),2>(t+=1>o+f?h*Math.pow(2,1-f):h/a)*a||(o++,a/=2),p>o+f?1>o+f?(u=t*Math.pow(2,f-1)*Math.pow(2,i),o=0):(u=(t*a-1)*Math.pow(2,i),o+=f):(u=0,o=p));i>=8;e[r+l]=255&u,l+=m,u/=256,i-=8);for(o=o<<i|u,c+=i;c>0;e[r+l]=255&o,l+=m,o/=256,c-=8);e[r+l-m]|=128*d}},y=function(e,t){return t={exports:{}},e(t,t.exports),t.exports}(function(e,t){function r(e){if(e>C)throw new RangeError(\"Invalid typed array length\");var t=new Uint8Array(e);return t.__proto__=n.prototype,t}function n(e,t,r){if(\"number\"==typeof e){if(\"string\"==typeof t)throw Error(\"If encoding is specified then the first argument must be a string\");return o(e)}return i(e,t,r)}function i(e,t,i){if(\"number\"==typeof e)throw new TypeError('\"value\" argument must not be a number');return L(e)?function(e,t,r){if(0>t||t>e.byteLength)throw new RangeError(\"'offset' is out of bounds\");if(t+(r||0)>e.byteLength)throw new RangeError(\"'length' is out of bounds\");var i;i=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r);return i.__proto__=n.prototype,i}(e,t,i):\"string\"==typeof e?function(e,t){\"string\"==typeof t&&\"\"!==t||(t=\"utf8\");if(!n.isEncoding(t))throw new TypeError('\"encoding\" must be a valid string encoding');var i=0|c(e,t),s=r(i),o=s.write(e,t);o!==i&&(s=s.slice(0,o));return s}(e,t):function(e){if(n.isBuffer(e)){var t=0|a(e.length),i=r(t);return 0===i.length?i:(e.copy(i,0,0,t),i)}if(e){if(S(e)||\"length\"in e)return\"number\"!=typeof e.length||E(e.length)?r(0):u(e);if(\"Buffer\"===e.type&&Array.isArray(e.data))return u(e.data)}throw new TypeError(\"First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.\")}(e)}function s(e){if(\"number\"!=typeof e)throw new TypeError('\"size\" argument must be a number');if(0>e)throw new RangeError('\"size\" argument must not be negative')}function o(e){return s(e),r(0>e?0:0|a(e))}function u(e){for(var t=0>e.length?0:0|a(e.length),n=r(t),i=0;t>i;i+=1)n[i]=255&e[i];return n}function a(e){if(e>=C)throw new RangeError(\"Attempt to allocate Buffer larger than maximum size: 0x\"+C.toString(16)+\" bytes\");return 0|e}function c(e,t){if(n.isBuffer(e))return e.length;if(S(e)||L(e))return e.byteLength;\"string\"!=typeof e&&(e=\"\"+e);var r=e.length;if(0===r)return 0;for(var i=!1;;)switch(t){case\"ascii\":case\"latin1\":case\"binary\":return r;case\"utf8\":case\"utf-8\":case void 0:return w(e).length;case\"ucs2\":case\"ucs-2\":case\"utf16le\":case\"utf-16le\":return 2*r;case\"hex\":return r>>>1;case\"base64\":return k(e).length;default:if(i)return w(e).length;t=(\"\"+t).toLowerCase(),i=!0}}function p(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function f(e,t,r,i,s){if(0===e.length)return-1;if(\"string\"==typeof r?(i=r,r=0):r>2147483647?r=2147483647:-2147483648>r&&(r=-2147483648),r=+r,E(r)&&(r=s?0:e.length-1),0>r&&(r=e.length+r),e.length>r){if(0>r){if(!s)return-1;r=0}}else{if(s)return-1;r=e.length-1}if(\"string\"==typeof t&&(t=n.from(t,i)),n.isBuffer(t))return 0===t.length?-1:h(e,t,r,i,s);if(\"number\"==typeof t)return t&=255,\"function\"==typeof Uint8Array.prototype.indexOf?s?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):h(e,[t],r,i,s);throw new TypeError(\"val must be string, number or Buffer\")}function h(e,t,r,n,i){function s(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}var o=1,u=e.length,a=t.length;if(void 0!==n&&(\"ucs2\"===(n=(n+\"\").toLowerCase())||\"ucs-2\"===n||\"utf16le\"===n||\"utf-16le\"===n)){if(2>e.length||2>t.length)return-1;o=2,u/=2,a/=2,r/=2}var c;if(i){var p=-1;for(c=r;u>c;c++)if(s(e,c)===s(t,-1===p?0:c-p)){if(-1===p&&(p=c),c-p+1===a)return p*o}else-1!==p&&(c-=c-p),p=-1}else for(r+a>u&&(r=u-a),c=r;c>=0;c--){for(var f=!0,h=0;a>h;h++)if(s(e,c+h)!==s(t,h)){f=!1;break}if(f)return c}return-1}function l(e,t,r,n){return A(function(e){for(var t=[],r=0;e.length>r;++r)t.push(255&e.charCodeAt(r));return t}(t),e,r,n)}function m(e,t,r){r=Math.min(e.length,r);for(var n=[],i=t;r>i;){var s=e[i],o=null,u=s>239?4:s>223?3:s>191?2:1;if(r>=i+u){var a,c,p,f;switch(u){case 1:128>s&&(o=s);break;case 2:128==(192&(a=e[i+1]))&&(f=(31&s)<<6|63&a)>127&&(o=f);break;case 3:c=e[i+2],128==(192&(a=e[i+1]))&&128==(192&c)&&(f=(15&s)<<12|(63&a)<<6|63&c)>2047&&(55296>f||f>57343)&&(o=f);break;case 4:c=e[i+2],p=e[i+3],128==(192&(a=e[i+1]))&&128==(192&c)&&128==(192&p)&&(f=(15&s)<<18|(63&a)<<12|(63&c)<<6|63&p)>65535&&1114112>f&&(o=f)}}null===o?(o=65533,u=1):o>65535&&(n.push((o-=65536)>>>10&1023|55296),o=56320|1023&o),n.push(o),i+=u}return function(e){var t=e.length;if(R>=t)return String.fromCharCode.apply(String,e);var r=\"\",n=0;for(;t>n;)r+=String.fromCharCode.apply(String,e.slice(n,n+=R));return r}(n)}function d(e,t,r){if(e%1!=0||0>e)throw new RangeError(\"offset is not uint\");if(e+t>r)throw new RangeError(\"Trying to access beyond buffer length\")}function g(e,t,r,i,s,o){if(!n.isBuffer(e))throw new TypeError('\"buffer\" argument must be a Buffer instance');if(t>s||o>t)throw new RangeError('\"value\" argument is out of bounds');if(r+i>e.length)throw new RangeError(\"Index out of range\")}function _(e,t,r,n,i,s){if(r+n>e.length)throw new RangeError(\"Index out of range\");if(0>r)throw new RangeError(\"Index out of range\")}function y(e,t,r,n,i){return t=+t,r>>>=0,i||_(e,0,r,4),v.write(e,t,r,n,23,4),r+4}function q(e,t,r,n,i){return t=+t,r>>>=0,i||_(e,0,r,8),v.write(e,t,r,n,52,8),r+8}function w(e,t){t=t||1/0;for(var r,n=e.length,i=null,s=[],o=0;n>o;++o){if((r=e.charCodeAt(o))>55295&&57344>r){if(!i){if(r>56319){(t-=3)>-1&&s.push(239,191,189);continue}if(o+1===n){(t-=3)>-1&&s.push(239,191,189);continue}i=r;continue}if(56320>r){(t-=3)>-1&&s.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(t-=3)>-1&&s.push(239,191,189);if(i=null,128>r){if(0>(t-=1))break;s.push(r)}else if(2048>r){if(0>(t-=2))break;s.push(r>>6|192,63&r|128)}else if(65536>r){if(0>(t-=3))break;s.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(r>=1114112)throw Error(\"Invalid code point\");if(0>(t-=4))break;s.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return s}function k(e){return b.toByteArray(function(e){if(2>(e=e.trim().replace(U,\"\")).length)return\"\";for(;e.length%4!=0;)e+=\"=\";return e}(e))}function A(e,t,r,n){for(var i=0;n>i&&(i+r<t.length&&i<e.length);++i)t[i+r]=e[i];return i}function L(e){return e instanceof ArrayBuffer||null!=e&&null!=e.constructor&&\"ArrayBuffer\"===e.constructor.name&&\"number\"==typeof e.byteLength}function S(e){return\"function\"==typeof ArrayBuffer.isView&&ArrayBuffer.isView(e)}function E(e){return e!=e}t.Buffer=n,t.SlowBuffer=function(e){return+e!=e&&(e=0),n.alloc(+e)},t.INSPECT_MAX_BYTES=50;var C=2147483647;t.kMaxLength=C,(n.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()}catch(e){return!1}}())||void 0===console||\"function\"!=typeof console.error||console.error(\"This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.\"),\"undefined\"!=typeof Symbol&&Symbol.species&&n[Symbol.species]===n&&Object.defineProperty(n,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1}),n.poolSize=8192,n.from=function(e,t,r){return i(e,t,r)},n.prototype.__proto__=Uint8Array.prototype,n.__proto__=Uint8Array,n.alloc=function(e,t,n){return function(e,t,n){return s(e),e>0&&void 0!==t?\"string\"==typeof n?r(e).fill(t,n):r(e).fill(t):r(e)}(e,t,n)},n.allocUnsafe=function(e){return o(e)},n.allocUnsafeSlow=function(e){return o(e)},n.isBuffer=function(e){return null!=e&&!0===e._isBuffer},n.compare=function(e,t){if(!n.isBuffer(e)||!n.isBuffer(t))throw new TypeError(\"Arguments must be Buffers\");if(e===t)return 0;for(var r=e.length,i=t.length,s=0,o=Math.min(r,i);o>s;++s)if(e[s]!==t[s]){r=e[s],i=t[s];break}return i>r?-1:r>i?1:0},n.isEncoding=function(e){switch((e+\"\").toLowerCase()){case\"hex\":case\"utf8\":case\"utf-8\":case\"ascii\":case\"latin1\":case\"binary\":case\"base64\":case\"ucs2\":case\"ucs-2\":case\"utf16le\":case\"utf-16le\":return!0;default:return!1}},n.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('\"list\" argument must be an Array of Buffers');if(0===e.length)return n.alloc(0);var r;if(void 0===t)for(t=0,r=0;e.length>r;++r)t+=e[r].length;var i=n.allocUnsafe(t),s=0;for(r=0;e.length>r;++r){var o=e[r];if(!n.isBuffer(o))throw new TypeError('\"list\" argument must be an Array of Buffers');o.copy(i,s),s+=o.length}return i},n.byteLength=c,n.prototype._isBuffer=!0,n.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError(\"Buffer size must be a multiple of 16-bits\");for(var t=0;e>t;t+=2)p(this,t,t+1);return this},n.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError(\"Buffer size must be a multiple of 32-bits\");for(var t=0;e>t;t+=4)p(this,t,t+3),p(this,t+1,t+2);return this},n.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError(\"Buffer size must be a multiple of 64-bits\");for(var t=0;e>t;t+=8)p(this,t,t+7),p(this,t+1,t+6),p(this,t+2,t+5),p(this,t+3,t+4);return this},n.prototype.toString=function(){var e=this.length;return 0===e?\"\":0===arguments.length?m(this,0,e):function(e,t,r){var n=!1;if((void 0===t||0>t)&&(t=0),t>this.length)return\"\";if((void 0===r||r>this.length)&&(r=this.length),0>=r)return\"\";if(r>>>=0,(t>>>=0)>=r)return\"\";for(e||(e=\"utf8\");;)switch(e){case\"hex\":return function(e,t,r){var n=e.length;t&&t>=0||(t=0),(!r||0>r||r>n)&&(r=n);for(var i=\"\",s=t;r>s;++s)i+=function(e){return 16>e?\"0\"+e.toString(16):e.toString(16)}(e[s]);return i}(this,t,r);case\"utf8\":case\"utf-8\":return m(this,t,r);case\"ascii\":return function(e,t,r){var n=\"\";r=Math.min(e.length,r);for(var i=t;r>i;++i)n+=String.fromCharCode(127&e[i]);return n}(this,t,r);case\"latin1\":case\"binary\":return function(e,t,r){var n=\"\";r=Math.min(e.length,r);for(var i=t;r>i;++i)n+=String.fromCharCode(e[i]);return n}(this,t,r);case\"base64\":return function(e,t,r){return b.fromByteArray(0===t&&r===e.length?e:e.slice(t,r))}(this,t,r);case\"ucs2\":case\"ucs-2\":case\"utf16le\":case\"utf-16le\":return function(e,t,r){for(var n=e.slice(t,r),i=\"\",s=0;n.length>s;s+=2)i+=String.fromCharCode(n[s]+256*n[s+1]);return i}(this,t,r);default:if(n)throw new TypeError(\"Unknown encoding: \"+e);e=(e+\"\").toLowerCase(),n=!0}}.apply(this,arguments)},n.prototype.equals=function(e){if(!n.isBuffer(e))throw new TypeError(\"Argument must be a Buffer\");return this===e||0===n.compare(this,e)},n.prototype.inspect=function(){var e=\"\",r=t.INSPECT_MAX_BYTES;return this.length>0&&(e=this.toString(\"hex\",0,r).match(/.{2}/g).join(\" \"),this.length>r&&(e+=\" ... \")),\"<Buffer \"+e+\">\"},n.prototype.compare=function(e,t,r,i,s){if(!n.isBuffer(e))throw new TypeError(\"Argument must be a Buffer\");if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===i&&(i=0),void 0===s&&(s=this.length),0>t||r>e.length||0>i||s>this.length)throw new RangeError(\"out of range index\");if(i>=s&&t>=r)return 0;if(i>=s)return-1;if(t>=r)return 1;if(t>>>=0,r>>>=0,i>>>=0,s>>>=0,this===e)return 0;for(var o=s-i,u=r-t,a=Math.min(o,u),c=this.slice(i,s),p=e.slice(t,r),f=0;a>f;++f)if(c[f]!==p[f]){o=c[f],u=p[f];break}return u>o?-1:o>u?1:0},n.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},n.prototype.indexOf=function(e,t,r){return f(this,e,t,r,!0)},n.prototype.lastIndexOf=function(e,t,r){return f(this,e,t,r,!1)},n.prototype.write=function(e,t,r,n){if(void 0===t)n=\"utf8\",r=this.length,t=0;else if(void 0===r&&\"string\"==typeof t)n=t,r=this.length,t=0;else{if(!isFinite(t))throw Error(\"Buffer.write(string, encoding, offset[, length]) is no longer supported\");t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n=\"utf8\")):(n=r,r=void 0)}var i=this.length-t;if((void 0===r||r>i)&&(r=i),e.length>0&&(0>r||0>t)||t>this.length)throw new RangeError(\"Attempt to write outside buffer bounds\");n||(n=\"utf8\");for(var s=!1;;)switch(n){case\"hex\":return function(e,t,r,n){var i=e.length-(r=+r||0);n?(n=+n)>i&&(n=i):n=i;var s=t.length;if(s%2!=0)throw new TypeError(\"Invalid hex string\");n>s/2&&(n=s/2);for(var o=0;n>o;++o){var u=parseInt(t.substr(2*o,2),16);if(E(u))return o;e[r+o]=u}return o}(this,e,t,r);case\"utf8\":case\"utf-8\":return function(e,t,r,n){return A(w(t,e.length-r),e,r,n)}(this,e,t,r);case\"ascii\":return l(this,e,t,r);case\"latin1\":case\"binary\":return function(e,t,r,n){return l(e,t,r,n)}(this,e,t,r);case\"base64\":return function(e,t,r,n){return A(k(t),e,r,n)}(this,e,t,r);case\"ucs2\":case\"ucs-2\":case\"utf16le\":case\"utf-16le\":return function(e,t,r,n){return A(function(e,t){for(var r,n,i=[],s=0;e.length>s&&(t-=2)>=0;++s)r=e.charCodeAt(s),n=r>>8,i.push(r%256),i.push(n);return i}(t,e.length-r),e,r,n)}(this,e,t,r);default:if(s)throw new TypeError(\"Unknown encoding: \"+n);n=(\"\"+n).toLowerCase(),s=!0}},n.prototype.toJSON=function(){return{type:\"Buffer\",data:Array.prototype.slice.call(this._arr||this,0)}};var R=4096;n.prototype.slice=function(e,t){var r=this.length;e=~~e,t=void 0===t?r:~~t,0>e?0>(e+=r)&&(e=0):e>r&&(e=r),0>t?0>(t+=r)&&(t=0):t>r&&(t=r),e>t&&(t=e);var i=this.subarray(e,t);return i.__proto__=n.prototype,i},n.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||d(e,t,this.length);for(var n=this[e],i=1,s=0;++s<t&&(i*=256);)n+=this[e+s]*i;return n},n.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||d(e,t,this.length);for(var n=this[e+--t],i=1;t>0&&(i*=256);)n+=this[e+--t]*i;return n},n.prototype.readUInt8=function(e,t){return e>>>=0,t||d(e,1,this.length),this[e]},n.prototype.readUInt16LE=function(e,t){return e>>>=0,t||d(e,2,this.length),this[e]|this[e+1]<<8},n.prototype.readUInt16BE=function(e,t){return e>>>=0,t||d(e,2,this.length),this[e]<<8|this[e+1]},n.prototype.readUInt32LE=function(e,t){return e>>>=0,t||d(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},n.prototype.readUInt32BE=function(e,t){return e>>>=0,t||d(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},n.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||d(e,t,this.length);for(var n=this[e],i=1,s=0;++s<t&&(i*=256);)n+=this[e+s]*i;return(i*=128)>n||(n-=Math.pow(2,8*t)),n},n.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||d(e,t,this.length);for(var n=t,i=1,s=this[e+--n];n>0&&(i*=256);)s+=this[e+--n]*i;return(i*=128)>s||(s-=Math.pow(2,8*t)),s},n.prototype.readInt8=function(e,t){return e>>>=0,t||d(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},n.prototype.readInt16LE=function(e,t){e>>>=0,t||d(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},n.prototype.readInt16BE=function(e,t){e>>>=0,t||d(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},n.prototype.readInt32LE=function(e,t){return e>>>=0,t||d(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},n.prototype.readInt32BE=function(e,t){return e>>>=0,t||d(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},n.prototype.readFloatLE=function(e,t){return e>>>=0,t||d(e,4,this.length),v.read(this,e,!0,23,4)},n.prototype.readFloatBE=function(e,t){return e>>>=0,t||d(e,4,this.length),v.read(this,e,!1,23,4)},n.prototype.readDoubleLE=function(e,t){return e>>>=0,t||d(e,8,this.length),v.read(this,e,!0,52,8)},n.prototype.readDoubleBE=function(e,t){return e>>>=0,t||d(e,8,this.length),v.read(this,e,!1,52,8)},n.prototype.writeUIntLE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){g(this,e,t,r,Math.pow(2,8*r)-1,0)}var i=1,s=0;for(this[t]=255&e;++s<r&&(i*=256);)this[t+s]=e/i&255;return t+r},n.prototype.writeUIntBE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){g(this,e,t,r,Math.pow(2,8*r)-1,0)}var i=r-1,s=1;for(this[t+i]=255&e;--i>=0&&(s*=256);)this[t+i]=e/s&255;return t+r},n.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||g(this,e,t,1,255,0),this[t]=255&e,t+1},n.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||g(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},n.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||g(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},n.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||g(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},n.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||g(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},n.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var i=Math.pow(2,8*r-1);g(this,e,t,r,i-1,-i)}var s=0,o=1,u=0;for(this[t]=255&e;++s<r&&(o*=256);)0>e&&0===u&&0!==this[t+s-1]&&(u=1),this[t+s]=(e/o>>0)-u&255;return t+r},n.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var i=Math.pow(2,8*r-1);g(this,e,t,r,i-1,-i)}var s=r-1,o=1,u=0;for(this[t+s]=255&e;--s>=0&&(o*=256);)0>e&&0===u&&0!==this[t+s+1]&&(u=1),this[t+s]=(e/o>>0)-u&255;return t+r},n.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||g(this,e,t,1,127,-128),0>e&&(e=255+e+1),this[t]=255&e,t+1},n.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||g(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},n.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||g(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},n.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||g(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},n.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||g(this,e,t,4,2147483647,-2147483648),0>e&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},n.prototype.writeFloatLE=function(e,t,r){return y(this,e,t,!0,r)},n.prototype.writeFloatBE=function(e,t,r){return y(this,e,t,!1,r)},n.prototype.writeDoubleLE=function(e,t,r){return q(this,e,t,!0,r)},n.prototype.writeDoubleBE=function(e,t,r){return q(this,e,t,!1,r)},n.prototype.copy=function(e,t,r,n){if(r||(r=0),n||0===n||(n=this.length),e.length>t||(t=e.length),t||(t=0),n>0&&r>n&&(n=r),n===r)return 0;if(0===e.length||0===this.length)return 0;if(0>t)throw new RangeError(\"targetStart out of bounds\");if(0>r||r>=this.length)throw new RangeError(\"sourceStart out of bounds\");if(0>n)throw new RangeError(\"sourceEnd out of bounds\");n>this.length&&(n=this.length),n-r>e.length-t&&(n=e.length-t+r);var i,s=n-r;if(this===e&&t>r&&n>t)for(i=s-1;i>=0;--i)e[i+t]=this[i+r];else if(1e3>s)for(i=0;s>i;++i)e[i+t]=this[i+r];else Uint8Array.prototype.set.call(e,this.subarray(r,r+s),t);return s},n.prototype.fill=function(e,t,r,i){if(\"string\"==typeof e){if(\"string\"==typeof t?(i=t,t=0,r=this.length):\"string\"==typeof r&&(i=r,r=this.length),1===e.length){var s=e.charCodeAt(0);256>s&&(e=s)}if(void 0!==i&&\"string\"!=typeof i)throw new TypeError(\"encoding must be a string\");if(\"string\"==typeof i&&!n.isEncoding(i))throw new TypeError(\"Unknown encoding: \"+i)}else\"number\"==typeof e&&(e&=255);if(0>t||t>this.length||r>this.length)throw new RangeError(\"Out of range index\");if(t>=r)return this;t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0);var o;if(\"number\"==typeof e)for(o=t;r>o;++o)this[o]=e;else{var u=n.isBuffer(e)?e:new n(e,i),a=u.length;for(o=0;r-t>o;++o)this[o+t]=u[o%a]}return this};var U=/[^+/0-9A-Za-z-_]/g}).Buffer;\"function\"!=typeof Object.assign&&(Object.assign=function(e){var t,r,n,i;if(void 0===e||null===e)throw new TypeError(\"Cannot convert undefined or null to object\");for(t=Object(e),r=1;arguments.length>r;r++)if(void 0!==(n=arguments[r])&&null!==n)for(i in n)n.hasOwnProperty(i)&&(t[i]=n[i]);return t}),Array.prototype.includes||Object.defineProperty(Array.prototype,\"includes\",{value:function(e,t){if(null==this)throw new TypeError('\"this\" is null or not defined');var r=Object(this),n=r.length>>>0;if(0===n)return!1;for(var i=0|t,s=Math.max(0>i?n-Math.abs(i):i,0);n>s;){if(function(e,t){return e===t||\"number\"==typeof e&&\"number\"==typeof t&&isNaN(e)&&isNaN(t)}(r[s],e))return!0;s++}return!1}});var q=function(){function n(e){s(this,n),this.accessToken=(e=e||{}).accessToken,this.clientId=e.clientId,this.clientSecret=e.clientSecret,this.selectUser=e.selectUser,this.selectAdmin=e.selectAdmin,this.fetch=e.fetch||fetch,this.pathRoot=e.pathRoot,e.fetch||console.warn(\"Global fetch is deprecated and will be unsupported in a future version. Please pass fetch function as option when instantiating dropbox instance: new Dropbox({fetch})\")}return o(n,[{key:\"setAccessToken\",value:function(e){this.accessToken=e}},{key:\"getAccessToken\",value:function(){return this.accessToken}},{key:\"setClientId\",value:function(e){this.clientId=e}},{key:\"getClientId\",value:function(){return this.clientId}},{key:\"setClientSecret\",value:function(e){this.clientSecret=e}},{key:\"getClientSecret\",value:function(){return this.clientSecret}},{key:\"getAuthenticationUrl\",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:\"token\",n=this.getClientId(),i=\"https://www.dropbox.com/oauth2/authorize\";if(!n)throw Error(\"A client id is required. You can set the client id using .setClientId().\");if(\"code\"!==r&&!e)throw Error(\"A redirect uri is required.\");if(![\"code\",\"token\"].includes(r))throw Error(\"Authorization type must be code or token\");var s=void 0;return s=\"code\"===r?i+\"?response_type=code&client_id=\"+n:i+\"?response_type=token&client_id=\"+n,e&&(s+=\"&redirect_uri=\"+e),t&&(s+=\"&state=\"+t),s}},{key:\"getAccessTokenFromCode\",value:function(e,t){var r=this.getClientId(),n=this.getClientSecret();if(!r)throw Error(\"A client id is required. You can set the client id using .setClientId().\");if(!n)throw Error(\"A client secret is required. You can set the client id using .setClientSecret().\");return this.fetch(\"https://api.dropboxapi.com/oauth2/token?code=\"+t+\"&grant_type=authorization_code&redirect_uri=\"+e+\"&client_id=\"+r+\"&client_secret=\"+n,{method:\"POST\",headers:{\"Content-Type\":\"application/x-www-form-urlencoded\"}}).then(function(e){return function(e){var t=e.clone();return new Promise(function(r){e.json().then(function(e){return r(e)}).catch(function(){return t.text().then(function(e){return r(e)})})}).then(function(t){return[e,t]})}(e)}).then(function(e){var t=c(e,2),r=t[0],n=t[1];if(!r.ok)throw{error:n,response:r,status:r.status};return n.access_token})}},{key:\"authenticateWithCordova\",value:function(e,t){function r(e){-999!==e.code&&(window.setTimeout(function(){u.close()},10),t())}function n(r){if(r.url.indexOf(\"&error=\")>-1)window.setTimeout(function(){u.close()},10),t();else{var n=r.url.indexOf(\"#access_token=\"),i=r.url.indexOf(\"&token_type=\");if(n>-1){n+=14,window.setTimeout(function(){u.close()},10);var s=r.url.substring(n,i);e(s)}}}function i(){o||(u.removeEventListener(\"loaderror\",r),u.removeEventListener(\"loadstop\",n),u.removeEventListener(\"exit\",i),o=!0)}var s=this.getAuthenticationUrl(\"https://www.dropbox.com/1/oauth2/redirect_receiver\"),o=!1,u=window.open(s,\"_blank\");u.addEventListener(\"loaderror\",r),u.addEventListener(\"loadstop\",n),u.addEventListener(\"exit\",i)}},{key:\"request\",value:function(e,t,r,n,i){var s=null;switch(i){case\"rpc\":s=this.getRpcRequest();break;case\"download\":s=this.getDownloadRequest();break;case\"upload\":s=this.getUploadRequest();break;default:throw Error(\"Invalid request style: \"+i)}var o={selectUser:this.selectUser,selectAdmin:this.selectAdmin,clientId:this.getClientId(),clientSecret:this.getClientSecret(),pathRoot:this.pathRoot};return s(e,t,r,n,this.getAccessToken(),o)}},{key:\"setRpcRequest\",value:function(e){this.rpcRequest=e}},{key:\"getRpcRequest\",value:function(){return void 0===this.rpcRequest&&(this.rpcRequest=function(e){return function(r,n,i,s,o,u){var a={method:\"POST\",body:n?JSON.stringify(n):null},p={};n&&(p[\"Content-Type\"]=\"application/json\");var f=\"\";switch(i){case\"app\":if(!u.clientId||!u.clientSecret)throw Error(\"A client id and secret is required for this function\");f=new y(u.clientId+\":\"+u.clientSecret).toString(\"base64\"),p.Authorization=\"Basic \"+f;break;case\"team\":case\"user\":p.Authorization=\"Bearer \"+o;break;case\"noauth\":break;default:throw Error(\"Unhandled auth type: \"+i)}return u&&(u.selectUser&&(p[\"Dropbox-API-Select-User\"]=u.selectUser),u.selectAdmin&&(p[\"Dropbox-API-Select-Admin\"]=u.selectAdmin),u.pathRoot&&(p[\"Dropbox-API-Path-Root\"]=u.pathRoot)),a.headers=p,e(t(s)+r,a).then(function(e){return function(e){return\"application/json\"===e.headers.get(\"Content-Type\")?e.json().then(function(t){return[e,t]}):e.text().then(function(t){return[e,t]})}(e)}).then(function(e){var t=c(e,2),r=t[0],n=t[1];if(!r.ok)throw{error:n,response:r,status:r.status};return n})}}(this.fetch)),this.rpcRequest}},{key:\"setDownloadRequest\",value:function(e){this.downloadRequest=e}},{key:\"getDownloadRequest\",value:function(){return void 0===this.downloadRequest&&(this.downloadRequest=function(n){return function(i,s,o,u,a,p){if(\"user\"!==o)throw Error(\"Unexpected auth type: \"+o);var f={method:\"POST\",headers:{Authorization:\"Bearer \"+a,\"Dropbox-API-Arg\":r(s)}};return p&&(p.selectUser&&(f.headers[\"Dropbox-API-Select-User\"]=p.selectUser),p.selectAdmin&&(f.headers[\"Dropbox-API-Select-Admin\"]=p.selectAdmin),p.pathRoot&&(f.headers[\"Dropbox-API-Path-Root\"]=p.pathRoot)),n(t(u)+i,f).then(function(t){return function(t){return t.ok?e()?t.blob():t.buffer():t.text()}(t).then(function(e){return[t,e]})}).then(function(t){var r=c(t,2);return function(t,r){if(!t.ok)throw{error:r,response:t,status:t.status};var n=JSON.parse(t.headers.get(\"dropbox-api-result\"));return e()?n.fileBlob=r:n.fileBinary=r,n}(r[0],r[1])})}}(this.fetch)),this.downloadRequest}},{key:\"setUploadRequest\",value:function(e){this.uploadRequest=e}},{key:\"getUploadRequest\",value:function(){return void 0===this.uploadRequest&&(this.uploadRequest=function(e){return function(n,i,s,o,u,a){if(\"user\"!==s)throw Error(\"Unexpected auth type: \"+s);var p=i.contents;delete i.contents;var f={body:p,method:\"POST\",headers:{Authorization:\"Bearer \"+u,\"Content-Type\":\"application/octet-stream\",\"Dropbox-API-Arg\":r(i)}};return a&&(a.selectUser&&(f.headers[\"Dropbox-API-Select-User\"]=a.selectUser),a.selectAdmin&&(f.headers[\"Dropbox-API-Select-Admin\"]=a.selectAdmin),a.pathRoot&&(f.headers[\"Dropbox-API-Path-Root\"]=a.pathRoot)),e(t(o)+n,f).then(function(e){return function(e){var t=e.clone();return new Promise(function(r){e.json().then(function(e){return r(e)}).catch(function(){return t.text().then(function(e){return r(e)})})}).then(function(t){return[e,t]})}(e)}).then(function(e){var t=c(e,2),r=t[0],n=t[1];if(!r.ok)throw{error:n,response:r,status:r.status};return n})}}(this.fetch)),this.uploadRequest}}]),n}(),w=function(e){function t(e){s(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return Object.assign(r,i),r}return u(t,q),o(t,[{key:\"filesGetSharedLinkFile\",value:function(e){return this.request(\"sharing/get_shared_link_file\",e,\"api\",\"download\")}}]),t}(),k=Object.freeze({Dropbox:w}),A={};A.teamDevicesListMemberDevices=function(e){return this.request(\"team/devices/list_member_devices\",e,\"team\",\"api\",\"rpc\")},A.teamDevicesListMembersDevices=function(e){return this.request(\"team/devices/list_members_devices\",e,\"team\",\"api\",\"rpc\")},A.teamDevicesListTeamDevices=function(e){return this.request(\"team/devices/list_team_devices\",e,\"team\",\"api\",\"rpc\")},A.teamDevicesRevokeDeviceSession=function(e){return this.request(\"team/devices/revoke_device_session\",e,\"team\",\"api\",\"rpc\")},A.teamDevicesRevokeDeviceSessionBatch=function(e){return this.request(\"team/devices/revoke_device_session_batch\",e,\"team\",\"api\",\"rpc\")},A.teamFeaturesGetValues=function(e){return this.request(\"team/features/get_values\",e,\"team\",\"api\",\"rpc\")},A.teamGetInfo=function(e){return this.request(\"team/get_info\",e,\"team\",\"api\",\"rpc\")},A.teamGroupsCreate=function(e){return this.request(\"team/groups/create\",e,\"team\",\"api\",\"rpc\")},A.teamGroupsDelete=function(e){return this.request(\"team/groups/delete\",e,\"team\",\"api\",\"rpc\")},A.teamGroupsGetInfo=function(e){return this.request(\"team/groups/get_info\",e,\"team\",\"api\",\"rpc\")},A.teamGroupsJobStatusGet=function(e){return this.request(\"team/groups/job_status/get\",e,\"team\",\"api\",\"rpc\")},A.teamGroupsList=function(e){return this.request(\"team/groups/list\",e,\"team\",\"api\",\"rpc\")},A.teamGroupsListContinue=function(e){return this.request(\"team/groups/list/continue\",e,\"team\",\"api\",\"rpc\")},A.teamGroupsMembersAdd=function(e){return this.request(\"team/groups/members/add\",e,\"team\",\"api\",\"rpc\")},A.teamGroupsMembersList=function(e){return this.request(\"team/groups/members/list\",e,\"team\",\"api\",\"rpc\")},A.teamGroupsMembersListContinue=function(e){return this.request(\"team/groups/members/list/continue\",e,\"team\",\"api\",\"rpc\")},A.teamGroupsMembersRemove=function(e){return this.request(\"team/groups/members/remove\",e,\"team\",\"api\",\"rpc\")},A.teamGroupsMembersSetAccessType=function(e){return this.request(\"team/groups/members/set_access_type\",e,\"team\",\"api\",\"rpc\")},A.teamGroupsUpdate=function(e){return this.request(\"team/groups/update\",e,\"team\",\"api\",\"rpc\")},A.teamLinkedAppsListMemberLinkedApps=function(e){return this.request(\"team/linked_apps/list_member_linked_apps\",e,\"team\",\"api\",\"rpc\")},A.teamLinkedAppsListMembersLinkedApps=function(e){return this.request(\"team/linked_apps/list_members_linked_apps\",e,\"team\",\"api\",\"rpc\")},A.teamLinkedAppsListTeamLinkedApps=function(e){return this.request(\"team/linked_apps/list_team_linked_apps\",e,\"team\",\"api\",\"rpc\")},A.teamLinkedAppsRevokeLinkedApp=function(e){return this.request(\"team/linked_apps/revoke_linked_app\",e,\"team\",\"api\",\"rpc\")},A.teamLinkedAppsRevokeLinkedAppBatch=function(e){return this.request(\"team/linked_apps/revoke_linked_app_batch\",e,\"team\",\"api\",\"rpc\")},A.teamMemberSpaceLimitsExcludedUsersAdd=function(e){return this.request(\"team/member_space_limits/excluded_users/add\",e,\"team\",\"api\",\"rpc\")},A.teamMemberSpaceLimitsExcludedUsersList=function(e){return this.request(\"team/member_space_limits/excluded_users/list\",e,\"team\",\"api\",\"rpc\")},A.teamMemberSpaceLimitsExcludedUsersListContinue=function(e){return this.request(\"team/member_space_limits/excluded_users/list/continue\",e,\"team\",\"api\",\"rpc\")},A.teamMemberSpaceLimitsExcludedUsersRemove=function(e){return this.request(\"team/member_space_limits/excluded_users/remove\",e,\"team\",\"api\",\"rpc\")},A.teamMemberSpaceLimitsGetCustomQuota=function(e){return this.request(\"team/member_space_limits/get_custom_quota\",e,\"team\",\"api\",\"rpc\")},A.teamMemberSpaceLimitsRemoveCustomQuota=function(e){return this.request(\"team/member_space_limits/remove_custom_quota\",e,\"team\",\"api\",\"rpc\")},A.teamMemberSpaceLimitsSetCustomQuota=function(e){return this.request(\"team/member_space_limits/set_custom_quota\",e,\"team\",\"api\",\"rpc\")},A.teamMembersAdd=function(e){return this.request(\"team/members/add\",e,\"team\",\"api\",\"rpc\")},A.teamMembersAddJobStatusGet=function(e){return this.request(\"team/members/add/job_status/get\",e,\"team\",\"api\",\"rpc\")},A.teamMembersGetInfo=function(e){return this.request(\"team/members/get_info\",e,\"team\",\"api\",\"rpc\")},A.teamMembersList=function(e){return this.request(\"team/members/list\",e,\"team\",\"api\",\"rpc\")},A.teamMembersListContinue=function(e){return this.request(\"team/members/list/continue\",e,\"team\",\"api\",\"rpc\")},A.teamMembersMoveFormerMemberFiles=function(e){return this.request(\"team/members/move_former_member_files\",e,\"team\",\"api\",\"rpc\")},A.teamMembersMoveFormerMemberFilesJobStatusCheck=function(e){return this.request(\"team/members/move_former_member_files/job_status/check\",e,\"team\",\"api\",\"rpc\")},A.teamMembersRecover=function(e){return this.request(\"team/members/recover\",e,\"team\",\"api\",\"rpc\")},A.teamMembersRemove=function(e){return this.request(\"team/members/remove\",e,\"team\",\"api\",\"rpc\")},A.teamMembersRemoveJobStatusGet=function(e){return this.request(\"team/members/remove/job_status/get\",e,\"team\",\"api\",\"rpc\")},A.teamMembersSendWelcomeEmail=function(e){return this.request(\"team/members/send_welcome_email\",e,\"team\",\"api\",\"rpc\")},A.teamMembersSetAdminPermissions=function(e){return this.request(\"team/members/set_admin_permissions\",e,\"team\",\"api\",\"rpc\")},A.teamMembersSetProfile=function(e){return this.request(\"team/members/set_profile\",e,\"team\",\"api\",\"rpc\")},A.teamMembersSuspend=function(e){return this.request(\"team/members/suspend\",e,\"team\",\"api\",\"rpc\")},A.teamMembersUnsuspend=function(e){return this.request(\"team/members/unsuspend\",e,\"team\",\"api\",\"rpc\")},A.teamNamespacesList=function(e){return this.request(\"team/namespaces/list\",e,\"team\",\"api\",\"rpc\")},A.teamNamespacesListContinue=function(e){return this.request(\"team/namespaces/list/continue\",e,\"team\",\"api\",\"rpc\")},A.teamPropertiesTemplateAdd=function(e){return this.request(\"team/properties/template/add\",e,\"team\",\"api\",\"rpc\")},A.teamPropertiesTemplateGet=function(e){return this.request(\"team/properties/template/get\",e,\"team\",\"api\",\"rpc\")},A.teamPropertiesTemplateList=function(e){return this.request(\"team/properties/template/list\",e,\"team\",\"api\",\"rpc\")},A.teamPropertiesTemplateUpdate=function(e){return this.request(\"team/properties/template/update\",e,\"team\",\"api\",\"rpc\")},A.teamReportsGetActivity=function(e){return this.request(\"team/reports/get_activity\",e,\"team\",\"api\",\"rpc\")},A.teamReportsGetDevices=function(e){return this.request(\"team/reports/get_devices\",e,\"team\",\"api\",\"rpc\")},A.teamReportsGetMembership=function(e){return this.request(\"team/reports/get_membership\",e,\"team\",\"api\",\"rpc\")},A.teamReportsGetStorage=function(e){return this.request(\"team/reports/get_storage\",e,\"team\",\"api\",\"rpc\")},A.teamTeamFolderActivate=function(e){return this.request(\"team/team_folder/activate\",e,\"team\",\"api\",\"rpc\")},A.teamTeamFolderArchive=function(e){return this.request(\"team/team_folder/archive\",e,\"team\",\"api\",\"rpc\")},A.teamTeamFolderArchiveCheck=function(e){return this.request(\"team/team_folder/archive/check\",e,\"team\",\"api\",\"rpc\")},A.teamTeamFolderCreate=function(e){return this.request(\"team/team_folder/create\",e,\"team\",\"api\",\"rpc\")},A.teamTeamFolderGetInfo=function(e){return this.request(\"team/team_folder/get_info\",e,\"team\",\"api\",\"rpc\")},A.teamTeamFolderList=function(e){return this.request(\"team/team_folder/list\",e,\"team\",\"api\",\"rpc\")},A.teamTeamFolderListContinue=function(e){return this.request(\"team/team_folder/list/continue\",e,\"team\",\"api\",\"rpc\")},A.teamTeamFolderPermanentlyDelete=function(e){return this.request(\"team/team_folder/permanently_delete\",e,\"team\",\"api\",\"rpc\")},A.teamTeamFolderRename=function(e){return this.request(\"team/team_folder/rename\",e,\"team\",\"api\",\"rpc\")},A.teamTeamFolderUpdateSyncSettings=function(e){return this.request(\"team/team_folder/update_sync_settings\",e,\"team\",\"api\",\"rpc\")},A.teamTokenGetAuthenticatedAdmin=function(e){return this.request(\"team/token/get_authenticated_admin\",e,\"team\",\"api\",\"rpc\")};var L=function(e){function t(e){s(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return Object.assign(r,A),r}return u(t,q),o(t,[{key:\"actAsUser\",value:function(e){return new w({accessToken:this.accessToken,clientId:this.clientId,selectUser:e})}}]),t}(),S=Object.freeze({DropboxTeam:L});return{Dropbox:k.Dropbox,DropboxTeam:S.DropboxTeam}});\n\n\n//# sourceURL=webpack:///./node_modules/dropbox/dist/Dropbox-sdk.min.js?");

/***/ }),

/***/ "./node_modules/es5-ext/array/from/index.js":
/*!**************************************************!*\
  !*** ./node_modules/es5-ext/array/from/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./is-implemented */ \"./node_modules/es5-ext/array/from/is-implemented.js\")() ? Array.from : __webpack_require__(/*! ./shim */ \"./node_modules/es5-ext/array/from/shim.js\");\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/array/from/index.js?");

/***/ }),

/***/ "./node_modules/es5-ext/array/from/is-implemented.js":
/*!***********************************************************!*\
  !*** ./node_modules/es5-ext/array/from/is-implemented.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n\tvar from = Array.from, arr, result;\n\tif (typeof from !== \"function\") return false;\n\tarr = [\"raz\", \"dwa\"];\n\tresult = from(arr);\n\treturn Boolean(result && result !== arr && result[1] === \"dwa\");\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/array/from/is-implemented.js?");

/***/ }),

/***/ "./node_modules/es5-ext/array/from/shim.js":
/*!*************************************************!*\
  !*** ./node_modules/es5-ext/array/from/shim.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar iteratorSymbol = __webpack_require__(/*! es6-symbol */ \"./node_modules/es6-symbol/index.js\").iterator\n  , isArguments    = __webpack_require__(/*! ../../function/is-arguments */ \"./node_modules/es5-ext/function/is-arguments.js\")\n  , isFunction     = __webpack_require__(/*! ../../function/is-function */ \"./node_modules/es5-ext/function/is-function.js\")\n  , toPosInt       = __webpack_require__(/*! ../../number/to-pos-integer */ \"./node_modules/es5-ext/number/to-pos-integer.js\")\n  , callable       = __webpack_require__(/*! ../../object/valid-callable */ \"./node_modules/es5-ext/object/valid-callable.js\")\n  , validValue     = __webpack_require__(/*! ../../object/valid-value */ \"./node_modules/es5-ext/object/valid-value.js\")\n  , isValue        = __webpack_require__(/*! ../../object/is-value */ \"./node_modules/es5-ext/object/is-value.js\")\n  , isString       = __webpack_require__(/*! ../../string/is-string */ \"./node_modules/es5-ext/string/is-string.js\")\n  , isArray        = Array.isArray\n  , call           = Function.prototype.call\n  , desc           = { configurable: true, enumerable: true, writable: true, value: null }\n  , defineProperty = Object.defineProperty;\n\n// eslint-disable-next-line complexity, max-lines-per-function\nmodule.exports = function (arrayLike/*, mapFn, thisArg*/) {\n\tvar mapFn = arguments[1]\n\t  , thisArg = arguments[2]\n\t  , Context\n\t  , i\n\t  , j\n\t  , arr\n\t  , length\n\t  , code\n\t  , iterator\n\t  , result\n\t  , getIterator\n\t  , value;\n\n\tarrayLike = Object(validValue(arrayLike));\n\n\tif (isValue(mapFn)) callable(mapFn);\n\tif (!this || this === Array || !isFunction(this)) {\n\t\t// Result: Plain array\n\t\tif (!mapFn) {\n\t\t\tif (isArguments(arrayLike)) {\n\t\t\t\t// Source: Arguments\n\t\t\t\tlength = arrayLike.length;\n\t\t\t\tif (length !== 1) return Array.apply(null, arrayLike);\n\t\t\t\tarr = new Array(1);\n\t\t\t\tarr[0] = arrayLike[0];\n\t\t\t\treturn arr;\n\t\t\t}\n\t\t\tif (isArray(arrayLike)) {\n\t\t\t\t// Source: Array\n\t\t\t\tarr = new Array((length = arrayLike.length));\n\t\t\t\tfor (i = 0; i < length; ++i) arr[i] = arrayLike[i];\n\t\t\t\treturn arr;\n\t\t\t}\n\t\t}\n\t\tarr = [];\n\t} else {\n\t\t// Result: Non plain array\n\t\tContext = this;\n\t}\n\n\tif (!isArray(arrayLike)) {\n\t\tif ((getIterator = arrayLike[iteratorSymbol]) !== undefined) {\n\t\t\t// Source: Iterator\n\t\t\titerator = callable(getIterator).call(arrayLike);\n\t\t\tif (Context) arr = new Context();\n\t\t\tresult = iterator.next();\n\t\t\ti = 0;\n\t\t\twhile (!result.done) {\n\t\t\t\tvalue = mapFn ? call.call(mapFn, thisArg, result.value, i) : result.value;\n\t\t\t\tif (Context) {\n\t\t\t\t\tdesc.value = value;\n\t\t\t\t\tdefineProperty(arr, i, desc);\n\t\t\t\t} else {\n\t\t\t\t\tarr[i] = value;\n\t\t\t\t}\n\t\t\t\tresult = iterator.next();\n\t\t\t\t++i;\n\t\t\t}\n\t\t\tlength = i;\n\t\t} else if (isString(arrayLike)) {\n\t\t\t// Source: String\n\t\t\tlength = arrayLike.length;\n\t\t\tif (Context) arr = new Context();\n\t\t\tfor (i = 0, j = 0; i < length; ++i) {\n\t\t\t\tvalue = arrayLike[i];\n\t\t\t\tif (i + 1 < length) {\n\t\t\t\t\tcode = value.charCodeAt(0);\n\t\t\t\t\t// eslint-disable-next-line max-depth\n\t\t\t\t\tif (code >= 0xd800 && code <= 0xdbff) value += arrayLike[++i];\n\t\t\t\t}\n\t\t\t\tvalue = mapFn ? call.call(mapFn, thisArg, value, j) : value;\n\t\t\t\tif (Context) {\n\t\t\t\t\tdesc.value = value;\n\t\t\t\t\tdefineProperty(arr, j, desc);\n\t\t\t\t} else {\n\t\t\t\t\tarr[j] = value;\n\t\t\t\t}\n\t\t\t\t++j;\n\t\t\t}\n\t\t\tlength = j;\n\t\t}\n\t}\n\tif (length === undefined) {\n\t\t// Source: array or array-like\n\t\tlength = toPosInt(arrayLike.length);\n\t\tif (Context) arr = new Context(length);\n\t\tfor (i = 0; i < length; ++i) {\n\t\t\tvalue = mapFn ? call.call(mapFn, thisArg, arrayLike[i], i) : arrayLike[i];\n\t\t\tif (Context) {\n\t\t\t\tdesc.value = value;\n\t\t\t\tdefineProperty(arr, i, desc);\n\t\t\t} else {\n\t\t\t\tarr[i] = value;\n\t\t\t}\n\t\t}\n\t}\n\tif (Context) {\n\t\tdesc.value = null;\n\t\tarr.length = length;\n\t}\n\treturn arr;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/array/from/shim.js?");

/***/ }),

/***/ "./node_modules/es5-ext/function/is-arguments.js":
/*!*******************************************************!*\
  !*** ./node_modules/es5-ext/function/is-arguments.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar objToString = Object.prototype.toString\n  , id = objToString.call((function () { return arguments; })());\n\nmodule.exports = function (value) { return objToString.call(value) === id; };\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/function/is-arguments.js?");

/***/ }),

/***/ "./node_modules/es5-ext/function/is-function.js":
/*!******************************************************!*\
  !*** ./node_modules/es5-ext/function/is-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar objToString = Object.prototype.toString\n  , isFunctionStringTag = RegExp.prototype.test.bind(/^[object [A-Za-z0-9]*Function]$/);\n\nmodule.exports = function (value) {\n\treturn typeof value === \"function\" && isFunctionStringTag(objToString.call(value));\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/function/is-function.js?");

/***/ }),

/***/ "./node_modules/es5-ext/function/noop.js":
/*!***********************************************!*\
  !*** ./node_modules/es5-ext/function/noop.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// eslint-disable-next-line no-empty-function\nmodule.exports = function () {};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/function/noop.js?");

/***/ }),

/***/ "./node_modules/es5-ext/global.js":
/*!****************************************!*\
  !*** ./node_modules/es5-ext/global.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = (function () {\n\tif (this) return this;\n\n\t// Unexpected strict mode (may happen if e.g. bundled into ESM module), be nice\n\n\t// Thanks @mathiasbynens -> https://mathiasbynens.be/notes/globalthis\n\t// In all ES5+ engines global object inherits from Object.prototype\n\t// (if you approached one that doesn't please report)\n\tObject.defineProperty(Object.prototype, \"__global__\", {\n\t\tget: function () { return this; },\n\t\tconfigurable: true\n\t});\n\ttry { return __global__; }\n\tfinally { delete Object.prototype.__global__; }\n})();\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/global.js?");

/***/ }),

/***/ "./node_modules/es5-ext/math/sign/index.js":
/*!*************************************************!*\
  !*** ./node_modules/es5-ext/math/sign/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./is-implemented */ \"./node_modules/es5-ext/math/sign/is-implemented.js\")() ? Math.sign : __webpack_require__(/*! ./shim */ \"./node_modules/es5-ext/math/sign/shim.js\");\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/math/sign/index.js?");

/***/ }),

/***/ "./node_modules/es5-ext/math/sign/is-implemented.js":
/*!**********************************************************!*\
  !*** ./node_modules/es5-ext/math/sign/is-implemented.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n\tvar sign = Math.sign;\n\tif (typeof sign !== \"function\") return false;\n\treturn sign(10) === 1 && sign(-20) === -1;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/math/sign/is-implemented.js?");

/***/ }),

/***/ "./node_modules/es5-ext/math/sign/shim.js":
/*!************************************************!*\
  !*** ./node_modules/es5-ext/math/sign/shim.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (value) {\n\tvalue = Number(value);\n\tif (isNaN(value) || value === 0) return value;\n\treturn value > 0 ? 1 : -1;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/math/sign/shim.js?");

/***/ }),

/***/ "./node_modules/es5-ext/number/to-integer.js":
/*!***************************************************!*\
  !*** ./node_modules/es5-ext/number/to-integer.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar sign  = __webpack_require__(/*! ../math/sign */ \"./node_modules/es5-ext/math/sign/index.js\")\n  , abs   = Math.abs\n  , floor = Math.floor;\n\nmodule.exports = function (value) {\n\tif (isNaN(value)) return 0;\n\tvalue = Number(value);\n\tif (value === 0 || !isFinite(value)) return value;\n\treturn sign(value) * floor(abs(value));\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/number/to-integer.js?");

/***/ }),

/***/ "./node_modules/es5-ext/number/to-pos-integer.js":
/*!*******************************************************!*\
  !*** ./node_modules/es5-ext/number/to-pos-integer.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar toInteger = __webpack_require__(/*! ./to-integer */ \"./node_modules/es5-ext/number/to-integer.js\")\n  , max       = Math.max;\n\nmodule.exports = function (value) { return max(0, toInteger(value)); };\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/number/to-pos-integer.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/assign/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/es5-ext/object/assign/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./is-implemented */ \"./node_modules/es5-ext/object/assign/is-implemented.js\")() ? Object.assign : __webpack_require__(/*! ./shim */ \"./node_modules/es5-ext/object/assign/shim.js\");\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/assign/index.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/assign/is-implemented.js":
/*!**************************************************************!*\
  !*** ./node_modules/es5-ext/object/assign/is-implemented.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n\tvar assign = Object.assign, obj;\n\tif (typeof assign !== \"function\") return false;\n\tobj = { foo: \"raz\" };\n\tassign(obj, { bar: \"dwa\" }, { trzy: \"trzy\" });\n\treturn obj.foo + obj.bar + obj.trzy === \"razdwatrzy\";\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/assign/is-implemented.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/assign/shim.js":
/*!****************************************************!*\
  !*** ./node_modules/es5-ext/object/assign/shim.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar keys  = __webpack_require__(/*! ../keys */ \"./node_modules/es5-ext/object/keys/index.js\")\n  , value = __webpack_require__(/*! ../valid-value */ \"./node_modules/es5-ext/object/valid-value.js\")\n  , max   = Math.max;\n\nmodule.exports = function (dest, src/*, …srcn*/) {\n\tvar error, i, length = max(arguments.length, 2), assign;\n\tdest = Object(value(dest));\n\tassign = function (key) {\n\t\ttry {\n\t\t\tdest[key] = src[key];\n\t\t} catch (e) {\n\t\t\tif (!error) error = e;\n\t\t}\n\t};\n\tfor (i = 1; i < length; ++i) {\n\t\tsrc = arguments[i];\n\t\tkeys(src).forEach(assign);\n\t}\n\tif (error !== undefined) throw error;\n\treturn dest;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/assign/shim.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/is-value.js":
/*!*************************************************!*\
  !*** ./node_modules/es5-ext/object/is-value.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _undefined = __webpack_require__(/*! ../function/noop */ \"./node_modules/es5-ext/function/noop.js\")(); // Support ES3 engines\n\nmodule.exports = function (val) { return val !== _undefined && val !== null; };\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/is-value.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/keys/index.js":
/*!***************************************************!*\
  !*** ./node_modules/es5-ext/object/keys/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./is-implemented */ \"./node_modules/es5-ext/object/keys/is-implemented.js\")() ? Object.keys : __webpack_require__(/*! ./shim */ \"./node_modules/es5-ext/object/keys/shim.js\");\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/keys/index.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/keys/is-implemented.js":
/*!************************************************************!*\
  !*** ./node_modules/es5-ext/object/keys/is-implemented.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n\ttry {\n\t\tObject.keys(\"primitive\");\n\t\treturn true;\n\t} catch (e) {\n\t\treturn false;\n\t}\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/keys/is-implemented.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/keys/shim.js":
/*!**************************************************!*\
  !*** ./node_modules/es5-ext/object/keys/shim.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isValue = __webpack_require__(/*! ../is-value */ \"./node_modules/es5-ext/object/is-value.js\");\n\nvar keys = Object.keys;\n\nmodule.exports = function (object) { return keys(isValue(object) ? Object(object) : object); };\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/keys/shim.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/normalize-options.js":
/*!**********************************************************!*\
  !*** ./node_modules/es5-ext/object/normalize-options.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isValue = __webpack_require__(/*! ./is-value */ \"./node_modules/es5-ext/object/is-value.js\");\n\nvar forEach = Array.prototype.forEach, create = Object.create;\n\nvar process = function (src, obj) {\n\tvar key;\n\tfor (key in src) obj[key] = src[key];\n};\n\n// eslint-disable-next-line no-unused-vars\nmodule.exports = function (opts1/*, …options*/) {\n\tvar result = create(null);\n\tforEach.call(arguments, function (options) {\n\t\tif (!isValue(options)) return;\n\t\tprocess(Object(options), result);\n\t});\n\treturn result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/normalize-options.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/primitive-set.js":
/*!******************************************************!*\
  !*** ./node_modules/es5-ext/object/primitive-set.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar forEach = Array.prototype.forEach, create = Object.create;\n\n// eslint-disable-next-line no-unused-vars\nmodule.exports = function (arg/*, …args*/) {\n\tvar set = create(null);\n\tforEach.call(arguments, function (name) { set[name] = true; });\n\treturn set;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/primitive-set.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/valid-callable.js":
/*!*******************************************************!*\
  !*** ./node_modules/es5-ext/object/valid-callable.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (fn) {\n\tif (typeof fn !== \"function\") throw new TypeError(fn + \" is not a function\");\n\treturn fn;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/valid-callable.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/valid-value.js":
/*!****************************************************!*\
  !*** ./node_modules/es5-ext/object/valid-value.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isValue = __webpack_require__(/*! ./is-value */ \"./node_modules/es5-ext/object/is-value.js\");\n\nmodule.exports = function (value) {\n\tif (!isValue(value)) throw new TypeError(\"Cannot use null or undefined\");\n\treturn value;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/valid-value.js?");

/***/ }),

/***/ "./node_modules/es5-ext/string/#/contains/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/es5-ext/string/#/contains/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./is-implemented */ \"./node_modules/es5-ext/string/#/contains/is-implemented.js\")() ? String.prototype.contains : __webpack_require__(/*! ./shim */ \"./node_modules/es5-ext/string/#/contains/shim.js\");\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/string/#/contains/index.js?");

/***/ }),

/***/ "./node_modules/es5-ext/string/#/contains/is-implemented.js":
/*!******************************************************************!*\
  !*** ./node_modules/es5-ext/string/#/contains/is-implemented.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar str = \"razdwatrzy\";\n\nmodule.exports = function () {\n\tif (typeof str.contains !== \"function\") return false;\n\treturn str.contains(\"dwa\") === true && str.contains(\"foo\") === false;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/string/#/contains/is-implemented.js?");

/***/ }),

/***/ "./node_modules/es5-ext/string/#/contains/shim.js":
/*!********************************************************!*\
  !*** ./node_modules/es5-ext/string/#/contains/shim.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar indexOf = String.prototype.indexOf;\n\nmodule.exports = function (searchString/*, position*/) {\n\treturn indexOf.call(this, searchString, arguments[1]) > -1;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/string/#/contains/shim.js?");

/***/ }),

/***/ "./node_modules/es5-ext/string/is-string.js":
/*!**************************************************!*\
  !*** ./node_modules/es5-ext/string/is-string.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar objToString = Object.prototype.toString, id = objToString.call(\"\");\n\nmodule.exports = function (value) {\n\treturn (\n\t\ttypeof value === \"string\" ||\n\t\t(value &&\n\t\t\ttypeof value === \"object\" &&\n\t\t\t(value instanceof String || objToString.call(value) === id)) ||\n\t\tfalse\n\t);\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/string/is-string.js?");

/***/ }),

/***/ "./node_modules/es6-symbol/index.js":
/*!******************************************!*\
  !*** ./node_modules/es6-symbol/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./is-implemented */ \"./node_modules/es6-symbol/is-implemented.js\")()\n\t? __webpack_require__(/*! es5-ext/global */ \"./node_modules/es5-ext/global.js\").Symbol\n\t: __webpack_require__(/*! ./polyfill */ \"./node_modules/es6-symbol/polyfill.js\");\n\n\n//# sourceURL=webpack:///./node_modules/es6-symbol/index.js?");

/***/ }),

/***/ "./node_modules/es6-symbol/is-implemented.js":
/*!***************************************************!*\
  !*** ./node_modules/es6-symbol/is-implemented.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar global     = __webpack_require__(/*! es5-ext/global */ \"./node_modules/es5-ext/global.js\")\n  , validTypes = { object: true, symbol: true };\n\nmodule.exports = function () {\n\tvar Symbol = global.Symbol;\n\tvar symbol;\n\tif (typeof Symbol !== \"function\") return false;\n\tsymbol = Symbol(\"test symbol\");\n\ttry { String(symbol); }\n\tcatch (e) { return false; }\n\n\t// Return 'true' also for polyfills\n\tif (!validTypes[typeof Symbol.iterator]) return false;\n\tif (!validTypes[typeof Symbol.toPrimitive]) return false;\n\tif (!validTypes[typeof Symbol.toStringTag]) return false;\n\n\treturn true;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es6-symbol/is-implemented.js?");

/***/ }),

/***/ "./node_modules/es6-symbol/is-symbol.js":
/*!**********************************************!*\
  !*** ./node_modules/es6-symbol/is-symbol.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (value) {\n\tif (!value) return false;\n\tif (typeof value === \"symbol\") return true;\n\tif (!value.constructor) return false;\n\tif (value.constructor.name !== \"Symbol\") return false;\n\treturn value[value.constructor.toStringTag] === \"Symbol\";\n};\n\n\n//# sourceURL=webpack:///./node_modules/es6-symbol/is-symbol.js?");

/***/ }),

/***/ "./node_modules/es6-symbol/lib/private/generate-name.js":
/*!**************************************************************!*\
  !*** ./node_modules/es6-symbol/lib/private/generate-name.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar d = __webpack_require__(/*! d */ \"./node_modules/d/index.js\");\n\nvar create = Object.create, defineProperty = Object.defineProperty, objPrototype = Object.prototype;\n\nvar created = create(null);\nmodule.exports = function (desc) {\n\tvar postfix = 0, name, ie11BugWorkaround;\n\twhile (created[desc + (postfix || \"\")]) ++postfix;\n\tdesc += postfix || \"\";\n\tcreated[desc] = true;\n\tname = \"@@\" + desc;\n\tdefineProperty(\n\t\tobjPrototype,\n\t\tname,\n\t\td.gs(null, function (value) {\n\t\t\t// For IE11 issue see:\n\t\t\t// https://connect.microsoft.com/IE/feedbackdetail/view/1928508/\n\t\t\t//    ie11-broken-getters-on-dom-objects\n\t\t\t// https://github.com/medikoo/es6-symbol/issues/12\n\t\t\tif (ie11BugWorkaround) return;\n\t\t\tie11BugWorkaround = true;\n\t\t\tdefineProperty(this, name, d(value));\n\t\t\tie11BugWorkaround = false;\n\t\t})\n\t);\n\treturn name;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es6-symbol/lib/private/generate-name.js?");

/***/ }),

/***/ "./node_modules/es6-symbol/lib/private/setup/standard-symbols.js":
/*!***********************************************************************!*\
  !*** ./node_modules/es6-symbol/lib/private/setup/standard-symbols.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar d            = __webpack_require__(/*! d */ \"./node_modules/d/index.js\")\n  , NativeSymbol = __webpack_require__(/*! es5-ext/global */ \"./node_modules/es5-ext/global.js\").Symbol;\n\nmodule.exports = function (SymbolPolyfill) {\n\treturn Object.defineProperties(SymbolPolyfill, {\n\t\t// To ensure proper interoperability with other native functions (e.g. Array.from)\n\t\t// fallback to eventual native implementation of given symbol\n\t\thasInstance: d(\n\t\t\t\"\", (NativeSymbol && NativeSymbol.hasInstance) || SymbolPolyfill(\"hasInstance\")\n\t\t),\n\t\tisConcatSpreadable: d(\n\t\t\t\"\",\n\t\t\t(NativeSymbol && NativeSymbol.isConcatSpreadable) ||\n\t\t\t\tSymbolPolyfill(\"isConcatSpreadable\")\n\t\t),\n\t\titerator: d(\"\", (NativeSymbol && NativeSymbol.iterator) || SymbolPolyfill(\"iterator\")),\n\t\tmatch: d(\"\", (NativeSymbol && NativeSymbol.match) || SymbolPolyfill(\"match\")),\n\t\treplace: d(\"\", (NativeSymbol && NativeSymbol.replace) || SymbolPolyfill(\"replace\")),\n\t\tsearch: d(\"\", (NativeSymbol && NativeSymbol.search) || SymbolPolyfill(\"search\")),\n\t\tspecies: d(\"\", (NativeSymbol && NativeSymbol.species) || SymbolPolyfill(\"species\")),\n\t\tsplit: d(\"\", (NativeSymbol && NativeSymbol.split) || SymbolPolyfill(\"split\")),\n\t\ttoPrimitive: d(\n\t\t\t\"\", (NativeSymbol && NativeSymbol.toPrimitive) || SymbolPolyfill(\"toPrimitive\")\n\t\t),\n\t\ttoStringTag: d(\n\t\t\t\"\", (NativeSymbol && NativeSymbol.toStringTag) || SymbolPolyfill(\"toStringTag\")\n\t\t),\n\t\tunscopables: d(\n\t\t\t\"\", (NativeSymbol && NativeSymbol.unscopables) || SymbolPolyfill(\"unscopables\")\n\t\t)\n\t});\n};\n\n\n//# sourceURL=webpack:///./node_modules/es6-symbol/lib/private/setup/standard-symbols.js?");

/***/ }),

/***/ "./node_modules/es6-symbol/lib/private/setup/symbol-registry.js":
/*!**********************************************************************!*\
  !*** ./node_modules/es6-symbol/lib/private/setup/symbol-registry.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar d              = __webpack_require__(/*! d */ \"./node_modules/d/index.js\")\n  , validateSymbol = __webpack_require__(/*! ../../../validate-symbol */ \"./node_modules/es6-symbol/validate-symbol.js\");\n\nvar registry = Object.create(null);\n\nmodule.exports = function (SymbolPolyfill) {\n\treturn Object.defineProperties(SymbolPolyfill, {\n\t\tfor: d(function (key) {\n\t\t\tif (registry[key]) return registry[key];\n\t\t\treturn (registry[key] = SymbolPolyfill(String(key)));\n\t\t}),\n\t\tkeyFor: d(function (symbol) {\n\t\t\tvar key;\n\t\t\tvalidateSymbol(symbol);\n\t\t\tfor (key in registry) {\n\t\t\t\tif (registry[key] === symbol) return key;\n\t\t\t}\n\t\t\treturn undefined;\n\t\t})\n\t});\n};\n\n\n//# sourceURL=webpack:///./node_modules/es6-symbol/lib/private/setup/symbol-registry.js?");

/***/ }),

/***/ "./node_modules/es6-symbol/polyfill.js":
/*!*********************************************!*\
  !*** ./node_modules/es6-symbol/polyfill.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// ES2015 Symbol polyfill for environments that do not (or partially) support it\n\n\n\nvar d                    = __webpack_require__(/*! d */ \"./node_modules/d/index.js\")\n  , validateSymbol       = __webpack_require__(/*! ./validate-symbol */ \"./node_modules/es6-symbol/validate-symbol.js\")\n  , NativeSymbol         = __webpack_require__(/*! es5-ext/global */ \"./node_modules/es5-ext/global.js\").Symbol\n  , generateName         = __webpack_require__(/*! ./lib/private/generate-name */ \"./node_modules/es6-symbol/lib/private/generate-name.js\")\n  , setupStandardSymbols = __webpack_require__(/*! ./lib/private/setup/standard-symbols */ \"./node_modules/es6-symbol/lib/private/setup/standard-symbols.js\")\n  , setupSymbolRegistry  = __webpack_require__(/*! ./lib/private/setup/symbol-registry */ \"./node_modules/es6-symbol/lib/private/setup/symbol-registry.js\");\n\nvar create = Object.create\n  , defineProperties = Object.defineProperties\n  , defineProperty = Object.defineProperty;\n\nvar SymbolPolyfill, HiddenSymbol, isNativeSafe;\n\nif (typeof NativeSymbol === \"function\") {\n\ttry {\n\t\tString(NativeSymbol());\n\t\tisNativeSafe = true;\n\t} catch (ignore) {}\n} else {\n\tNativeSymbol = null;\n}\n\n// Internal constructor (not one exposed) for creating Symbol instances.\n// This one is used to ensure that `someSymbol instanceof Symbol` always return false\nHiddenSymbol = function Symbol(description) {\n\tif (this instanceof HiddenSymbol) throw new TypeError(\"Symbol is not a constructor\");\n\treturn SymbolPolyfill(description);\n};\n\n// Exposed `Symbol` constructor\n// (returns instances of HiddenSymbol)\nmodule.exports = SymbolPolyfill = function Symbol(description) {\n\tvar symbol;\n\tif (this instanceof Symbol) throw new TypeError(\"Symbol is not a constructor\");\n\tif (isNativeSafe) return NativeSymbol(description);\n\tsymbol = create(HiddenSymbol.prototype);\n\tdescription = description === undefined ? \"\" : String(description);\n\treturn defineProperties(symbol, {\n\t\t__description__: d(\"\", description),\n\t\t__name__: d(\"\", generateName(description))\n\t});\n};\n\nsetupStandardSymbols(SymbolPolyfill);\nsetupSymbolRegistry(SymbolPolyfill);\n\n// Internal tweaks for real symbol producer\ndefineProperties(HiddenSymbol.prototype, {\n\tconstructor: d(SymbolPolyfill),\n\ttoString: d(\"\", function () { return this.__name__; })\n});\n\n// Proper implementation of methods exposed on Symbol.prototype\n// They won't be accessible on produced symbol instances as they derive from HiddenSymbol.prototype\ndefineProperties(SymbolPolyfill.prototype, {\n\ttoString: d(function () { return \"Symbol (\" + validateSymbol(this).__description__ + \")\"; }),\n\tvalueOf: d(function () { return validateSymbol(this); })\n});\ndefineProperty(\n\tSymbolPolyfill.prototype,\n\tSymbolPolyfill.toPrimitive,\n\td(\"\", function () {\n\t\tvar symbol = validateSymbol(this);\n\t\tif (typeof symbol === \"symbol\") return symbol;\n\t\treturn symbol.toString();\n\t})\n);\ndefineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toStringTag, d(\"c\", \"Symbol\"));\n\n// Proper implementaton of toPrimitive and toStringTag for returned symbol instances\ndefineProperty(\n\tHiddenSymbol.prototype, SymbolPolyfill.toStringTag,\n\td(\"c\", SymbolPolyfill.prototype[SymbolPolyfill.toStringTag])\n);\n\n// Note: It's important to define `toPrimitive` as last one, as some implementations\n// implement `toPrimitive` natively without implementing `toStringTag` (or other specified symbols)\n// And that may invoke error in definition flow:\n// See: https://github.com/medikoo/es6-symbol/issues/13#issuecomment-164146149\ndefineProperty(\n\tHiddenSymbol.prototype, SymbolPolyfill.toPrimitive,\n\td(\"c\", SymbolPolyfill.prototype[SymbolPolyfill.toPrimitive])\n);\n\n\n//# sourceURL=webpack:///./node_modules/es6-symbol/polyfill.js?");

/***/ }),

/***/ "./node_modules/es6-symbol/validate-symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/es6-symbol/validate-symbol.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isSymbol = __webpack_require__(/*! ./is-symbol */ \"./node_modules/es6-symbol/is-symbol.js\");\n\nmodule.exports = function (value) {\n\tif (!isSymbol(value)) throw new TypeError(value + \" is not a symbol\");\n\treturn value;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es6-symbol/validate-symbol.js?");

/***/ }),

/***/ "./node_modules/es6-template-strings/compile.js":
/*!******************************************************!*\
  !*** ./node_modules/es6-template-strings/compile.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar esniff = __webpack_require__(/*! esniff */ \"./node_modules/esniff/index.js\")\n\n  , i, current, literals, substitutions, sOut, sEscape, sAhead, sIn, sInEscape, template;\n\nsOut = function (char) {\n\tif (char === '\\\\') return sEscape;\n\tif (char === '$') return sAhead;\n\tcurrent += char;\n\treturn sOut;\n};\nsEscape = function (char) {\n\tif ((char !== '\\\\') && (char !== '$')) current += '\\\\';\n\tcurrent += char;\n\treturn sOut;\n};\nsAhead = function (char) {\n\tif (char === '{') {\n\t\tliterals.push(current);\n\t\tcurrent = '';\n\t\treturn sIn;\n\t}\n\tif (char === '$') {\n\t\tcurrent += '$';\n\t\treturn sAhead;\n\t}\n\tcurrent += '$' + char;\n\treturn sOut;\n};\nsIn = function (char) {\n\tvar code = template.slice(i), end;\n\tesniff(code, '}', function (j) {\n\t\tif (esniff.nest >= 0) return esniff.next();\n\t\tend = j;\n\t});\n\tif (end != null) {\n\t\tsubstitutions.push(template.slice(i, i + end));\n\t\ti += end;\n\t\tcurrent = '';\n\t\treturn sOut;\n\t}\n\tend = code.length;\n\ti += end;\n\tcurrent += code;\n\treturn sIn;\n};\nsInEscape = function (char) {\n\tif ((char !== '\\\\') && (char !== '}')) current += '\\\\';\n\tcurrent += char;\n\treturn sIn;\n};\n\nmodule.exports = function (str) {\n\tvar length, state, result;\n\tcurrent = '';\n\tliterals = [];\n\tsubstitutions = [];\n\n\ttemplate = String(str);\n\tlength = template.length;\n\n\tstate = sOut;\n\tfor (i = 0; i < length; ++i) state = state(template[i]);\n\tif (state === sOut) {\n\t\tliterals.push(current);\n\t} else if (state === sEscape) {\n\t\tliterals.push(current + '\\\\');\n\t} else if (state === sAhead) {\n\t\tliterals.push(current + '$');\n\t} else if (state === sIn) {\n\t\tliterals[literals.length - 1] += '${' + current;\n\t} else if (state === sInEscape) {\n\t\tliterals[literals.length - 1] += '${' + current + '\\\\';\n\t}\n\tresult = { literals: literals, substitutions: substitutions };\n\tliterals = substitutions = null;\n\treturn result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es6-template-strings/compile.js?");

/***/ }),

/***/ "./node_modules/es6-template-strings/index.js":
/*!****************************************************!*\
  !*** ./node_modules/es6-template-strings/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar compile = __webpack_require__(/*! ./compile */ \"./node_modules/es6-template-strings/compile.js\")\n  , resolve = __webpack_require__(/*! ./resolve-to-string */ \"./node_modules/es6-template-strings/resolve-to-string.js\");\n\nmodule.exports = function (template, context/*, options*/) {\n\treturn resolve(compile(template), context, arguments[2]);\n};\n\n\n//# sourceURL=webpack:///./node_modules/es6-template-strings/index.js?");

/***/ }),

/***/ "./node_modules/es6-template-strings/passthru.js":
/*!*******************************************************!*\
  !*** ./node_modules/es6-template-strings/passthru.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar reduce = Array.prototype.reduce;\n\nmodule.exports = function (literals/*, …substitutions*/) {\n\tvar args = arguments;\n\treturn reduce.call(literals, function (a, b, i) {\n\t\treturn a + ((args[i] === undefined) ? '' :  String(args[i])) + b;\n\t});\n};\n\n\n//# sourceURL=webpack:///./node_modules/es6-template-strings/passthru.js?");

/***/ }),

/***/ "./node_modules/es6-template-strings/resolve-to-string.js":
/*!****************************************************************!*\
  !*** ./node_modules/es6-template-strings/resolve-to-string.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar resolve  = __webpack_require__(/*! ./resolve */ \"./node_modules/es6-template-strings/resolve.js\")\n  , passthru = __webpack_require__(/*! ./passthru */ \"./node_modules/es6-template-strings/passthru.js\");\n\nmodule.exports = function (data, context/*, options*/) {\n\treturn passthru.apply(null, resolve(data, context, arguments[2]));\n};\n\n\n//# sourceURL=webpack:///./node_modules/es6-template-strings/resolve-to-string.js?");

/***/ }),

/***/ "./node_modules/es6-template-strings/resolve.js":
/*!******************************************************!*\
  !*** ./node_modules/es6-template-strings/resolve.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar value          = __webpack_require__(/*! es5-ext/object/valid-value */ \"./node_modules/es5-ext/object/valid-value.js\")\n  , normalize      = __webpack_require__(/*! es5-ext/object/normalize-options */ \"./node_modules/es5-ext/object/normalize-options.js\")\n  , isVarNameValid = __webpack_require__(/*! esniff/is-var-name-valid */ \"./node_modules/esniff/is-var-name-valid.js\")\n\n  , map = Array.prototype.map, keys = Object.keys\n  , stringify = JSON.stringify;\n\nmodule.exports = function (data, context/*, options*/) {\n\tvar names, argNames, argValues, options = Object(arguments[2]);\n\n\t(value(data) && value(data.literals) && value(data.substitutions));\n\tcontext = normalize(context);\n\tnames = keys(context).filter(isVarNameValid);\n\targNames = names.join(', ');\n\targValues = names.map(function (name) { return context[name]; });\n\treturn [data.literals].concat(map.call(data.substitutions, function (expr) {\n\t\tvar resolver;\n\t\tif (!expr) return undefined;\n\t\ttry {\n\t\t\tresolver = new Function(argNames, 'return (' + expr + ')');\n\t\t} catch (e) {\n\t\t\tthrow new TypeError(\"Unable to compile expression:\\n\\targs: \" + stringify(argNames) +\n\t\t\t\t\"\\n\\tbody: \" + stringify(expr) + \"\\n\\terror: \" + e.stack);\n\t\t}\n\t\ttry {\n\t\t\treturn resolver.apply(null, argValues);\n\t\t} catch (e) {\n\t\t\tif (options.partial) return '${' + expr + '}';\n\t\t\tthrow new TypeError(\"Unable to resolve expression:\\n\\targs: \" + stringify(argNames) +\n\t\t\t\t\"\\n\\tbody: \" + stringify(expr) + \"\\n\\terror: \" + e.stack);\n\t\t}\n\t}));\n};\n\n\n//# sourceURL=webpack:///./node_modules/es6-template-strings/resolve.js?");

/***/ }),

/***/ "./node_modules/esniff/index.js":
/*!**************************************!*\
  !*** ./node_modules/esniff/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar from         = __webpack_require__(/*! es5-ext/array/from */ \"./node_modules/es5-ext/array/from/index.js\")\n  , primitiveSet = __webpack_require__(/*! es5-ext/object/primitive-set */ \"./node_modules/es5-ext/object/primitive-set.js\")\n  , value        = __webpack_require__(/*! es5-ext/object/valid-value */ \"./node_modules/es5-ext/object/valid-value.js\")\n  , callable     = __webpack_require__(/*! es5-ext/object/valid-callable */ \"./node_modules/es5-ext/object/valid-callable.js\")\n  , d            = __webpack_require__(/*! d */ \"./node_modules/d/index.js\")\n  , eolSet       = __webpack_require__(/*! ./lib/ws-eol */ \"./node_modules/esniff/lib/ws-eol.js\")\n  , wsSet        = __webpack_require__(/*! ./lib/ws */ \"./node_modules/esniff/lib/ws.js\")\n\n  , hasOwnProperty = Object.prototype.hasOwnProperty\n  , preRegExpSet = primitiveSet.apply(null, from(';{=([,<>+-*/%&|^!~?:}'))\n  , nonNameSet = primitiveSet.apply(null, from(';{=([,<>+-*/%&|^!~?:})].'))\n\n  , move, startCollect, endCollect, collectNest\n  , $ws, $common, $string, $comment, $multiComment, $regExp\n\n  , i, char, line, columnIndex, afterWs, previousChar\n  , nest, nestedTokens, results\n  , userCode, userTriggerChar, isUserTriggerOperatorChar, userCallback\n\n  , quote\n  , collectIndex, data, nestRelease;\n\nmove = function (j) {\n\tif (!char) return;\n\tif (i >= j) return;\n\twhile (i !== j) {\n\t\tif (!char) return;\n\t\tif (hasOwnProperty.call(wsSet, char)) {\n\t\t\tif (hasOwnProperty.call(eolSet, char)) {\n\t\t\t\tcolumnIndex = i;\n\t\t\t\t++line;\n\t\t\t}\n\t\t} else {\n\t\t\tpreviousChar = char;\n\t\t}\n\t\tchar = userCode[++i];\n\t}\n};\n\nstartCollect = function (oldNestRelease) {\n\tif (collectIndex != null) nestedTokens.push([data, collectIndex, oldNestRelease]);\n\tdata = { point: i + 1, line: line, column: i + 1 - columnIndex };\n\tcollectIndex = i;\n};\n\nendCollect = function () {\n\tvar previous;\n\tdata.raw = userCode.slice(collectIndex, i);\n\tresults.push(data);\n\tif (nestedTokens.length) {\n\t\tprevious = nestedTokens.pop();\n\t\tdata = previous[0];\n\t\tcollectIndex = previous[1];\n\t\tnestRelease = previous[2];\n\t\treturn;\n\t}\n\tdata = null;\n\tcollectIndex = null;\n\tnestRelease = null;\n};\n\ncollectNest = function () {\n\tvar old = nestRelease;\n\tnestRelease = nest;\n\t++nest;\n\tmove(i + 1);\n\tstartCollect(old);\n\treturn $ws;\n};\n\n$common = function () {\n\tif ((char === '\\'') || (char === '\"')) {\n\t\tquote = char;\n\t\tchar = userCode[++i];\n\t\treturn $string;\n\t}\n\tif ((char === '(') || (char === '{') || (char === '[')) {\n\t\t++nest;\n\t} else if ((char === ')') || (char === '}') || (char === ']')) {\n\t\tif (nestRelease === --nest) endCollect();\n\t} else if (char === '/') {\n\t\tif (hasOwnProperty.call(preRegExpSet, previousChar)) {\n\t\t\tchar = userCode[++i];\n\t\t\treturn $regExp;\n\t\t}\n\t}\n\tif ((char !== userTriggerChar) || (!isUserTriggerOperatorChar && previousChar && !afterWs &&\n\t\t\t!hasOwnProperty.call(nonNameSet, previousChar))) {\n\t\tpreviousChar = char;\n\t\tchar = userCode[++i];\n\t\treturn $ws;\n\t}\n\n\treturn userCallback(i, previousChar, nest);\n};\n\n$comment = function () {\n\twhile (true) {\n\t\tif (!char) return;\n\t\tif (hasOwnProperty.call(eolSet, char)) {\n\t\t\tcolumnIndex = i + 1;\n\t\t\t++line;\n\t\t\treturn;\n\t\t}\n\t\tchar = userCode[++i];\n\t}\n};\n\n$multiComment = function () {\n\twhile (true) {\n\t\tif (!char) return;\n\t\tif (char === '*') {\n\t\t\tchar = userCode[++i];\n\t\t\tif (char === '/') return;\n\t\t\tcontinue;\n\t\t}\n\t\tif (hasOwnProperty.call(eolSet, char)) {\n\t\t\tcolumnIndex = i + 1;\n\t\t\t++line;\n\t\t}\n\t\tchar = userCode[++i];\n\t}\n};\n\n$ws = function () {\n\tvar next;\n\tafterWs = false;\n\twhile (true) {\n\t\tif (!char) return;\n\t\tif (hasOwnProperty.call(wsSet, char)) {\n\t\t\tafterWs = true;\n\t\t\tif (hasOwnProperty.call(eolSet, char)) {\n\t\t\t\tcolumnIndex = i + 1;\n\t\t\t\t++line;\n\t\t\t}\n\t\t} else if (char === '/') {\n\t\t\tnext = userCode[i + 1];\n\t\t\tif (next === '/') {\n\t\t\t\tchar = userCode[i += 2];\n\t\t\t\tafterWs = true;\n\t\t\t\t$comment();\n\t\t\t} else if (next === '*') {\n\t\t\t\tchar = userCode[i += 2];\n\t\t\t\tafterWs = true;\n\t\t\t\t$multiComment();\n\t\t\t} else {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t} else {\n\t\t\tbreak;\n\t\t}\n\t\tchar = userCode[++i];\n\t}\n\treturn $common;\n};\n\n$string = function () {\n\twhile (true) {\n\t\tif (!char) return;\n\t\tif (char === quote) {\n\t\t\tchar = userCode[++i];\n\t\t\tpreviousChar = quote;\n\t\t\treturn $ws;\n\t\t}\n\t\tif (char === '\\\\') {\n\t\t\tif (hasOwnProperty.call(eolSet, userCode[++i])) {\n\t\t\t\tcolumnIndex = i + 1;\n\t\t\t\t++line;\n\t\t\t}\n\t\t}\n\t\tchar = userCode[++i];\n\t}\n};\n\n$regExp = function () {\n\twhile (true) {\n\t\tif (!char) return;\n\t\tif (char === '/') {\n\t\t\tpreviousChar = '/';\n\t\t\tchar = userCode[++i];\n\t\t\treturn $ws;\n\t\t}\n\t\tif (char === '\\\\') ++i;\n\t\tchar = userCode[++i];\n\t}\n};\n\nmodule.exports = exports = function (code, triggerChar, callback) {\n\tvar state;\n\n\tuserCode = String(value(code));\n\tuserTriggerChar = String(value(triggerChar));\n\tif (userTriggerChar.length !== 1) {\n\t\tthrow new TypeError(userTriggerChar + \" should be one character long string\");\n\t}\n\tuserCallback = callable(callback);\n\tisUserTriggerOperatorChar = hasOwnProperty.call(nonNameSet, userTriggerChar);\n\ti = 0;\n\tchar = userCode[i];\n\tline = 1;\n\tcolumnIndex = 0;\n\tafterWs = false;\n\tpreviousChar = null;\n\tnest = 0;\n\tnestedTokens = [];\n\tresults = [];\n\texports.forceStop = false;\n\tstate = $ws;\n\twhile (state) state = state();\n\treturn results;\n};\n\nObject.defineProperties(exports, {\n\t$ws: d($ws),\n\t$common: d($common),\n\tcollectNest: d(collectNest),\n\tmove: d(move),\n\tindex: d.gs(function () { return i; }),\n\tline: d.gs(function () { return line; }),\n\tnest: d.gs(function () { return nest; }),\n\tcolumnIndex: d.gs(function () { return columnIndex; }),\n\tnext: d(function (step) {\n\t\tif (!char) return;\n\t\tmove(i + (step || 1));\n\t\treturn $ws();\n\t}),\n\tresume: d(function () { return $common; })\n});\n\n\n//# sourceURL=webpack:///./node_modules/esniff/index.js?");

/***/ }),

/***/ "./node_modules/esniff/is-var-name-valid.js":
/*!**************************************************!*\
  !*** ./node_modules/esniff/is-var-name-valid.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// Credit: Mathias Bynens -> https://mathiasbynens.be/demo/javascript-identifier-regex\n\n\n\nmodule.exports = RegExp.prototype.test.bind(/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|null|this|true|void|with|await|break|catch|class|const|false|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)(?:[\\$A-Z_a-z\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0370-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u048A-\\u052F\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0620-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06E5\\u06E6\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4\\u07F5\\u07FA\\u0800-\\u0815\\u081A\\u0824\\u0828\\u0840-\\u0858\\u08A0-\\u08B4\\u08B6-\\u08BD\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0971-\\u0980\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0AF9\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D\\u0C58-\\u0C5A\\u0C60\\u0C61\\u0C80\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDE\\u0CE0\\u0CE1\\u0CF1\\u0CF2\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D\\u0D4E\\u0D54-\\u0D56\\u0D5F-\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0E01-\\u0E30\\u0E32\\u0E33\\u0E40-\\u0E46\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB0\\u0EB2\\u0EB3\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EDC-\\u0EDF\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8C\\u1000-\\u102A\\u103F\\u1050-\\u1055\\u105A-\\u105D\\u1061\\u1065\\u1066\\u106E-\\u1070\\u1075-\\u1081\\u108E\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u13A0-\\u13F5\\u13F8-\\u13FD\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u170C\\u170E-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1780-\\u17B3\\u17D7\\u17DC\\u1820-\\u1877\\u1880-\\u18A8\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1950-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19B0-\\u19C9\\u1A00-\\u1A16\\u1A20-\\u1A54\\u1AA7\\u1B05-\\u1B33\\u1B45-\\u1B4B\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1BBA-\\u1BE5\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1C80-\\u1C88\\u1CE9-\\u1CEC\\u1CEE-\\u1CF1\\u1CF5\\u1CF6\\u1D00-\\u1DBF\\u1E00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u2071\\u207F\\u2090-\\u209C\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2118-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2CE4\\u2CEB-\\u2CEE\\u2CF2\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303C\\u3041-\\u3096\\u309B-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FD5\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A\\uA62B\\uA640-\\uA66E\\uA67F-\\uA69D\\uA6A0-\\uA6EF\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA7AE\\uA7B0-\\uA7B7\\uA7F7-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA8F2-\\uA8F7\\uA8FB\\uA8FD\\uA90A-\\uA925\\uA930-\\uA946\\uA960-\\uA97C\\uA984-\\uA9B2\\uA9CF\\uA9E0-\\uA9E4\\uA9E6-\\uA9EF\\uA9FA-\\uA9FE\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAA60-\\uAA76\\uAA7A\\uAA7E-\\uAAAF\\uAAB1\\uAAB5\\uAAB6\\uAAB9-\\uAABD\\uAAC0\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEA\\uAAF2-\\uAAF4\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB5A\\uAB5C-\\uAB65\\uAB70-\\uABE2\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF21-\\uFF3A\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]|\\uD800[\\uDC00-\\uDC0B\\uDC0D-\\uDC26\\uDC28-\\uDC3A\\uDC3C\\uDC3D\\uDC3F-\\uDC4D\\uDC50-\\uDC5D\\uDC80-\\uDCFA\\uDD40-\\uDD74\\uDE80-\\uDE9C\\uDEA0-\\uDED0\\uDF00-\\uDF1F\\uDF30-\\uDF4A\\uDF50-\\uDF75\\uDF80-\\uDF9D\\uDFA0-\\uDFC3\\uDFC8-\\uDFCF\\uDFD1-\\uDFD5]|\\uD801[\\uDC00-\\uDC9D\\uDCB0-\\uDCD3\\uDCD8-\\uDCFB\\uDD00-\\uDD27\\uDD30-\\uDD63\\uDE00-\\uDF36\\uDF40-\\uDF55\\uDF60-\\uDF67]|\\uD802[\\uDC00-\\uDC05\\uDC08\\uDC0A-\\uDC35\\uDC37\\uDC38\\uDC3C\\uDC3F-\\uDC55\\uDC60-\\uDC76\\uDC80-\\uDC9E\\uDCE0-\\uDCF2\\uDCF4\\uDCF5\\uDD00-\\uDD15\\uDD20-\\uDD39\\uDD80-\\uDDB7\\uDDBE\\uDDBF\\uDE00\\uDE10-\\uDE13\\uDE15-\\uDE17\\uDE19-\\uDE33\\uDE60-\\uDE7C\\uDE80-\\uDE9C\\uDEC0-\\uDEC7\\uDEC9-\\uDEE4\\uDF00-\\uDF35\\uDF40-\\uDF55\\uDF60-\\uDF72\\uDF80-\\uDF91]|\\uD803[\\uDC00-\\uDC48\\uDC80-\\uDCB2\\uDCC0-\\uDCF2]|\\uD804[\\uDC03-\\uDC37\\uDC83-\\uDCAF\\uDCD0-\\uDCE8\\uDD03-\\uDD26\\uDD50-\\uDD72\\uDD76\\uDD83-\\uDDB2\\uDDC1-\\uDDC4\\uDDDA\\uDDDC\\uDE00-\\uDE11\\uDE13-\\uDE2B\\uDE80-\\uDE86\\uDE88\\uDE8A-\\uDE8D\\uDE8F-\\uDE9D\\uDE9F-\\uDEA8\\uDEB0-\\uDEDE\\uDF05-\\uDF0C\\uDF0F\\uDF10\\uDF13-\\uDF28\\uDF2A-\\uDF30\\uDF32\\uDF33\\uDF35-\\uDF39\\uDF3D\\uDF50\\uDF5D-\\uDF61]|\\uD805[\\uDC00-\\uDC34\\uDC47-\\uDC4A\\uDC80-\\uDCAF\\uDCC4\\uDCC5\\uDCC7\\uDD80-\\uDDAE\\uDDD8-\\uDDDB\\uDE00-\\uDE2F\\uDE44\\uDE80-\\uDEAA\\uDF00-\\uDF19]|\\uD806[\\uDCA0-\\uDCDF\\uDCFF\\uDEC0-\\uDEF8]|\\uD807[\\uDC00-\\uDC08\\uDC0A-\\uDC2E\\uDC40\\uDC72-\\uDC8F]|\\uD808[\\uDC00-\\uDF99]|\\uD809[\\uDC00-\\uDC6E\\uDC80-\\uDD43]|[\\uD80C\\uD81C-\\uD820\\uD840-\\uD868\\uD86A-\\uD86C\\uD86F-\\uD872][\\uDC00-\\uDFFF]|\\uD80D[\\uDC00-\\uDC2E]|\\uD811[\\uDC00-\\uDE46]|\\uD81A[\\uDC00-\\uDE38\\uDE40-\\uDE5E\\uDED0-\\uDEED\\uDF00-\\uDF2F\\uDF40-\\uDF43\\uDF63-\\uDF77\\uDF7D-\\uDF8F]|\\uD81B[\\uDF00-\\uDF44\\uDF50\\uDF93-\\uDF9F\\uDFE0]|\\uD821[\\uDC00-\\uDFEC]|\\uD822[\\uDC00-\\uDEF2]|\\uD82C[\\uDC00\\uDC01]|\\uD82F[\\uDC00-\\uDC6A\\uDC70-\\uDC7C\\uDC80-\\uDC88\\uDC90-\\uDC99]|\\uD835[\\uDC00-\\uDC54\\uDC56-\\uDC9C\\uDC9E\\uDC9F\\uDCA2\\uDCA5\\uDCA6\\uDCA9-\\uDCAC\\uDCAE-\\uDCB9\\uDCBB\\uDCBD-\\uDCC3\\uDCC5-\\uDD05\\uDD07-\\uDD0A\\uDD0D-\\uDD14\\uDD16-\\uDD1C\\uDD1E-\\uDD39\\uDD3B-\\uDD3E\\uDD40-\\uDD44\\uDD46\\uDD4A-\\uDD50\\uDD52-\\uDEA5\\uDEA8-\\uDEC0\\uDEC2-\\uDEDA\\uDEDC-\\uDEFA\\uDEFC-\\uDF14\\uDF16-\\uDF34\\uDF36-\\uDF4E\\uDF50-\\uDF6E\\uDF70-\\uDF88\\uDF8A-\\uDFA8\\uDFAA-\\uDFC2\\uDFC4-\\uDFCB]|\\uD83A[\\uDC00-\\uDCC4\\uDD00-\\uDD43]|\\uD83B[\\uDE00-\\uDE03\\uDE05-\\uDE1F\\uDE21\\uDE22\\uDE24\\uDE27\\uDE29-\\uDE32\\uDE34-\\uDE37\\uDE39\\uDE3B\\uDE42\\uDE47\\uDE49\\uDE4B\\uDE4D-\\uDE4F\\uDE51\\uDE52\\uDE54\\uDE57\\uDE59\\uDE5B\\uDE5D\\uDE5F\\uDE61\\uDE62\\uDE64\\uDE67-\\uDE6A\\uDE6C-\\uDE72\\uDE74-\\uDE77\\uDE79-\\uDE7C\\uDE7E\\uDE80-\\uDE89\\uDE8B-\\uDE9B\\uDEA1-\\uDEA3\\uDEA5-\\uDEA9\\uDEAB-\\uDEBB]|\\uD869[\\uDC00-\\uDED6\\uDF00-\\uDFFF]|\\uD86D[\\uDC00-\\uDF34\\uDF40-\\uDFFF]|\\uD86E[\\uDC00-\\uDC1D\\uDC20-\\uDFFF]|\\uD873[\\uDC00-\\uDEA1]|\\uD87E[\\uDC00-\\uDE1D])(?:[\\$0-9A-Z_a-z\\xAA\\xB5\\xB7\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0300-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u0483-\\u0487\\u048A-\\u052F\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0610-\\u061A\\u0620-\\u0669\\u066E-\\u06D3\\u06D5-\\u06DC\\u06DF-\\u06E8\\u06EA-\\u06FC\\u06FF\\u0710-\\u074A\\u074D-\\u07B1\\u07C0-\\u07F5\\u07FA\\u0800-\\u082D\\u0840-\\u085B\\u08A0-\\u08B4\\u08B6-\\u08BD\\u08D4-\\u08E1\\u08E3-\\u0963\\u0966-\\u096F\\u0971-\\u0983\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BC-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CE\\u09D7\\u09DC\\u09DD\\u09DF-\\u09E3\\u09E6-\\u09F1\\u0A01-\\u0A03\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A59-\\u0A5C\\u0A5E\\u0A66-\\u0A75\\u0A81-\\u0A83\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABC-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AD0\\u0AE0-\\u0AE3\\u0AE6-\\u0AEF\\u0AF9\\u0B01-\\u0B03\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3C-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B56\\u0B57\\u0B5C\\u0B5D\\u0B5F-\\u0B63\\u0B66-\\u0B6F\\u0B71\\u0B82\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD0\\u0BD7\\u0BE6-\\u0BEF\\u0C00-\\u0C03\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C58-\\u0C5A\\u0C60-\\u0C63\\u0C66-\\u0C6F\\u0C80-\\u0C83\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBC-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CDE\\u0CE0-\\u0CE3\\u0CE6-\\u0CEF\\u0CF1\\u0CF2\\u0D01-\\u0D03\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4E\\u0D54-\\u0D57\\u0D5F-\\u0D63\\u0D66-\\u0D6F\\u0D7A-\\u0D7F\\u0D82\\u0D83\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DE6-\\u0DEF\\u0DF2\\u0DF3\\u0E01-\\u0E3A\\u0E40-\\u0E4E\\u0E50-\\u0E59\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB9\\u0EBB-\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EC8-\\u0ECD\\u0ED0-\\u0ED9\\u0EDC-\\u0EDF\\u0F00\\u0F18\\u0F19\\u0F20-\\u0F29\\u0F35\\u0F37\\u0F39\\u0F3E-\\u0F47\\u0F49-\\u0F6C\\u0F71-\\u0F84\\u0F86-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u1000-\\u1049\\u1050-\\u109D\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u135D-\\u135F\\u1369-\\u1371\\u1380-\\u138F\\u13A0-\\u13F5\\u13F8-\\u13FD\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u170C\\u170E-\\u1714\\u1720-\\u1734\\u1740-\\u1753\\u1760-\\u176C\\u176E-\\u1770\\u1772\\u1773\\u1780-\\u17D3\\u17D7\\u17DC\\u17DD\\u17E0-\\u17E9\\u180B-\\u180D\\u1810-\\u1819\\u1820-\\u1877\\u1880-\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1920-\\u192B\\u1930-\\u193B\\u1946-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19B0-\\u19C9\\u19D0-\\u19DA\\u1A00-\\u1A1B\\u1A20-\\u1A5E\\u1A60-\\u1A7C\\u1A7F-\\u1A89\\u1A90-\\u1A99\\u1AA7\\u1AB0-\\u1ABD\\u1B00-\\u1B4B\\u1B50-\\u1B59\\u1B6B-\\u1B73\\u1B80-\\u1BF3\\u1C00-\\u1C37\\u1C40-\\u1C49\\u1C4D-\\u1C7D\\u1C80-\\u1C88\\u1CD0-\\u1CD2\\u1CD4-\\u1CF6\\u1CF8\\u1CF9\\u1D00-\\u1DF5\\u1DFB-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u200C\\u200D\\u203F\\u2040\\u2054\\u2071\\u207F\\u2090-\\u209C\\u20D0-\\u20DC\\u20E1\\u20E5-\\u20F0\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2118-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2CE4\\u2CEB-\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D7F-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2DE0-\\u2DFF\\u3005-\\u3007\\u3021-\\u302F\\u3031-\\u3035\\u3038-\\u303C\\u3041-\\u3096\\u3099-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FD5\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA62B\\uA640-\\uA66F\\uA674-\\uA67D\\uA67F-\\uA6F1\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA7AE\\uA7B0-\\uA7B7\\uA7F7-\\uA827\\uA840-\\uA873\\uA880-\\uA8C5\\uA8D0-\\uA8D9\\uA8E0-\\uA8F7\\uA8FB\\uA8FD\\uA900-\\uA92D\\uA930-\\uA953\\uA960-\\uA97C\\uA980-\\uA9C0\\uA9CF-\\uA9D9\\uA9E0-\\uA9FE\\uAA00-\\uAA36\\uAA40-\\uAA4D\\uAA50-\\uAA59\\uAA60-\\uAA76\\uAA7A-\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEF\\uAAF2-\\uAAF6\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB5A\\uAB5C-\\uAB65\\uAB70-\\uABEA\\uABEC\\uABED\\uABF0-\\uABF9\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFE33\\uFE34\\uFE4D-\\uFE4F\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF10-\\uFF19\\uFF21-\\uFF3A\\uFF3F\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]|\\uD800[\\uDC00-\\uDC0B\\uDC0D-\\uDC26\\uDC28-\\uDC3A\\uDC3C\\uDC3D\\uDC3F-\\uDC4D\\uDC50-\\uDC5D\\uDC80-\\uDCFA\\uDD40-\\uDD74\\uDDFD\\uDE80-\\uDE9C\\uDEA0-\\uDED0\\uDEE0\\uDF00-\\uDF1F\\uDF30-\\uDF4A\\uDF50-\\uDF7A\\uDF80-\\uDF9D\\uDFA0-\\uDFC3\\uDFC8-\\uDFCF\\uDFD1-\\uDFD5]|\\uD801[\\uDC00-\\uDC9D\\uDCA0-\\uDCA9\\uDCB0-\\uDCD3\\uDCD8-\\uDCFB\\uDD00-\\uDD27\\uDD30-\\uDD63\\uDE00-\\uDF36\\uDF40-\\uDF55\\uDF60-\\uDF67]|\\uD802[\\uDC00-\\uDC05\\uDC08\\uDC0A-\\uDC35\\uDC37\\uDC38\\uDC3C\\uDC3F-\\uDC55\\uDC60-\\uDC76\\uDC80-\\uDC9E\\uDCE0-\\uDCF2\\uDCF4\\uDCF5\\uDD00-\\uDD15\\uDD20-\\uDD39\\uDD80-\\uDDB7\\uDDBE\\uDDBF\\uDE00-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE13\\uDE15-\\uDE17\\uDE19-\\uDE33\\uDE38-\\uDE3A\\uDE3F\\uDE60-\\uDE7C\\uDE80-\\uDE9C\\uDEC0-\\uDEC7\\uDEC9-\\uDEE6\\uDF00-\\uDF35\\uDF40-\\uDF55\\uDF60-\\uDF72\\uDF80-\\uDF91]|\\uD803[\\uDC00-\\uDC48\\uDC80-\\uDCB2\\uDCC0-\\uDCF2]|\\uD804[\\uDC00-\\uDC46\\uDC66-\\uDC6F\\uDC7F-\\uDCBA\\uDCD0-\\uDCE8\\uDCF0-\\uDCF9\\uDD00-\\uDD34\\uDD36-\\uDD3F\\uDD50-\\uDD73\\uDD76\\uDD80-\\uDDC4\\uDDCA-\\uDDCC\\uDDD0-\\uDDDA\\uDDDC\\uDE00-\\uDE11\\uDE13-\\uDE37\\uDE3E\\uDE80-\\uDE86\\uDE88\\uDE8A-\\uDE8D\\uDE8F-\\uDE9D\\uDE9F-\\uDEA8\\uDEB0-\\uDEEA\\uDEF0-\\uDEF9\\uDF00-\\uDF03\\uDF05-\\uDF0C\\uDF0F\\uDF10\\uDF13-\\uDF28\\uDF2A-\\uDF30\\uDF32\\uDF33\\uDF35-\\uDF39\\uDF3C-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF50\\uDF57\\uDF5D-\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74]|\\uD805[\\uDC00-\\uDC4A\\uDC50-\\uDC59\\uDC80-\\uDCC5\\uDCC7\\uDCD0-\\uDCD9\\uDD80-\\uDDB5\\uDDB8-\\uDDC0\\uDDD8-\\uDDDD\\uDE00-\\uDE40\\uDE44\\uDE50-\\uDE59\\uDE80-\\uDEB7\\uDEC0-\\uDEC9\\uDF00-\\uDF19\\uDF1D-\\uDF2B\\uDF30-\\uDF39]|\\uD806[\\uDCA0-\\uDCE9\\uDCFF\\uDEC0-\\uDEF8]|\\uD807[\\uDC00-\\uDC08\\uDC0A-\\uDC36\\uDC38-\\uDC40\\uDC50-\\uDC59\\uDC72-\\uDC8F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6]|\\uD808[\\uDC00-\\uDF99]|\\uD809[\\uDC00-\\uDC6E\\uDC80-\\uDD43]|[\\uD80C\\uD81C-\\uD820\\uD840-\\uD868\\uD86A-\\uD86C\\uD86F-\\uD872][\\uDC00-\\uDFFF]|\\uD80D[\\uDC00-\\uDC2E]|\\uD811[\\uDC00-\\uDE46]|\\uD81A[\\uDC00-\\uDE38\\uDE40-\\uDE5E\\uDE60-\\uDE69\\uDED0-\\uDEED\\uDEF0-\\uDEF4\\uDF00-\\uDF36\\uDF40-\\uDF43\\uDF50-\\uDF59\\uDF63-\\uDF77\\uDF7D-\\uDF8F]|\\uD81B[\\uDF00-\\uDF44\\uDF50-\\uDF7E\\uDF8F-\\uDF9F\\uDFE0]|\\uD821[\\uDC00-\\uDFEC]|\\uD822[\\uDC00-\\uDEF2]|\\uD82C[\\uDC00\\uDC01]|\\uD82F[\\uDC00-\\uDC6A\\uDC70-\\uDC7C\\uDC80-\\uDC88\\uDC90-\\uDC99\\uDC9D\\uDC9E]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD72\\uDD7B-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD835[\\uDC00-\\uDC54\\uDC56-\\uDC9C\\uDC9E\\uDC9F\\uDCA2\\uDCA5\\uDCA6\\uDCA9-\\uDCAC\\uDCAE-\\uDCB9\\uDCBB\\uDCBD-\\uDCC3\\uDCC5-\\uDD05\\uDD07-\\uDD0A\\uDD0D-\\uDD14\\uDD16-\\uDD1C\\uDD1E-\\uDD39\\uDD3B-\\uDD3E\\uDD40-\\uDD44\\uDD46\\uDD4A-\\uDD50\\uDD52-\\uDEA5\\uDEA8-\\uDEC0\\uDEC2-\\uDEDA\\uDEDC-\\uDEFA\\uDEFC-\\uDF14\\uDF16-\\uDF34\\uDF36-\\uDF4E\\uDF50-\\uDF6E\\uDF70-\\uDF88\\uDF8A-\\uDFA8\\uDFAA-\\uDFC2\\uDFC4-\\uDFCB\\uDFCE-\\uDFFF]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A]|\\uD83A[\\uDC00-\\uDCC4\\uDCD0-\\uDCD6\\uDD00-\\uDD4A\\uDD50-\\uDD59]|\\uD83B[\\uDE00-\\uDE03\\uDE05-\\uDE1F\\uDE21\\uDE22\\uDE24\\uDE27\\uDE29-\\uDE32\\uDE34-\\uDE37\\uDE39\\uDE3B\\uDE42\\uDE47\\uDE49\\uDE4B\\uDE4D-\\uDE4F\\uDE51\\uDE52\\uDE54\\uDE57\\uDE59\\uDE5B\\uDE5D\\uDE5F\\uDE61\\uDE62\\uDE64\\uDE67-\\uDE6A\\uDE6C-\\uDE72\\uDE74-\\uDE77\\uDE79-\\uDE7C\\uDE7E\\uDE80-\\uDE89\\uDE8B-\\uDE9B\\uDEA1-\\uDEA3\\uDEA5-\\uDEA9\\uDEAB-\\uDEBB]|\\uD869[\\uDC00-\\uDED6\\uDF00-\\uDFFF]|\\uD86D[\\uDC00-\\uDF34\\uDF40-\\uDFFF]|\\uD86E[\\uDC00-\\uDC1D\\uDC20-\\uDFFF]|\\uD873[\\uDC00-\\uDEA1]|\\uD87E[\\uDC00-\\uDE1D]|\\uDB40[\\uDD00-\\uDDEF])*$/);\n\n\n//# sourceURL=webpack:///./node_modules/esniff/is-var-name-valid.js?");

/***/ }),

/***/ "./node_modules/esniff/lib/ws-eol.js":
/*!*******************************************!*\
  !*** ./node_modules/esniff/lib/ws-eol.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar from         = __webpack_require__(/*! es5-ext/array/from */ \"./node_modules/es5-ext/array/from/index.js\")\n  , primitiveSet = __webpack_require__(/*! es5-ext/object/primitive-set */ \"./node_modules/es5-ext/object/primitive-set.js\");\n\nmodule.exports = primitiveSet.apply(null, from('\\n\\r\\u2028\\u2029'));\n\n\n//# sourceURL=webpack:///./node_modules/esniff/lib/ws-eol.js?");

/***/ }),

/***/ "./node_modules/esniff/lib/ws-inline.js":
/*!**********************************************!*\
  !*** ./node_modules/esniff/lib/ws-inline.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar from         = __webpack_require__(/*! es5-ext/array/from */ \"./node_modules/es5-ext/array/from/index.js\")\n  , primitiveSet = __webpack_require__(/*! es5-ext/object/primitive-set */ \"./node_modules/es5-ext/object/primitive-set.js\");\n\nmodule.exports = primitiveSet.apply(null, from(' \\f\\t\\v​\\u00a0\\u1680​\\u180e' +\n\t'\\u2000​\\u2001\\u2002​\\u2003\\u2004​\\u2005\\u2006​\\u2007\\u2008​\\u2009\\u200a' +\n\t'​​​\\u202f\\u205f​\\u3000'));\n\n\n//# sourceURL=webpack:///./node_modules/esniff/lib/ws-inline.js?");

/***/ }),

/***/ "./node_modules/esniff/lib/ws.js":
/*!***************************************!*\
  !*** ./node_modules/esniff/lib/ws.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar primitiveSet = __webpack_require__(/*! es5-ext/object/primitive-set */ \"./node_modules/es5-ext/object/primitive-set.js\")\n  , eol          = __webpack_require__(/*! ./ws-eol */ \"./node_modules/esniff/lib/ws-eol.js\")\n  , inline       = __webpack_require__(/*! ./ws-inline */ \"./node_modules/esniff/lib/ws-inline.js\");\n\nmodule.exports = primitiveSet.apply(null,\n\tObject.keys(eol).concat(Object.keys(inline)));\n\n\n//# sourceURL=webpack:///./node_modules/esniff/lib/ws.js?");

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*\nobject-assign\n(c) Sindre Sorhus\n@license MIT\n*/\n\n\n/* eslint-disable no-unused-vars */\nvar getOwnPropertySymbols = Object.getOwnPropertySymbols;\nvar hasOwnProperty = Object.prototype.hasOwnProperty;\nvar propIsEnumerable = Object.prototype.propertyIsEnumerable;\n\nfunction toObject(val) {\n\tif (val === null || val === undefined) {\n\t\tthrow new TypeError('Object.assign cannot be called with null or undefined');\n\t}\n\n\treturn Object(val);\n}\n\nfunction shouldUseNative() {\n\ttry {\n\t\tif (!Object.assign) {\n\t\t\treturn false;\n\t\t}\n\n\t\t// Detect buggy property enumeration order in older V8 versions.\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=4118\n\t\tvar test1 = new String('abc');  // eslint-disable-line no-new-wrappers\n\t\ttest1[5] = 'de';\n\t\tif (Object.getOwnPropertyNames(test1)[0] === '5') {\n\t\t\treturn false;\n\t\t}\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=3056\n\t\tvar test2 = {};\n\t\tfor (var i = 0; i < 10; i++) {\n\t\t\ttest2['_' + String.fromCharCode(i)] = i;\n\t\t}\n\t\tvar order2 = Object.getOwnPropertyNames(test2).map(function (n) {\n\t\t\treturn test2[n];\n\t\t});\n\t\tif (order2.join('') !== '0123456789') {\n\t\t\treturn false;\n\t\t}\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=3056\n\t\tvar test3 = {};\n\t\t'abcdefghijklmnopqrst'.split('').forEach(function (letter) {\n\t\t\ttest3[letter] = letter;\n\t\t});\n\t\tif (Object.keys(Object.assign({}, test3)).join('') !==\n\t\t\t\t'abcdefghijklmnopqrst') {\n\t\t\treturn false;\n\t\t}\n\n\t\treturn true;\n\t} catch (err) {\n\t\t// We don't expect any of the above to throw, but better to be safe.\n\t\treturn false;\n\t}\n}\n\nmodule.exports = shouldUseNative() ? Object.assign : function (target, source) {\n\tvar from;\n\tvar to = toObject(target);\n\tvar symbols;\n\n\tfor (var s = 1; s < arguments.length; s++) {\n\t\tfrom = Object(arguments[s]);\n\n\t\tfor (var key in from) {\n\t\t\tif (hasOwnProperty.call(from, key)) {\n\t\t\t\tto[key] = from[key];\n\t\t\t}\n\t\t}\n\n\t\tif (getOwnPropertySymbols) {\n\t\t\tsymbols = getOwnPropertySymbols(from);\n\t\t\tfor (var i = 0; i < symbols.length; i++) {\n\t\t\t\tif (propIsEnumerable.call(from, symbols[i])) {\n\t\t\t\t\tto[symbols[i]] = from[symbols[i]];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\treturn to;\n};\n\n\n//# sourceURL=webpack:///./node_modules/object-assign/index.js?");

/***/ }),

/***/ "./node_modules/print-object/index.js":
/*!********************************************!*\
  !*** ./node_modules/print-object/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar objectAssign = __webpack_require__(/*! object-assign */ \"./node_modules/object-assign/index.js\");\nvar compile  = __webpack_require__(/*! es6-template-strings/compile */ \"./node_modules/es6-template-strings/compile.js\");\nvar template = __webpack_require__(/*! es6-template-strings */ \"./node_modules/es6-template-strings/index.js\");\nvar resolve  = __webpack_require__(/*! es6-template-strings/resolve-to-string */ \"./node_modules/es6-template-strings/resolve-to-string.js\");\n\nmodule.exports = function(obj, opts){\n\n    var options = objectAssign({}, opts);\n\n    if (!obj) {\n        throw new Error('You must supply an object to print');\n    }\n\n    var unpacked;\n\n    if (options.html){\n        unpacked = unpackEmbeddedObjects(obj, '', '<br>');\n        return printToHTML(unpacked, options);\n    } else {\n        unpacked = unpackEmbeddedObjects(obj, '\\n  ', '');\n        return printObject(unpacked, '', '\\n');\n    }\n\n\n};\n\n/**\n *\n * @param {Object} obj\n * @param {String} beforeLine\n * @param {String} afterLine\n * @returns {{}}\n */\n\nfunction unpackEmbeddedObjects(obj, beforeLine, afterLine){\n\n    var o = {};\n\n    for(var key in obj){\n\n        if (obj.hasOwnProperty(key)){\n\n            var value = obj[key];\n            var isArray = Array.isArray(value);\n\n            if (!isArray && typeof value === 'object'){\n                o[key] = printObject(value, beforeLine, afterLine);\n            } else {\n                o[key] = value;\n            }\n        }\n\n    }\n\n    return o;\n\n}\n\nfunction printObject(obj, beforeLine, afterLine){\n\n    var s = '';\n\n    for (var key in obj){\n        if (obj.hasOwnProperty(key)){\n            s += beforeLine + key + \": \"+obj[key].toString();\n            s += afterLine;\n        }\n    }\n\n    return s;\n}\n\nfunction printToHTML(obj, opts){\n\n    var options = objectAssign({}, opts);\n\n    var element = options.tag ? options.tag : 'table';\n    var tableStart = compile('<table${s1}${c}${s2}${a}>');\n    var trTemplate = compile('<tr><td>${key}</td><td>${value}</td></tr>');\n    var divStart = compile('<div${c}${a}>');\n    var divTemplate = compile('<div><span>${key}</span><span>${value}</span></div>');\n    var closeTags = ['</table>', '</div>'];\n\n    var className = options.class ? template('class=\"${c}\"', {c:options.class}) : '';\n    var htmlAttr = options.attr || '';\n\n    var spacer1 = className.length > 0 ? ' ' : '';\n    var spacer2 = htmlAttr.length  > 0 ? ' ' : '';\n\n    var row;\n    var start;\n    var end;\n\n    if (element === 'table'){\n        row = trTemplate;\n        start = resolve(tableStart, {s1:spacer1, c:className, s2:spacer2, a:htmlAttr });\n        end = closeTags[0];\n    } else {\n        row = divTemplate;\n        start = resolve(divStart, {c:className, s:spacer, a:htmlAttr });\n        end = closeTags[1];\n    }\n\n    var html = start;\n\n    for(var key in obj){\n\n        if (obj.hasOwnProperty(key)){\n            var value = obj[key];\n            html += resolve(row, {key:key, value:value});\n        }\n    }\n\n    html += end;\n\n    return html;\n\n}\n\n\n\n//# sourceURL=webpack:///./node_modules/print-object/index.js?");

/***/ }),

/***/ "./node_modules/type/function/is.js":
/*!******************************************!*\
  !*** ./node_modules/type/function/is.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isPrototype = __webpack_require__(/*! ../prototype/is */ \"./node_modules/type/prototype/is.js\");\n\nmodule.exports = function (value) {\n\tif (typeof value !== \"function\") return false;\n\n\tif (!hasOwnProperty.call(value, \"length\")) return false;\n\n\ttry {\n\t\tif (typeof value.length !== \"number\") return false;\n\t\tif (typeof value.call !== \"function\") return false;\n\t\tif (typeof value.apply !== \"function\") return false;\n\t} catch (error) {\n\t\treturn false;\n\t}\n\n\treturn !isPrototype(value);\n};\n\n\n//# sourceURL=webpack:///./node_modules/type/function/is.js?");

/***/ }),

/***/ "./node_modules/type/object/is.js":
/*!****************************************!*\
  !*** ./node_modules/type/object/is.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isValue = __webpack_require__(/*! ../value/is */ \"./node_modules/type/value/is.js\");\n\n// prettier-ignore\nvar possibleTypes = { \"object\": true, \"function\": true, \"undefined\": true /* document.all */ };\n\nmodule.exports = function (value) {\n\tif (!isValue(value)) return false;\n\treturn hasOwnProperty.call(possibleTypes, typeof value);\n};\n\n\n//# sourceURL=webpack:///./node_modules/type/object/is.js?");

/***/ }),

/***/ "./node_modules/type/plain-function/is.js":
/*!************************************************!*\
  !*** ./node_modules/type/plain-function/is.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isFunction = __webpack_require__(/*! ../function/is */ \"./node_modules/type/function/is.js\");\n\nvar classRe = /^\\s*class[\\s{/}]/, functionToString = Function.prototype.toString;\n\nmodule.exports = function (value) {\n\tif (!isFunction(value)) return false;\n\tif (classRe.test(functionToString.call(value))) return false;\n\treturn true;\n};\n\n\n//# sourceURL=webpack:///./node_modules/type/plain-function/is.js?");

/***/ }),

/***/ "./node_modules/type/prototype/is.js":
/*!*******************************************!*\
  !*** ./node_modules/type/prototype/is.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isObject = __webpack_require__(/*! ../object/is */ \"./node_modules/type/object/is.js\");\n\nmodule.exports = function (value) {\n\tif (!isObject(value)) return false;\n\ttry {\n\t\tif (!value.constructor) return false;\n\t\treturn value.constructor.prototype === value;\n\t} catch (error) {\n\t\treturn false;\n\t}\n};\n\n\n//# sourceURL=webpack:///./node_modules/type/prototype/is.js?");

/***/ }),

/***/ "./node_modules/type/value/is.js":
/*!***************************************!*\
  !*** ./node_modules/type/value/is.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// ES3 safe\nvar _undefined = void 0;\n\nmodule.exports = function (value) { return value !== _undefined && value !== null; };\n\n\n//# sourceURL=webpack:///./node_modules/type/value/is.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var dropbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dropbox */ \"./node_modules/dropbox/dist/Dropbox-sdk.min.js\");\n/* harmony import */ var dropbox__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dropbox__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var print_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! print-object */ \"./node_modules/print-object/index.js\");\n/* harmony import */ var print_object__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(print_object__WEBPACK_IMPORTED_MODULE_1__);\n// require('isomorphic-fetch'); // or another library of choice.\n\n\n\nfunction init(){\n\n    document.getElementById('update').addEventListener('click', function () {\n        const TOKEN = document.getElementById('token').value;\n        console.log(TOKEN);\n        var dbx = new dropbox__WEBPACK_IMPORTED_MODULE_0__[\"Dropbox\"]({ accessToken: TOKEN});\n        dbx.filesListFolder({path: ''})\n            .then(function(response) {\n                console.log(response);\n                document.getElementById('console').innerHTML = print_object__WEBPACK_IMPORTED_MODULE_1___default()(response.entries);\n            })\n            .catch(function(error) {\n                console.log(error);\n            });\n\n    });\n\n}\n\nwindow.addEventListener('load', function () {\n    init();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });