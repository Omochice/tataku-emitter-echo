import { Denops } from "https://deno.land/x/denops_std@v3.8.1/mod.ts";
import { echo } from "https://deno.land/x/denops_std@v3.8.1/helper/mod.ts";
import { Emitter } from "https://raw.githubusercontent.com/Omochice/tataku.vim/master/denops/tataku/interface.ts";

export default class implements Emitter {
  constructor() {}
  async run(denops: Denops, source: string[]) {
    await echo(denops, source);
  }
}
