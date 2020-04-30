import React from 'react';
import { Helmet } from 'react-helmet';
import { MetaData as MetaDataType } from '@custom-types/index';

type Props = {
  metaData: MetaDataType;
};

const MetaData: React.FC<Props> = ({ metaData }) => {
  const {
    fields: { title, description, keywords, url }
  } = metaData;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="#" />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@MiracleEar" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default MetaData;
