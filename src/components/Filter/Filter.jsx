import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getFilterValue } from 'redux/selectors';
import { setFilterValue } from 'redux/filter/slice';
import {WrapperForInput} from './Filter.styled'

export default function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);

  const onSearchValue = e => {
    dispatch(setFilterValue(e.target.value));
  };

  return (
    <div>
      <label htmlFor="filter">Find contacts by name</label>
      <WrapperForInput>
      <input
        type="text"
        value={filterValue}
        id="filter"
        onChange={onSearchValue}
        placeholder="Jacob Mercer"
        />
        </WrapperForInput>
    </div>
  );
}
