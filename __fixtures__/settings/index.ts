/**
 * @file Test Fixtures - settings
 * @module fixtures/settings
 */

import type { Settings } from '#src/interfaces'
import branches from './branches'
import environments from './environments'
import labels from './labels'
import repository from './repository'
import teams from './teams'

export default {
  branches,
  environments,
  labels,
  repository,
  teams
} as Required<Settings>
