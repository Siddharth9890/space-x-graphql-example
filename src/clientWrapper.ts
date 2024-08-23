import { SdkFunctionWrapper } from "../graphqlSDKGenerator/graphqlSDKGenerator";

export const clientTimingWrapper: SdkFunctionWrapper = async <T>(
  action: () => Promise<T>,
  operationName: string,
  operationType?: string
): Promise<T> => {
  const startTime = new Date();
  const result: Awaited<T> = await action();
  console.log(
    `SPACE_X_SDK ${Object.keys(result as any)[0]} ${operationType} took ${
      (new Date() as any) - (startTime as any)
    } (ms)`
  );
  return result;
};
