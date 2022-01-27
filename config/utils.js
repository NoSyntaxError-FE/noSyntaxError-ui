import { readdirSync } from 'fs'
import { resolve } from 'path'

//读取components文件夹下的组件，方便多入口打包
export function getFileName() {
  const path = resolve('src/components')
  try {
    const files = readdirSync(path)
    return files
  } catch (error) {
    console.error(error)
    return []
  }
}
