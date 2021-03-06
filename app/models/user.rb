class User < ApplicationRecord
    validates :name, presence: true
    validates :username, presence: true, uniqueness: true 
    validates :password, length: {minimum: 6, allow_nil: true}
    validates :session_token, presence: true, uniqueness: true 
    validates :password_digest, presence: true 

    attr_reader :password
    after_initialize :ensure_session_token 

    has_many :cart_items,
        foreign_key: :user_id,
        class_name: :Cart 

    has_many :cart_products,
        through: :cart_items,
        source: :product
        
    has_many :reviews,
        foreign_key: :user_id,
        class_name: :Review 

    has_many :transactions,
        foreign_key: :user_id,
        class_name: :Transaction


    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil if user.nil?
        if user.is_password?(password)
            return user  
        end
        nil
    end

    def password=(password)
        @password = password 
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        new_token = SecureRandom.urlsafe_base64(16)
        self.session_token = new_token 
        self.save!
        self.session_token 
    end

    def ensure_session_token 
        self.session_token ||= SecureRandom.urlsafe_base64(16)
    end 

end
