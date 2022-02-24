import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Site Details & Pages Content')
    .items(
      [
        S.listItem()
          .title('Business Details')
          .child(
            S.document()
              .title('Business Details')
              .schemaType('siteSettings')
              .documentId('siteSettings')
          ),
        S.listItem()
          .title('About Page')
          .child(
            S.document()
              .title('About Page')
              .schemaType('aboutPage')
              .documentId('aboutPage')
          ),
        S.divider(),
        ...S.documentTypeListItems().filter(listItem => !['siteSettings', 'aboutPage'].includes(listItem.getId()))
      ]
    )