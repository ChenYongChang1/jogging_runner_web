import result, { setLocale } from './config';
import { computed, ref } from 'vue';

const currentLocale = ref(result().locale);

function t(key) {
  return computed(() => {
    const i18nConfig = result();
    const messages = i18nConfig.messages[currentLocale.value];
    
    const keyPath = key.split('.');
    let value = messages;
    
    for (const k of keyPath) {
      value = value?.[k];
      if (value === undefined) break;
    }
    
    return value;
  });
}

const updateLocale = (newLocale) => {
  currentLocale.value = newLocale;
};

export default {
  global: {
    t,
    locale: currentLocale,
    setLocale: updateLocale,
  },
};