import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import profile from '../../schemas/profile'
import job from '../../schemas/job'
import project from '../../schemas/project'
import heroe from '../../schemas/heroe'
import publication from '../../schemas/publication'
import talk from '../../schemas/talk'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Personal portfolio types
    profile,
    job,
    project,
    heroe,
    publication,
    talk,
    // Blog types
    blockContentType, 
    categoryType, 
    postType, 
    authorType
  ],
}
