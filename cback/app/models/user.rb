class User < ApplicationRecord
    has_secure_password

    has_many :welk
    has_many :work, through: :welk 
    
    validates :username, presence: true
    validates_uniqueness_of :username
end