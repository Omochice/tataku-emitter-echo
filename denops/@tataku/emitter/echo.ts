import { Denops } from "jsr:@denops/std@7.3.2";
import { echo } from "jsr:@denops/std@7.3.2/helper";
import type { EmitterFactory } from "jsr:@omochice/tataku-vim@1.0.3";

const emitter: EmitterFactory = (denops: Denops, _option: unknown) => {
  return new WritableStream<string[]>({
    write: async (chunk: string[]) => {
      await echo(denops, chunk.join("\n"));
    },
  });
};

export default emitter;
