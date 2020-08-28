class Board < ApplicationRecord
    validates :title, :user_id, presence: true

    belongs_to :user, 
        foreign_key: :user_id,
        class_name: :User
        
    has_many :pin_boards, dependent: :destroy
    
    has_many :pins,
        through: :pin_boards

end
