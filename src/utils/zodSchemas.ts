import { z } from "zod";
import { ethAddressRegex } from "./regex";

export const zodEthAddress = z.custom<`0x${string}`>((val) =>
  ethAddressRegex.test(val as string)
);
