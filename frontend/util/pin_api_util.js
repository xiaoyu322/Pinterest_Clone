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

export const fetchPin = (pinId) => (
  $.ajax({
    method: 'GET',
    url: `/api/pins/${pinId}`,
  })
);

export const deletePin = (pinId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/pins/${pinId}`,
  });
};