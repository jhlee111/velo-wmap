/// <reference path="/elementsMap.d.ts" />
/// <reference path="/types/pages/$w.d.ts" />
/// <reference path="../wix-code-types/dist/types/page/index.d.ts" />

// Mapping of page elements where hash-based keys are converted to non-hash and prefixed with '$'.
type PageElementsMapWithDollar = {
  [K in keyof PageElementsMap as K extends `#${infer J}` ? `$${J}` : never]: PageElementsMap[K];
};

// Type alias for keys of PageElementsMapWithoutHash prefixed with '$'.
type NicknamesWithDollarPrefix = keyof PageElementsMapWithDollar;

// Mappings from '$' prefixed nicknames to their corresponding values in PageElementsMapWithDollar.
type $wElementMappings = {
  [Nickname in NicknamesWithDollarPrefix]: PageElementsMapWithDollar[Nickname];
};

// Declaration of the 'we' function.
export declare function wmap(selector: typeof $w): $wElementMappings;