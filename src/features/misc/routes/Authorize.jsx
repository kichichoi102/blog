import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export function Authorize() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = 'dev-2vgvgs0lzyt4mp4x.us.auth0.com';
      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: 'read:current_user',
        });
        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const { userMetadata } = await metadataResponse.json();
        console.log(userMetadata);
        setUserMetadata(userMetadata);
      } catch (err) {
        console.log(err.message);
      }
    };
    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <h3>User Metadata</h3>
        {userMetadata ? <pre>{JSON.stringify(userMetadata, null, 2)}</pre> : 'No user metadata defined'}
      </div>
    )
  );
}
