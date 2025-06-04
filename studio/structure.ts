import { HelpCircleIcon, HomeIcon } from '@sanity/icons';
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
        return id
          ? !['reviews', 'contactInfo', 'post', 'faqs'].includes(id)
          : false;
      }),
      S.listItem()
        .title('Customer Reviews')
        .schemaType('reviews')
        .child(
          S.editor()
            .title('Customer Reviews')
            .schemaType('reviews')
            .documentId('reviews'),
        ),
      S.listItem()
        .icon(HelpCircleIcon)
        .title('Frequently Asked Questions')
        .schemaType('faqs')
        .child(
          S.editor()
            .title('Frequently Asked Questions')
            .schemaType('faqs')
            .documentId('faqs'), // Singleton document ID
        ),
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
    ]);
