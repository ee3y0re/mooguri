class User < ApplicationRecord
    validates :username, :email, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: { minimum: 6, allow_nil: true }

    after_initialize :ensure_session_token

    has_many :products,
      foreign_key: :seller_id,
      class_name: :Product

    # for future reference, we want to make this when working on user features
    has_many :reviews,
      foreign_key: :reviewer_id,
      class_name: :Review

    attr_reader :password

    def self.find_by_credentials(email, password)
      @user = User.find_by(email: email)
      return nil if @user.nil?
      @user.is_password?(password) ? @user : nil
    end

    def self.find_by_credentials(email, password)
      @user = User.find_by(email: email)
      return nil if @user.nil?
      @user.is_password?(password) ? @user : nil
    end

    def password=(password)
      @password = password
      self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
      BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
      self.session_token = SecureRandom::urlsafe_base64
      self.save!
      self.session_token
    end

    private

    def ensure_session_token
      self.session_token ||= SecureRandom::urlsafe_base64
    end
end
