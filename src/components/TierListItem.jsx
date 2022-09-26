import React from 'react';

const TierListItem = ({item, board, handler}) => {
  return (
    <div 
      className='tierlist__item'
    >
      <img 
        className='tierlist__item-img'
        draggable={true}
        onDragStart={e => handler.dragStart(e, board, item)}
        onDrop={e => handler.drop(e, board, item)}
        onDragOver={e => handler.dragOver(e)}
        src={item.source}
        alt={item.name}
      />
    </div>
  )
}

export default TierListItem;