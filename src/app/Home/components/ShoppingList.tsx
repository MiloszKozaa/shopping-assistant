import {
  formatDistance,
  formatDistanceStrict,
  formatDuration,
  formatRelative,
} from 'date-fns';
import { shoppingListModel } from '../../../models/shoppingList/shoppingListModel';
import './ShoppingList.css';

type ShoppingListType = {
  shoppingList: shoppingListModel;
};

const ShoppingList = ({ shoppingList }: ShoppingListType) => {
  const date = new Date(shoppingList.date);

  return (
    <div className='ShoppingList-wrapper'>
      <div className='ShoppingList-header'>
        <div className='ShoppingList-name'>{shoppingList.name}</div>
        <span />
        <div className='ShoppingList-date'>
          {formatDistanceStrict(new Date(), date)} ago
        </div>
      </div>
      <div className='ShoppingList-productsNumber'>
        {shoppingList.items.length} products
      </div>
    </div>
  );
};

export default ShoppingList;
