import { Denops } from "jsr:@denops/std@7.0.2";
import { echo } from "jsr:@denops/std@7.0.2/helper/mod";

const emitter = (denops: Denops, _option: unknown) => {
  return new WritableStream<string[]>({
    write: async (chunk: string[]) => {
      await echo(denops, chunk.join("\n"));
    },
  });
};

export default emitter;
