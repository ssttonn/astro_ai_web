import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { MainResponse } from "../../models/MainResponse";

class ApiService {
  private axiosInstance: AxiosInstance;
  private static instance: ApiService;

  private constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
    });
  }

  public static getInstance(baseURL?: string): ApiService {
    if (!this.instance && baseURL) {
      this.instance = new ApiService(baseURL);
    }

    return this.instance;
  }

  public async get<T>(
    url: string,
    config?: AxiosRequestConfig<unknown> | undefined
  ): Promise<T> {
    try {
      const response: AxiosResponse<MainResponse<T>> =
        await this.axiosInstance.get<MainResponse<T>>(url, config);
      return response.data.data as T;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async post<T, K>(
    url: string,
    data: K,
    config?: AxiosRequestConfig<unknown> | undefined
  ): Promise<T> {
    try {
      const response: AxiosResponse<MainResponse<T>> =
        await this.axiosInstance.post<MainResponse<T>>(url, data, config);
      return response.data.data as T;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async put<T, K>(
    url: string,
    data: K,
    config?: AxiosRequestConfig<unknown> | undefined
  ): Promise<T> {
    try {
      const response: AxiosResponse<MainResponse<T>> =
        await this.axiosInstance.put<MainResponse<T>>(url, data, config);
      return response.data.data as T;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async delete<T>(
    url: string,
    config?: AxiosRequestConfig<unknown> | undefined
  ): Promise<T> {
    try {
      const response: AxiosResponse<MainResponse<T>> =
        await this.axiosInstance.delete<MainResponse<T>>(url, config);
      return response.data.data as T;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async patch<T, K>(
    url: string,
    data: K,
    config?: AxiosRequestConfig<unknown> | undefined
  ): Promise<T> {
    try {
      const response: AxiosResponse<MainResponse<T>> =
        await this.axiosInstance.patch<MainResponse<T>>(url, data, config);
      return response.data.data as T;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  private handleError(error: unknown): string {
    if (error instanceof AxiosError) {
      return (
        (error.response?.data.message as string) ??
        "An error occurred, please try again"
      );
    }

    return "An error occurred, please try again";
  }
}

export default ApiService;
