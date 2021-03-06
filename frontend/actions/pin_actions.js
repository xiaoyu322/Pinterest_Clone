import * as PinsAPIUtil from '../util/pin_api_util';

export const RECEIVE_PINS = 'RECEIVE_PINS';
export const RECEIVE_PIN = 'RECEIVE_PIN';
export const REMOVE_PIN = 'REMOVE_PIN';

export const receivePins = pins => {
  return{
  type: RECEIVE_PINS,
  pins,
  }
};

export const receivePin = pin => ({
  type: RECEIVE_PIN,
  pin,
});

export const removePin = (pinId) => {
  return {
    type: REMOVE_PIN,
    pinId
  };
};

export const fetchAllPins = () => dispatch => {
  PinsAPIUtil.fetchAllPins().then(pins => dispatch(receivePins(pins)))
};

export const fetchPin = (pin) => dispatch => {
  PinsAPIUtil.fetchPin(pin.id).then((pin) => dispatch(receivePin(pin)));
};

export const createPin = pin => dispatch => {
  PinsAPIUtil.createPin(pin).then((pins) => dispatch(receivePins(pins)));
};

export const deletePin = (pinId) => dispatch => {
  PinsAPIUtil.deletePin(pinId).then((pins) => dispatch(receivePins(pins)));
};

export const saveToBoard = (pinBoard) => dispatch => {
  return PinAPIUtil.saveToBoard(pinBoard)
    .then(pinId => dispatch(fetchPin(pinId)),
      error => dispatch(receivePinErrors(error.responseJSON)))
}