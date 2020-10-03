class User < ApplicationRecord
    validates :email, :password_digest, :session_token, presence: true
    validates :email, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }

    after_initialize :ensure_session_token

    attr_reader :password

    has_many :boards, 
        foreign_key: :user_id

    has_many :pins,
        foreign_key: :user_id

    #user_follow
    has_many :received_follows, 
        foreign_key: :user_id, 
        class_name: "Follow"

    has_many :followers, 
        through: :received_follows, 
        source: :follower

    has_many :given_follows, 
        foreign_key: :follower_id, 
        class_name: "Follow"

    has_many :followings, 
        through: :given_follows, 
        source: :followed_user 


    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.is_password?(password)
            user 
        else 
            nil 
        end
    end
    
    def password=(password)
        @password = password 
        self.password_digest = BCrypt::Password.create(password)
    end
    
    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.base64(64)
        self.save!
        self.session_token
    end
    
    private

    def ensure_session_token
        self.session_token ||= SecureRandom.base64(64)
    end
end
