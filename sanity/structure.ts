import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('profile').title('Profile'),
      S.documentTypeListItem('job').title('Jobs'),
      S.documentTypeListItem('project').title('Projects'),
      S.documentTypeListItem('heroe').title('Heroes'),
      S.documentTypeListItem('publication').title('Publications'),
      S.documentTypeListItem('talk').title('Talks'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['profile', 'job', 'project', 'heroe', 'publication', 'talk'].includes(item.getId()!),
      ),
    ])
