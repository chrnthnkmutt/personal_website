import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import profile from '../../schemas/profile'
import job from '../../schemas/job'
import project from '../../schemas/project'
import heroe from '../../schemas/heroe'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Personal portfolio types
    profile,
    job,
    project,
    heroe,
    // Blog types
    blockContentType, 
    categoryType, 
    postType, 
    authorType
  ],
}
