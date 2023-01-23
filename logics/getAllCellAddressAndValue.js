/**
 * getAllCellAddressAndValue：セル情報取得
 * @param {*} workBook ワークブックオブジェクト
 * @returns cellValueList セルアドレスおよび値リスト
 */
function getAllCellAddressAndValue(workBook) {
    // 値格納用リスト
    let cellValueList = [];

    // シート名一覧取得
    const workSheetNames = Array.from(workBook.SheetNames);

    // 各シートの値が格納されてるセルの値とアドレスを取得
    workSheetNames.forEach((workSheetName, index) => {

        const currentWorkSheet = workBook.Sheets[workSheetName];

        // 使用されているセル範囲を取得
        const range = XLSX.utils.decode_range(currentWorkSheet['!ref']);

        // 全セルを巡回
        for (var colIdx = range.s.c; colIdx <= range.e.c; colIdx++) {
            for (var rowIdx = range.s.r; rowIdx <= range.e.r; rowIdx++) {

                // セルの情報を取得
                let address = XLSX.utils.encode_cell({ r: rowIdx, c: colIdx });
                let cell = currentWorkSheet[address];
                if (cell !== undefined) {
                    cellValueList.push({ sheetName: workSheetName, cellAddress: address, cellValue: cell.v });
                }
            }
        }
        
    })
    return cellValueList
}