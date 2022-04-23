import {Client} from "@nicktomlin/rush-mono-http"

export async function main (name: string) {
  const client = new Client()
  const res = await client.run()
  return `Hi ${name}. Here's an http thing:${JSON.stringify(res, null, 2)}`
}
