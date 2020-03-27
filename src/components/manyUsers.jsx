import React from "react";
import { Section, Columns, Column } from "bloomer";
import User from "./user";

const ManyUsers = props => {
  const { userData } = props;
  return (
    <Section>
      <Columns isCentered>
        {userData.length > 0 ? (
          userData.map(user => (
            <Column isSize="1/5" className="User" key={user.login.uuid}>
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
