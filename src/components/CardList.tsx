import React from 'react';
import Card from './Card';
import { IRobots, IRobot } from '../types';

const CardList: React.FunctionComponent<IRobots> = ({ robots }) => {
  return (
    <div>
      {
        robots.map((user: IRobot, i: number) => {
          return (
            <Card 
              key={i}
              id={user.id}
              name={user.name}
              email={user.email}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;