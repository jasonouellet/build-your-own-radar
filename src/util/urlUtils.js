const QueryParams = require('../util/queryParamProcessor')
const config = require('../config')
function constructSheetUrl(sheetName) {
  const noParamsUrl = window.location.href.substring(0, window.location.href.indexOf(window.location.search))
  const queryParams = QueryParams(window.location.search.substring(1))
  const sheetUrl =
    noParamsUrl +
    (config().featureToggles.UIRefresh2022
      ? '?documentId=' + queryParams.documentId
      : '?sheetId=' + queryParams.sheetId) +
    '&sheetName=' +
    encodeURIComponent(sheetName)
  return sheetUrl
}

function getDocumentOrSheetId() {
  const queryString = window.location.href.match(/documentId(.*)/) ?? window.location.href.match(/sheetId(.*)/)
  const queryParams = queryString ? QueryParams(queryString[0]) : {}

  return queryParams.documentId ?? queryParams.sheetId
}

module.exports = {
  constructSheetUrl,
  getDocumentOrSheetId,
}
