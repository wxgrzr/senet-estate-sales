import { CogIcon, HomeIcon } from '@sanity/icons';
import type { StructureBuilder } from 'sanity/structure';

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .icon(HomeIcon)
        .title('Estate Sales')
        .schemaType('post')
        .child(S.documentTypeList('post').title('Estate Sales')),
      ...S.documentTypeListItems().filter((listItem) => {
        const id = listItem.getId();
        return id ? !['settings', 'contactInfo', 'post'].includes(id) : false;
      }),
      S.divider(),
      S.listItem()
        .title('Contact Info')
        .schemaType('contactInfo')
        .child(
          S.editor()
            .title('Contact Info')
            .schemaType('contactInfo')
            .documentId('contactInfo'),
        ),
      S.divider(),
      S.listItem()
        .icon(CogIcon)
        .title('Site Settings')
        .child(
          S.editor()
            .title('Site Settings')
            .schemaType('settings')
            .documentId('settings'),
        ),
    ]);
