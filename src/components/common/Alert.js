import './Alert.css';

export const Alert = ({ children, type, modifiers = [] }) => {
  let classes = 'alert ' + type;
  //   for (let index = 0; index < modifiers.length; index++) {
  //     const mod = modifiers[index];
  //     classes = classes + ' ' + mod;
  //     }
  modifiers.forEach(mod => {
    classes = classes + ' ' + mod;
  });

  return <p className={classes}>{children}</p>;
};
