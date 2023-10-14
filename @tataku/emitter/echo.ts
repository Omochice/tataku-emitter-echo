import { Denops } from "https://deno.land/x/denops_std@v3.8.1/mod.ts";
import { echo } from "https://deno.land/x/denops_std@v3.8.1/helper/mod.ts";

export async function run(
  denops: Denops,
  _options: Record<string, unknown>,
  source: string[],
): Promise<void> {
  await echo(denops, source.join("\n"));
}
