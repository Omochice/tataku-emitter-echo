import { Denops } from "jsr:@denops/std@7.4.0";
import { echo } from "jsr:@denops/std@7.4.0/helper";
import type { EmitterFactory } from "jsr:@omochice/tataku-vim@1.1.0";

const emitter: EmitterFactory = (denops: Denops, _option: unknown) => {
  return new WritableStream<string[]>({
    write: async (chunk: string[]) => {
      await echo(denops, chunk.join("\n"));
    },
  });
};

export default emitter;
