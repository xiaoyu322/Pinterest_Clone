class PinBoard < ApplicationRecord
    validates :board_id, :pin_id, presence: true

    belongs_to :board,
        foreign_key: :board_id,
        class_name: :Board
        
    belongs_to :pin,
        foreign_key: :pin_id,
        class_name: :Pin
end
