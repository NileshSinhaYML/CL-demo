import React, { ReactElement } from 'react';
import './_card.scss';

interface CardComponentProps {
  children?: ReactElement;
}

const CardComponent = ({ children }: CardComponentProps) => (
  <div className="card-main">{children}</div>
);

export default CardComponent;
