import type { FC } from 'react';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { toggleDarkMode } from '@/redux/reducers/project';

type TriggerDarkModeProps = {
  className?: string;
  isDarkMode: boolean;
};

const TriggerDarkMode: FC<TriggerDarkModeProps> = (props) => {
  const dispatch = useDispatch();
  const { className = '', isDarkMode } = props;

  const triggerDarkMode = () => {
    console.log('click');
    dispatch(toggleDarkMode(!isDarkMode));
  };

  return (
    <Button buttonStyle="MUTED" className="text-xs px-0 py-0 w-[50px] h-[50px]" onClick={triggerDarkMode}>
      {isDarkMode ? 'light' : 'dark'}
    </Button>
  );
};

export default TriggerDarkMode;
