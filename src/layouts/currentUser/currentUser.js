import React from "react";
import clsx from "clsx";
import key from "weak-key";

import InfoBlock from "../../components/infoBlock";
import Pages from "../../components/pages";
import { Title } from "../../components/title";
import { Button } from "../../components/button";
import { Input } from "../../components/input";

import "./currentUser.scss";

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

export const CurrentUser = ({ className, rootPath, path, onSubmit }) => {
  const classes = clsx("current-user", className);

  return (
    <Card className={classes} rootPath={rootPath} path={path}>
      <Title>Данные по одному пользователю</Title>
      <div className="current-user-content">
        <div className="current-user-form">
          <Input title="please input id of user" />
          <Button className="current-user-update" onClick={onSubmit}>
            Получить данные
          </Button>
        </div>
        <div className="current-user-list">
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
