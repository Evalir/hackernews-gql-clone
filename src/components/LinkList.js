import React from 'react';
import { useQuery } from 'react-apollo';
import gql from 'graphql-tag';
import Link from './Link';

export const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        createdAt
        url
        description
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`;

const LinkList = () => {
  const _updateCacheAfterVote = (store, createVote, linkId) => {
    const data = store.readQuery({ query: FEED_QUERY });
    console.log(data);
    const votedLink = data.feed.links.find(link => link.id === linkId);
    votedLink.votes = createVote.link.votes;
    console.log(data);
    store.writeQuery({ query: FEED_QUERY, data });
  };

  const { loading, error, data } = useQuery(FEED_QUERY);
  if (loading) return <h1>Fetching...</h1>;
  if (error) return <h1>Error</h1>;
  return (
    <div>
      {data.feed.links.map((link, index) => (
        <Link
          key={link.id}
          link={link}
          index={index}
          updateStoreAfterVote={_updateCacheAfterVote}
        />
      ))}
    </div>
  );
};

export default LinkList;
