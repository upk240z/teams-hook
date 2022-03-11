import fs from "fs";
import YAML from "yaml";

export default class Config {
  public static basedir() {
    return __dirname + '/../..'
  }

  public static get(name: string, file: string = 'application'): any {
    try {
      const config = YAML.parse(
        fs.readFileSync(
          `${Config.basedir()}/config/${file}.yaml`,
          {encoding: 'utf8'}
        )
      )
      if (config[name] == undefined) {
        return null
      }
      return config[name]
    } catch (err) {
      console.log(err)
      return null
    }
  }
}
