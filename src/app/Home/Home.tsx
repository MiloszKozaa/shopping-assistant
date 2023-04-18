import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { GetApi } from '../../service/api/CallApi';
import { userModel } from '../../models/user/userModel';
import { useEffect } from 'react';
import { shoppingListModel } from '../../models/shoppingList/shoppingListModel';
import Input from '../../components/Input';
import ShoppingList from './components/ShoppingList';
import './Home.css';
import Button from '../../components/Button';

const Home = () => {
  const navigate = useNavigate();
  const userData = useQuery({
    queryKey: ['user'],
    queryFn: () => GetApi<userModel>('user'),
  });
  const shoppingListsData = useQuery({
    queryKey: ['shopping-list'],
    queryFn: () => GetApi<shoppingListModel[]>('shopping-list'),
  });

  return (
    <div className='home-wrapper'>
      <div className='home-title'>Shopping Lists</div>
      <Input id='Search' label='Search' type='text' />
      <Button
        click={() => {
          navigate('/create/shopping-list');
        }}
        name='Create new list'
      />
      <div className='home-ShoppingList'>
        {shoppingListsData.data?.data.length &&
          shoppingListsData.data?.data.map(
            (shoppingList: shoppingListModel, key: any) => (
              <ShoppingList key={key} shoppingList={shoppingList} />
            )
          )}
      </div>
    </div>
  );
};

export default Home;
