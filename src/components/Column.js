import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

const Column  = (props) => {
  
  const cardList = props.cards.map(card => <Card key={card.position} {...card} />)

  return(
    <div className="col-3">
    <div className="card">
      <div className="card-body">
        <h6 className="card-subtitle mb-2 text-muted">{props.title}</h6>
        <div>
          {cardList}
          <Link to={'/new-card'} params={{id: props.id, pos: props.cards.length + 1}}> New Card </Link>
        </div>
      </div>
  </div>
  </div>
  )
  }

export default Column;