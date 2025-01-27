import "./style.css";

import {
  createUniver,
  defaultTheme,
  LocaleType,
  LogLevel,
  merge,
} from '@univerjs/presets';


import { UniverSheetsConditionalFormattingPreset } from '@univerjs/presets/preset-sheets-conditional-formatting';
import sheetsConditionalFormattingEnUS from '@univerjs/presets/preset-sheets-conditional-formatting/locales/en-US';
import { UniverSheetsCorePreset } from '@univerjs/presets/preset-sheets-core';
import sheetsCoreEnUS from '@univerjs/presets/preset-sheets-core/locales/en-US';
import { UniverSheetsDataValidationPreset } from '@univerjs/presets/preset-sheets-data-validation';
import sheetsDataValidationEnUS from '@univerjs/presets/preset-sheets-data-validation/locales/en-US';
import { UniverSheetsDrawingPreset } from '@univerjs/presets/preset-sheets-drawing';
import sheetsDrawingEnUS from '@univerjs/presets/preset-sheets-drawing/locales/en-US';
import { UniverSheetsFilterPreset } from '@univerjs/presets/preset-sheets-filter';
import sheetsFilterEnUS from '@univerjs/presets/preset-sheets-filter/locales/en-US';
import { UniverSheetsHyperLinkPreset } from '@univerjs/presets/preset-sheets-hyper-link';
import sheetsHyperLinkEnUS from '@univerjs/presets/preset-sheets-hyper-link/locales/en-US';
import UniverPresetSheetsAdvancedEnUS from '@univerjs/presets/preset-sheets-advanced/locales/en-US';
import { UniverSheetsAdvancedPreset } from '@univerjs/presets/preset-sheets-advanced';

import '@univerjs/presets/lib/styles/preset-sheets-core.css';
import '@univerjs/presets/lib/styles/preset-sheets-conditional-formatting.css';
import '@univerjs/presets/lib/styles/preset-sheets-data-validation.css';
import '@univerjs/presets/lib/styles/preset-sheets-drawing.css';
import '@univerjs/presets/lib/styles/preset-sheets-filter.css';
import '@univerjs/presets/lib/styles/preset-sheets-hyper-link.css';
import '@univerjs/presets/lib/styles/preset-sheets-advanced.css';

const { univerAPI } = createUniver({
  logLevel: LogLevel.VERBOSE,
  locale: LocaleType.EN_US,
  locales: {
    [LocaleType.EN_US]: merge(
      {},
      sheetsCoreEnUS,
      sheetsConditionalFormattingEnUS,
      sheetsDataValidationEnUS,
      sheetsDrawingEnUS,
      sheetsFilterEnUS,
      sheetsHyperLinkEnUS,
      UniverPresetSheetsAdvancedEnUS
    ),
  },
  theme: defaultTheme,
  presets: [
    UniverSheetsCorePreset({
      container: 'app',
    }),
    UniverSheetsConditionalFormattingPreset(),
    UniverSheetsDataValidationPreset(),
    UniverSheetsDrawingPreset(),
    UniverSheetsFilterPreset(),
    UniverSheetsHyperLinkPreset(),
    UniverSheetsAdvancedPreset(),
  ] as any[],
});

const seedWorkbookData = {
  "id": "qzhdra",
  "sheetOrder": [
      "sgCc4KQhuoLihvN2RuAuK"
  ],
  "name": "Test Sheet",
  "appVersion": "0.5.5",
  "locale": LocaleType.EN_US,
  "sheets": {
      "sgCc4KQhuoLihvN2RuAuK": {
          "id": "sgCc4KQhuoLihvN2RuAuK",
          "name": "Sheet1",
          "tabColor": "",
          "hidden": 0,
          "rowCount": 1000,
          "columnCount": 20,
          "zoomRatio": 1,
          "freeze": {
              "xSplit": 0,
              "ySplit": 0,
              "startRow": -1,
              "startColumn": -1
          },
          "scrollTop": 0,
          "scrollLeft": 0,
          "defaultColumnWidth": 88,
          "defaultRowHeight": 24,
          "mergeData": [],
          "cellData": {
              "0": {
                  "0": {
                      "v": "Service",
                      "t": 1,
                      "s": "VBVvzA"
                  },
                  "1": {
                      "v": "Monthly",
                      "t": 1,
                      "s": "5dzgxD"
                  },
                  "2": {
                      "v": "Annual",
                      "t": 1,
                      "s": "5dzgxD"
                  }
              },
              "1": {
                  "0": {
                      "v": "Netflix ",
                      "t": 1,
                      "s": "79CIc3"
                  },
                  "1": {
                      "v": 22.04,
                      "t": 2,
                      "s": "FgwM3w"
                  },
                  "2": {
                      "v": 264.48,
                      "t": 2,
                      "s": "FgwM3w"
                  }
              },
              "2": {
                  "0": {
                      "v": "Prime ",
                      "t": 1,
                      "s": "79CIc3"
                  },
                  "1": {
                      "v": 8.66,
                      "t": 2,
                      "s": "FgwM3w"
                  },
                  "2": {
                      "v": 103.95,
                      "t": 2,
                      "s": "FgwM3w"
                  }
              }
          },
          "rowData": {
              "0": {
                  "h": 21
              },
              "1": {
                  "h": 21
              },
              "2": {
                  "h": 21
              }
          },
          "columnData": {
              "0": {
                  "w": 107
              },
              "1": {
                  "w": 100
              },
              "2": {
                  "w": 100
              }
          },
          "showGridlines": 1,
          "rowHeader": {
              "width": 46,
              "hidden": 0
          },
          "columnHeader": {
              "height": 20,
              "hidden": 0
          },
          "rightToLeft": 0
      }
  },
}

univerAPI.createUniverSheet(seedWorkbookData);

document.getElementById('test_btn')?.addEventListener('click', () => {
  const activeWorkbook = univerAPI.getActiveWorkbook();
  const snapshot = activeWorkbook?.save();
  console.log('snapshot', snapshot);
})
