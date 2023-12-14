import { Denops } from "https://deno.land/x/denops_std@v3.12.2/mod.ts";
import { echo } from "https://deno.land/x/denops_std@v3.12.2/helper/mod.ts";

const emitter = (denops: Denops, _option: unknown) => {
  return new WritableStream<string[]>({
    write: async (chunk: string[]) => {
      await echo(denops, chunk.join("\n"));
    },
  });
};

export default emitter;
