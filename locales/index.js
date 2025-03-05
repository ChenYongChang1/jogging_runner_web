import result from './config';
function t(key) {
  const i18nConfig = result();
  let currentLocale = i18nConfig.locale;
  const messages = i18nConfig.messages[currentLocale];
  
  // 将 key 按照点号分割，处理嵌套的情况
  const keyPath = key.split('.');
  let value = messages;
  
  // 遍历 keyPath 获取嵌套值
  for (const k of keyPath) {
    value = value?.[k];
    if (value === undefined) break;
  }
  
  return value || `[${key} not found]`;
}

export default {
  global: {
    t,
    locale: result().locale,
  },
};