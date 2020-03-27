import React from "react";
import { Card, CardImage, Image, CardContent } from "bloomer";

const User = props => {
  const { user } = props;

  return (
    <Card>
      <CardImage>
        <Image
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
        />
      </CardImage>
      <CardContent>
        <p>
          {user.name.first} {user.name.last}
        </p>
        <p>{user.email}</p>
        <p>{user.cell}</p>
      </CardContent>
    </Card>
  );
};

export default User;
