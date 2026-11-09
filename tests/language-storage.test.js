import test from 'node:test'
import assert from 'node:assert/strict'
import { readLanguage, saveLanguage } from '../src/language-storage.js'

test('falls back safely when browser storage is blocked', () => {
  globalThis.window = {
    get localStorage() { throw new Error('Storage denied') },
  }
  try {
    assert.equal(readLanguage(), 'id')
    assert.doesNotThrow(() => saveLanguage('en'))
  } finally {
    delete globalThis.window
  }
})
