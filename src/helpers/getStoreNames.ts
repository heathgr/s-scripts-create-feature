import { readdir } from 'fs-extra'
import { join } from 'path'

const getStoreNames = async (): Promise<string[]> => {
  const stores = await readdir(join(process.cwd(), './src/stores'))

  return stores
    .filter((store) => !/\.test\.ts$/.test(store))
    .map((store) => store.replace(/.ts$/, ''))
}

export default getStoreNames
