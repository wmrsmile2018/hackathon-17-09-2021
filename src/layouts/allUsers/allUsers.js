import React from "react";
import clsx from "clsx";
import key from "weak-key";

import InfoBlock from "../../components/infoBlock";
import Pages from "../../components/pages";
import { Title } from "../../components/title";

import "./allUsers.scss";
import { Button } from "../../components/button";

const { Card } = Pages;

const mock = [
  {
    "category": "напитки",
    "amount": 3000,
  },
  {
    "category": "напитки2",
    "amount": 3000,
  },
  {
    "category": "еда",
    "amount": 2000,
  },
  {
    "category": "услуги",
    "amount": 2000,
  },
  {
    "category": "топливо",
    "amount": 1000,
  },
];

export const AllUsers = ({ className, rootPath, path, onUpdate }) => {
  const classes = clsx("all-users", className);
  return (
    <Card className={classes} rootPath={rootPath} path={path}>
      <Title>Данные по всем пользователям</Title>
      <div className="all-users-content">
        <Button className="all-users-update" onClick={onUpdate}>
          Обновить данные
        </Button>
        <div className="all-users-list">
          {mock.map((el) => (
            <InfoBlock key={key(el)} title={el.category}>
              {el.amount}
            </InfoBlock>
          ))}
        </div>
      </div>
    </Card>
  );
};
