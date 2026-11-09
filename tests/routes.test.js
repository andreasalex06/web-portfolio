import test from 'node:test'
import assert from 'node:assert/strict'
import { projectPath, publicProjectPath, resolveHash, resolveLocation } from '../src/routes.js'
import { projectCatalog } from '../src/project-catalog.js'
import { projectDetails } from '../src/project-details.js'

const projects = ['clinicapp', 'batch-tracer', 'relay', 'cat2catch', 'atrium']

test('resolves home and existing sections', () => {
  assert.deepEqual(resolveHash('', projects), { type: 'home' })
  assert.deepEqual(resolveHash('#/', projects), { type: 'home' })
  for (const section of ['tentang', 'proses', 'proyek', 'kontak']) {
    assert.deepEqual(resolveHash(`#/${section}`, projects), { type: 'section', section })
  }
})

test('resolves every shared project URL', () => {
  for (const projectId of projects) {
    assert.deepEqual(resolveHash(projectPath(projectId), projects), { type: 'project', projectId })
  }
})

test('rejects unknown and malformed routes', () => {
  for (const hash of ['#/studi/unknown', '#/studi/', '#/studi/clinicapp/extra', '#/missing', '#/studi/%ZZ']) {
    assert.deepEqual(resolveHash(hash, projects), { type: 'not-found' })
  }
})

test('resolves public project pages and preserves legacy hashes', () => {
  const base = '/web-portfolio/'
  for (const projectId of projects) {
    const path = publicProjectPath(projectId, base)
    assert.deepEqual(resolveLocation('', path, base, projects), { type: 'project', projectId })
    assert.deepEqual(resolveLocation(projectPath(projectId), base, base, projects), { type: 'project', projectId })
    assert.deepEqual(resolveLocation('#/proyek', path, base, projects), { type: 'section', section: 'proyek' })
  }
  assert.deepEqual(resolveLocation('', base + 'proyek/nope/', base, projects), { type: 'not-found' })
})

test('project summaries and details remain keyed by project id', () => {
  assert.equal(new Set(projectCatalog.map(project => project.id)).size, projectCatalog.length)
  for (const project of projectCatalog) {
    assert.ok(project.summary.id && project.summary.en)
    assert.ok(projectDetails[project.id]?.id && projectDetails[project.id]?.en)
  }
})
