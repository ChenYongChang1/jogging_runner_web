import { useFetch, useRuntimeConfig } from "#app";
import type { UseFetchOptions } from "nuxt/app";

interface RequestOptions extends UseFetchOptions<any> {
  customBaseURL?: string;
  ssr?: boolean;
}

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
type HandleRequestOptions = { request: Request; options: RequestOptions };
type HandleResponseOptions = { response: any };

// 请求拦截器
function handleRequest({ options }: HandleRequestOptions) {
  const { $i18n: i18n } = useNuxtApp();
  options.headers = {
    ...options.headers,
    language: i18n.locale.value,
    "Content-Type": "application/json",
  };
}

// 响应拦截器
function handleResponse({ response }: HandleResponseOptions) {
  if (response._data.error) {
    throw new Error(response._data.error.message);
  }
  return response._data;
}

/**
 * 创建请求方法
 * @param method
 */
function createUseFetchRequest(method: HttpMethod) {
  return async function (
    url: string,
    data?: any,
    options: RequestOptions = { ssr: typeof window !== "undefined" }
  ) {
    const {
      public: { API_BASE_ENV },
    } = useRuntimeConfig();

    const baseURL = "/" as string;
    const paramsKey = [];
    if (method === "GET") {
      for (const i in data) {
        paramsKey.push(`${i}=${encodeURIComponent(data[i])}`);
      }
      data = undefined;
    }
    const requestUrl = url; // new URL(url, baseURL).toString();
    const realUrl =
      requestUrl + (paramsKey.length ? "?" : "") + paramsKey.join("&");

    const fetchData = async (
      realUrl: string,
      options: any,
      method: string,
      data: any
    ) => {
      // 公共配置
      const fetchOptions = {
        ...options,
        method,
        body: data,
        key: realUrl,
        lazy: true,
        onRequest: handleRequest,
        onResponse: handleResponse,
      };

      // 根据 SSR 配置选择使用 useAsyncData 或 useFetch
      return options.ssr
        ? await useAsyncData(realUrl, () => $fetch(realUrl, fetchOptions))
        : await useFetch(realUrl, fetchOptions);
    };
    return await fetchData(realUrl, options, method, data);
  };
}

// 提供 useFetch & HTTP 方法 - 统一管理请求 - 再到组件中使用
export const useFetchGet = createUseFetchRequest("GET");
export const useFetchPost = createUseFetchRequest("POST");
export const useFetchPut = createUseFetchRequest("PUT");
export const useFetchDelete = createUseFetchRequest("DELETE");
