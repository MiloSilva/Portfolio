import './Toggle.scss';

type ToggleProps = {
  active: boolean,
  onClick: () => void
};

export const Toggle = (props: ToggleProps) => {
  return (
    <input type='checkbox' checked={props.active} onClick={props.onClick}/>
  );
};