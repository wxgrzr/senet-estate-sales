import { CogIcon } from '@sanity/icons';
import type { StructureBuilder } from 'sanity/structure';

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      ...S.documentTypeListItems().filter((listItem) => {
        const id = listItem.getId();
        return id ? !['siteSettings', 'post'].includes(id) : false;
      }),
      S.divider(),
      S.listItem()
        .icon(CogIcon)
        .title('Site Settings')
          .child(
            S.editor()
              .title('Site Settings')
              .schemaType('siteSettings')
              .documentId('siteSettings'))
    ]);
