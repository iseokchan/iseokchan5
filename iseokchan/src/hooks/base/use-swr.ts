import _useSWR from "swr";

import { fetcher } from "src/utils";

interface CustomSWRHook {
  <Data>(url: string, validator?: (data: Data) => boolean): ReturnType<
    typeof _useSWR<Data>
  >;
  <Data, Return>(
    url: string,
    mapper: (data: Data) => Return,
    validator?: (data: Data) => boolean
  ): { data?: Return } & Omit<ReturnType<typeof _useSWR<Data>>, "data">;
}

export const useSWR: CustomSWRHook = <Data, Return = Data>(
  url: string,
  mapper?: (data: Data) => Return,
  validator?: (data: Data) => boolean
) => {
  const { data: _data, error: _error, ...rest } = _useSWR<Data>(url, fetcher);

  if (!_data || _error) {
    return { data: undefined, error: _error, ...rest };
  }

  if (validator?.(_data) === false) {
    const error = new Error("서버에 오류가 발생했어요.");
    return { data: undefined, error, ...rest };
  }

  return { data: mapper ? mapper(_data) : (_data as Return), ...rest };
};
