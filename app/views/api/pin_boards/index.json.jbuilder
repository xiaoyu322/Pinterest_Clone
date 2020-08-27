@pin_boards.each do |pb|
    json.set! pb.id do
        json.extract! pb, :pin_id, :board_id
    end
end