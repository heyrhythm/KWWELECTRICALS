import React from 'react';

interface PageProps {
  params: {
    slug: string;
  };
}

const Page = ({ params }: PageProps) => {
  return <div>page : {params.slug}</div>;
};

export default Page;
