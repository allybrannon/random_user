import React from "react";
import { Section, Columns, Column } from "bloomer";
import User from "./user";

const ManyUsers = props => {
  const { userData } = props;
  return (
    <Section>
      <Columns isMultiline>
        {userData.length > 0 ? (
          userData.map(user => (
            <Column isSize="1/3" className="User" key={user.login.uuid}>
              <User user={user} />
            </Column>
          ))
        ) : (
          <li>No User Data</li>
        )}
      </Columns>
    </Section>
  );
};

export default ManyUsers;
