@pins.each do |pin|
  json.set! pin.id do 
    json.extract! pin, :id, :title, :photo, :user_id
    if pin.photo.attached?
      json.photo_url url_for(pin.photo)
    end
  end
end