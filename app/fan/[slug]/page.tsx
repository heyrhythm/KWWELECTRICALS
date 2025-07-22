import React from 'react';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;
  
  return <div>page : {slug}</div>;
};

export default Page;
