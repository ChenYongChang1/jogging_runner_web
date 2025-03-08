module.exports = {
  input: "src",
  output: "",
  secretId: '', // 请输入你的腾讯翻译api的用户secretId
  secretKey: '', // 请输入你的腾讯翻译api的用户secretKey
  exclude: ["**/node_modules/**/*"],
  rules: {
    js: {
      caller: "",
      functionName: "$t",
      customizeKey: function getCustomizeKey(key, path) {
        key = key.replace(/\./g, "_").replace(/ /g, "").replace(/\[|\]/g, "_");
        path =
          path === null || path === void 0 ? void 0 : path.replace("./", "");
        const [type, ...fullPathArr] = (path || "").slice(4, -4).split("/");
        if (type === "pages") {
          const [moduleName] = fullPathArr;
          return `${moduleName}.${key}`;
        }
        return `common.${key}`;
      },
      importDeclaration:
        "const { $i18n: i18n } = useNuxtApp()\nconst $t = i18n.t",
    },
    ts: {
      caller: "",
      functionName: "$t",
      customizeKey: function getCustomizeKey(key, path) {
        key = key.replace(/\./g, "_").replace(/ /g, "").replace(/\[|\]/g, "_");
        path =
          path === null || path === void 0 ? void 0 : path.replace("./", "");
        const [type, ...fullPathArr] = (path || "").slice(4, -4).split("/");
        if (type === "pages") {
          const [moduleName] = fullPathArr;
          return `${moduleName}.${key}`;
        }
        return `common.${key}`;
      },
      importDeclaration:
        "const { $i18n: i18n } = useNuxtApp()\nconst $t = i18n.t",
    },
    cjs: {
      caller: "",
      functionName: "$t",
      customizeKey: function getCustomizeKey(key, path) {
        key = key.replace(/\./g, "_").replace(/ /g, "").replace(/\[|\]/g, "_");
        path =
          path === null || path === void 0 ? void 0 : path.replace("./", "");
        const [type, ...fullPathArr] = (path || "").slice(4, -4).split("/");
        if (type === "pages") {
          const [moduleName] = fullPathArr;
          return `${moduleName}.${key}`;
        }
        return `common.${key}`;
      },
      importDeclaration:
        "const { $i18n: i18n } = useNuxtApp()\nconst $t = i18n.t",
    },
    mjs: {
      caller: "",
      functionName: "$t",
      customizeKey: function getCustomizeKey(key, path) {
        key = key.replace(/\./g, "_").replace(/ /g, "").replace(/\[|\]/g, "_");
        path =
          path === null || path === void 0 ? void 0 : path.replace("./", "");
        const [type, ...fullPathArr] = (path || "").slice(4, -4).split("/");
        if (type === "pages") {
          const [moduleName] = fullPathArr;
          return `${moduleName}.${key}`;
        }
        return `common.${key}`;
      },
      importDeclaration:
        "const { $i18n: i18n } = useNuxtApp()\nconst $t = i18n.t",
    },
    jsx: {
      caller: "",
      functionName: "$t",
      customizeKey: function getCustomizeKey(key, path) {
        key = key.replace(/\./g, "_").replace(/ /g, "").replace(/\[|\]/g, "_");
        path =
          path === null || path === void 0 ? void 0 : path.replace("./", "");
        const [type, ...fullPathArr] = (path || "").slice(4, -4).split("/");
        if (type === "pages") {
          const [moduleName] = fullPathArr;
          return `${moduleName}.${key}`;
        }
        return `common.${key}`;
      },
      importDeclaration:
        "const { $i18n: i18n } = useNuxtApp()\nconst $t = i18n.t",
      functionSnippets: "",
    },
    tsx: {
      caller: "",
      functionName: "$t",
      customizeKey: function getCustomizeKey(key, path) {
        key = key.replace(/\./g, "_").replace(/ /g, "").replace(/\[|\]/g, "_");
        path =
          path === null || path === void 0 ? void 0 : path.replace("./", "");
        const [type, ...fullPathArr] = (path || "").slice(4, -4).split("/");
        if (type === "pages") {
          const [moduleName] = fullPathArr;
          return `${moduleName}.${key}`;
        }
        return `common.${key}`;
      },
      importDeclaration:
        "const { $i18n: i18n } = useNuxtApp()\nconst $t = i18n.t",
      functionSnippets: "",
    },
    vue: {
      caller: "",
      importDeclaration:
        "const { $i18n: i18n } = useNuxtApp()\nconst $t = i18n.t",
      functionNameInTemplate: "$t",
      functionNameInScript: "$t",
      customizeKey: function getCustomizeKey(key, path) {
        key = key.replace(/\./g, "_").replace(/ /g, "").replace(/\[|\]/g, "_");
        path =
          path === null || path === void 0 ? void 0 : path.replace("./", "");
        const [type, ...fullPathArr] = (path || "").slice(4, -4).split("/");
        if (type === "pages") {
          const [moduleName] = fullPathArr;
          return `${moduleName}.${key}`;
        }
        return `common.${key}`;
      },
      tagOrder: ["template", "scriptSetup", "script", "style"],
    },
  },
  prettier: { semi: false, singleQuote: true },
  incremental: false,
  localePath: "./locales/module",
  localeFileType: "json",
  translateJsonPath: "./locales/auto-translate",
  excelPath: "./locales/excel/locals.xlsx",
  transferPath: "./locales/translate",
  locales: ["zh-tw"],
  globalRule: { ignoreMethods: ["defineProps"] },
  defaultKey: "zh-cn",
  sortData: ["key", "local", "zh"],
  adjustKeyMap: function (allKeyValue) {
    return allKeyValue;
  },
};
