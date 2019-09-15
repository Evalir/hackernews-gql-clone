import React from 'react';
import { useQuery } from 'react-apollo';
import gql from 'graphql-tag';
import Link from './Link';

const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`;

const LinkList = () => {
  const { loading, error, data } = useQuery(FEED_QUERY);
  if (loading) return <h1>Fetching...</h1>;
  if (error) return <h1>Error</h1>;
  return (
    <div>
      {data.feed.links.map(link => (
        <Link key={link.id} link={link} />
      ))}
    </div>
  );
};

export default LinkList;
