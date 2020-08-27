json.pin do
  json.extract! @pin, :title, :user_id, :id, :photo
  json.photo_url url_for(@pin.photo)
end