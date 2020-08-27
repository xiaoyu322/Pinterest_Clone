export const createPin = pin => (
  $.ajax({
    method: 'POST',
    url: '/api/pins',
    data: {pin}
  })
);

export const fetchAllPins = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/pins',
  })
};

export const fetchPin = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/pins/${id}`,
  })
);

export const deletePin = (pinId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/pins/${pinId}`,
  });
};

export const saveToBoard = (pin_board) => {
  return $.ajax({
    url: `/api/pin_boards`,
    method: "POST",
    data: { pin_board }
  })
}