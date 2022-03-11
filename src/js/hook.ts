import { createInterface } from 'readline'
import { simpleParser }  from 'mailparser'
import axios from 'axios'
import Config from './classes/config'

const main = async () => {
  process.stdin.setEncoding('utf-8')
  const render = createInterface({input: process.stdin})

  const lines: string[] = []
  render.on('line', (line) => {
    lines.push(line)
  })

  render.on('close', () => {
    simpleParser(lines.join("\n"), {}, async (err, parsed) => {
      const url = Config.get('hook-url')
      const response = await axios.post(url, {
        text: parsed.subject + "<br>" + parsed.text
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
    })
  })
}

main().catch(e => console.log(e))
