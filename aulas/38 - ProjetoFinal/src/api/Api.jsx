import React from 'react';
import UserPost from './endPoints/UserPost';
import TokenPost from './endPoints/TokenPost';
import PhotoPost from './endPoints/PhotoPost';
import PhotoGet from './endPoints/PhotoGet';

const Api = () => {
  // APENAS PARA TESTES!
  return (
    <div>
      <h2>User Post</h2>
      <UserPost />
      <h2>Token Post</h2>
      <TokenPost />
      <h2>Photo Post</h2>
      <PhotoPost />
      <h2>Photo Get</h2>
      <PhotoGet />
    </div>
  );
};

export default Api;
