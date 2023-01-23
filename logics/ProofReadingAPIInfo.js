/**
 * getProofReadingAPIInfo：APIリクエスト情報保持クラス
 */
function ProofReadingAPIInfo() {
    /* ↓APIリクエスト情報を入力 */
    // APIキー
    this.apiKey = "xxx";
    // チェック感度（low, medium, highから選択）
    this.sensitivity = "medium"
    this.url = "https://api.a3rt.recruit.co.jp/proofreading/v2/typo"
    /* ↑APIリクエスト情報を入力 */

    // getter
    this.getApiKey = function() {
        return this.apiKey;
    }
    this.getSensitivity = function() {
        return this.sensitivity;
    }
    this.getUrl = function() {
        return this.url;
    }
}