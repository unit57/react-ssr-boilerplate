import React from 'react';
import MetaData from '@components/MetaData';
import { MetaData as MetaDataType } from '@custom-types/index';

type Props = {
  metaData: MetaDataType;
};

const BasePage: React.FC<Props> = ({ children, metaData }) => {
  return (
    <section className="basepage__container">
      <MetaData metaData={metaData} />
      {children}
      <div className="basepage__container__test">asdfasdfasf</div>
    </section>
  );
};

export default BasePage;
