@pins.each do |pin|
        json.pins do
                json.partial! 'api/pins/pin', pin: pin
        end
end