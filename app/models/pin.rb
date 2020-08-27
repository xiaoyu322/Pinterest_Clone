class Pin < ApplicationRecord
    validates :title, presence: true

    has_one_attached :photo
    
    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    has_many :boards,
        through: :pin_board

end
