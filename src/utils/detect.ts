export const isAndroid = (): boolean => {
  return /Android/i.test(navigator.userAgent);
};

export const isIOS = (): boolean => {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
};

export const isMobileDevice = (): boolean => {
  // 检查是否在浏览器环境中
  if (typeof window === 'undefined') {
    return false;
  }
  const userAgent = window.navigator.userAgent.toLowerCase();
  const mobile = {
    android: /android/i.test(userAgent),
    ios: /iphone|ipad|ipod/i.test(userAgent),
    windows: /windows phone/i.test(userAgent),
    other: /webos|blackberry|iemobile|opera mini|kindle|silk/i.test(userAgent),
  };
  
  // 使用 navigator.maxTouchPoints 检测触摸设备
  const hasTouchScreen = window.navigator.maxTouchPoints > 0;
  
  return Object.values(mobile).some(Boolean) || hasTouchScreen;
};

export const checkAppInstalled = (scheme: string): Promise<boolean> => {
  return new Promise<boolean>((resolve) => {
    const iframe: HTMLIFrameElement = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = scheme;
    document.body.appendChild(iframe);
    console.log("iframe", iframe);
    const cleanup = () => {
      document.body.removeChild(iframe);
      window.onblur = null; // 清理事件监听器
    };

    setTimeout(() => {
      cleanup();
      console.log("2秒后执行");
      resolve(false);
    }, 2000);

    window.onblur = () => {
      cleanup();
      console.log("onblur");
      resolve(true);
    };
  });
};
