export function logger({getState}) {
  return next => action => {
    console.log('DISPATCHING: ' + action.type);
    console.log(action.payload || 'Payload is omitted');
    console.log();
    return next(action);
  };
}
