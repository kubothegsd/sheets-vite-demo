import "./style.css";

import { LocaleType, Univer, UniverInstanceType } from "@univerjs/core";
import { defaultTheme } from "@univerjs/design";
import { UniverDocsPlugin } from "@univerjs/docs";
import { UniverDocsUIPlugin } from "@univerjs/docs-ui";
import { UniverFormulaEnginePlugin } from "@univerjs/engine-formula";
import { UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { UniverSheetsPlugin } from "@univerjs/sheets";
import { UniverSheetsFormulaPlugin } from "@univerjs/sheets-formula";
import { UniverSheetsFormulaUIPlugin } from "@univerjs/sheets-formula-ui";
import { UniverSheetsUIPlugin } from "@univerjs/sheets-ui";
import { UniverUIPlugin } from "@univerjs/ui";
import { UniverSheetsNumfmtPlugin } from "@univerjs/sheets-numfmt";

/**
 * The ability to import locales from virtual modules and automatically import styles is provided by Univer Plugins. For more details, please refer to: https://univer.ai/guides/sheet/advanced/univer-plugins.
 * If you encounter issues while using the plugin or have difficulty understanding how to use it, please disable Univer Plugins and manually import the language packs and styles.
 * 
 * 【从虚拟模块导入语言包】以及【自动导入样式】是由 Univer Plugins 提供的能力，详情参考：https://univer.ai/zh-CN/guides/sheet/advanced/univer-plugins
 * 如果您在使用该插件的时候出现了问题，或者无法理解如何使用，请禁用 Univer Plugins，并手动导入语言包和样式
 */
import { zhCN, enUS } from 'univer:locales'

const univer = new Univer({
  theme: defaultTheme,
  locale: LocaleType.EN_US,
  locales: {
    [LocaleType.ZH_CN]: zhCN,
    [LocaleType.EN_US]: enUS,
  },
});

univer.registerPlugin(UniverRenderEnginePlugin);
univer.registerPlugin(UniverFormulaEnginePlugin);

univer.registerPlugin(UniverUIPlugin, {
  container: 'app',
});

univer.registerPlugin(UniverDocsPlugin, {
  hasScroll: false,
});
univer.registerPlugin(UniverDocsUIPlugin);

univer.registerPlugin(UniverSheetsPlugin);
univer.registerPlugin(UniverSheetsUIPlugin);
univer.registerPlugin(UniverSheetsNumfmtPlugin);
univer.registerPlugin(UniverSheetsFormulaPlugin);
univer.registerPlugin(UniverSheetsFormulaUIPlugin);
// create univer sheet instance
univer.createUnit(UniverInstanceType.UNIVER_SHEET, 
    {
        id: 'tTCk1F',
        sheetOrder: ['CcfM8Nybiod9DH8VTNM0o'],
        name: '',
        appVersion: '0.5.1',
        locale: 'zhCN',
        styles: { zdyj_V: { ff: 'Arial', fs: 11 } },
        sheets: {
          CcfM8Nybiod9DH8VTNM0o: {
            id: 'CcfM8Nybiod9DH8VTNM0o',
            name: 'Sheet1',
            tabColor: '',
            hidden: 0,
            rowCount: 1000,
            columnCount: 20,
            zoomRatio: 1,
            freeze: { xSplit: 0, ySplit: 0, startRow: -1, startColumn: -1 },
            scrollTop: 0,
            scrollLeft: 0,
            defaultColumnWidth: 88,
            defaultRowHeight: 24,
            mergeData: [],
            cellData: {
              '0': {
                '0': {
                  p: {
                    id: '__INTERNAL_EDITOR__DOCS_NORMAL',
                    body: {
                      textRuns: [
                        {
                          ed: 1,
                          st: 0,
                          ts: {
                            ff: 'Open Sans',
                            fs: 10,
                            ol: { s: 0 },
                            st: { s: 0 },
                            ul: { s: 0 },
                          },
                        },
                      ],
                      dataStream: '\rV',
                      paragraphs: [
                        { startIndex: 0, paragraphStyle: { horizontalAlign: 0 } },
                      ],
                      customBlocks: [],
                      customRanges: [],
                      customDecorations: [],
                    },
                    drawings: {},
                    settings: { zoomRatio: 1 },
                    documentStyle: {
                      pageSize: { width: null, height: null },
                      marginTop: 0,
                      marginLeft: 2,
                      marginRight: 2,
                      marginBottom: 1,
                      renderConfig: {
                        centerAngle: 0,
                        vertexAngle: 0,
                        wrapStrategy: 0,
                        verticalAlign: 3,
                        horizontalAlign: 0,
                        zeroWidthParagraphBreak: 1,
                      },
                    },
                    drawingsOrder: [],
                  },
                  s: 'HQOGk0',
                },
              },
            },
            rowData: { '0': { ah: 24 } },
            columnData: {},
            showGridlines: 1,
            rowHeader: { width: 46, hidden: 0 },
            columnHeader: { height: 20, hidden: 0 },
            rightToLeft: 0,
          },
        },
        resources: [],
      }
    );
